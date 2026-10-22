(function (root) {
  'use strict';
  const SCHEMA = 1;
  const kinds = ['vocabulary', 'expression', 'grammar'];
  const clean = (v, max = 4000) => typeof v === 'string' ? v.trim().slice(0, max) : '';
  const dateKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  const defaultState = () => ({schemaVersion:SCHEMA,name:'Learner',level:1,goal:10,saved:[],custom:[],progress:{},sessions:[],attempts:[],notes:{},drafts:{},activeQuiz:null});
  function validItem(raw) {
    if (!raw || typeof raw !== 'object' || !kinds.includes(raw.kind) || !Number.isInteger(raw.level) || raw.level < 1 || raw.level > 6 || !clean(raw.korean) || !clean(raw.english)) throw new Error('Each card needs a type, level (1–6), Korean and English meaning.');
    const item = {id:clean(raw.id,100),kind:raw.kind,level:raw.level,korean:clean(raw.korean,300),english:clean(raw.english,1000),example:clean(raw.example),translation:clean(raw.translation),topic:clean(raw.topic,100),sourceId:clean(raw.sourceId,100),romanization:clean(raw.romanization,300)};
    if (raw.sourceUrl) { const u = new URL(raw.sourceUrl); if (!['https:','http:'].includes(u.protocol)) throw new Error('Source links must use http or https.'); item.sourceUrl = u.href; }
    return item;
  }
  function shuffle(list, random = Math.random) {
    const a=[...list]; for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a;
  }
  function buildStudyQuestions(items, pool, count = 10) {
    return shuffle(items).slice(0,count).map(item => {
      const others=shuffle(pool.filter(x=>x.kind===item.kind && x.english!==item.english));
      const distractors=[...new Set(others.map(x=>x.english))].slice(0,3);
      if(distractors.length<3) for(const text of ['a different meaning','none of these meanings','another expression']) {if(distractors.length<3 && text!==item.english && !distractors.includes(text)) distractors.push(text);}
      const options=shuffle([item.english,...distractors]);
      return {id:`study-${item.id}`,relatedId:item.id,section:item.kind,prompt:'Choose the English meaning.',passage:item.korean,options,answer:options.indexOf(item.english),explanation:`${item.korean} — ${item.english}${item.example ? '\n'+item.example+'\n'+item.translation : ''}`};
    });
  }
  function gradeQuiz(questions, answers) {
    const rows=questions.map((q,i)=>({question:q,selected:Number.isInteger(answers[i]) ? answers[i] : null,correct:answers[i]===q.answer}));
    const correct=rows.filter(r=>r.correct).length;
    return {rows,correct,total:rows.length,percent:rows.length?Math.round(correct/rows.length*100):0};
  }
  function updateProgress(progress,id,correct,now = Date.now()) {
    if(!id) return;
    const old=progress[id]||{seen:0,correct:0,wrong:0,interval:0};
    const interval=correct?Math.min(30,old.interval?old.interval*2:1):0;
    progress[id]={seen:old.seen+1,correct:old.correct+(correct?1:0),wrong:old.wrong+(correct?0:1),interval,nextDue:now+(correct?interval*86400000:0),lastCorrect:correct};
  }
  function validQuiz(q, ids) {
    if(!q || !['learn','review','exam'].includes(q.type) || !Array.isArray(q.questions) || !q.questions.length || q.questions.length>100 || !Number.isInteger(q.index) || q.index<0 || q.index>=q.questions.length || !Number.isFinite(q.startedAt)) return null;
    if(q.type==='exam' && (!['I','II'].includes(q.exam) || !Number.isFinite(q.deadline)))return null;
    if(q.questions.some(x=>!x || !clean(x.id,100) || !ids.has(x.relatedId) || !clean(x.prompt) || !Array.isArray(x.options) || x.options.length!==4 || x.options.some(o=>typeof o!=='string'||!o.trim()) || !Number.isInteger(x.answer) || x.answer<0 || x.answer>3))return null;
    const questions=q.questions.map(x=>({id:clean(x.id,100),relatedId:x.relatedId,prompt:clean(x.prompt),section:clean(x.section,30),passage:clean(x.passage,8000),audio:clean(x.audio,8000),options:x.options.map(o=>clean(o,1000)),answer:x.answer,explanation:clean(x.explanation,8000)}));
    const answers={}; for(let i=0;i<questions.length;i++) if(Number.isInteger(q.answers?.[i])&&q.answers[i]>=0&&q.answers[i]<4)answers[i]=q.answers[i];
    return {type:q.type,exam:q.type==='exam'?q.exam:undefined,questions,answers,index:q.index,startedAt:q.startedAt,deadline:q.type==='exam'?q.deadline:null};
  }
  function validateBackup(raw, builtinIds = []) {
    if (!raw || raw.schemaVersion!==SCHEMA || !Array.isArray(raw.custom) || !Array.isArray(raw.saved)) throw new Error('This is not a Danuri backup (schema version 1).');
    if (raw.custom.length>5000 || raw.saved.length>10000) throw new Error('Backup is too large. Limit: 5,000 personal cards.');
    const next=defaultState();
    const used=new Set(builtinIds);
    next.custom=raw.custom.map(x=>{const i=validItem(x);if(!i.id || !i.id.startsWith('custom-') || used.has(i.id)) throw new Error('Personal card IDs must be unique and start with custom-.');used.add(i.id);return i;});
    next.saved=[...new Set(raw.saved.filter(id=>typeof id==='string'&&used.has(id)))];
    next.name=clean(raw.name,40)||'Learner'; next.level=[1,2,3,4,5,6].includes(raw.level)?raw.level:1; next.goal=[5,10,20].includes(raw.goal)?raw.goal:10;
    for(const [id,p] of Object.entries(raw.progress||{})) if(used.has(id) && p && ['seen','correct','wrong','interval','nextDue'].every(k=>Number.isFinite(p[k]) && p[k]>=0)) next.progress[id]={seen:Math.floor(p.seen),correct:Math.floor(p.correct),wrong:Math.floor(p.wrong),interval:Math.min(30,p.interval),nextDue:p.nextDue,lastCorrect:p.lastCorrect===true};
    for(const [id,n] of Object.entries(raw.notes||{})) if(used.has(id)) next.notes[id]=clean(n);
    for(const [id,d] of Object.entries(raw.drafts||{})) if(/^w[\w-]*$/.test(id)) next.drafts[id]=clean(d,15000);
    next.sessions=(raw.sessions||[]).filter(s=>s && /^\d{4}-\d{2}-\d{2}$/.test(s.date) && Number.isInteger(s.total) && s.total>0 && s.total<=100 && Number.isInteger(s.correct)&&s.correct>=0&&s.correct<=s.total).slice(-1000).map(s=>({date:s.date,total:s.total,correct:s.correct,type:clean(s.type,20)}));
    next.attempts=(raw.attempts||[]).filter(a=>a && ['I','II'].includes(a.exam) && Number.isInteger(a.total) && a.total>0 && a.total<=100 && Number.isInteger(a.correct)&&a.correct>=0&&a.correct<=a.total && Number.isFinite(a.finishedAt)).slice(-100).map(a=>({exam:a.exam,total:a.total,correct:a.correct,finishedAt:a.finishedAt}));
    next.activeQuiz=validQuiz(raw.activeQuiz,used);
    return next;
  }
  const api={SCHEMA,kinds,dateKey,defaultState,validItem,shuffle,buildStudyQuestions,gradeQuiz,updateProgress,validQuiz,validateBackup};
  if(typeof module!=='undefined') module.exports=api;
  else root.DanuriCore=api;
})(typeof window!=='undefined'?window:globalThis);
