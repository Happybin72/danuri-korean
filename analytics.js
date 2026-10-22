(function (root) {
  'use strict';
  const KEY='danuri-analytics-consent-v1';
  const config=root.DANURI_CONFIG?.analytics||{};
  const id=String(config.measurementId||'').toUpperCase();
  const configured=config.enabled===true&&/^G-[A-Z0-9]{6,20}$/.test(id);
  const routes=new Set(['home','library','collection','exams','stats','settings','quiz','result']);
  const fields=new Set(['screen_name','page_title','page_location','page_referrer','learning_level','content_kind','item_id','item_origin','session_type','question_count','correct_count','score_percent','duration_seconds','exam_type','exit_reason','scope','added_count','source_id','outcome','prompt_id','character_bucket','engagement_time_msec']);
  let choice='unset',started=false,currentScreen='',lastScreen='',previousLocation='';
  try{const saved=root.localStorage.getItem(KEY);if(['granted','denied'].includes(saved))choice=saved;}catch{}
  root.dataLayer=root.dataLayer||[];
  const gtag=function(){root.dataLayer.push(arguments);};
  const denial={analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'};
  gtag('consent','default',denial);
  function start(){
    if(!configured||started||choice!=='granted')return;
    started=true;root['ga-disable-'+id]=false;
    gtag('consent','update',{...denial,analytics_storage:'granted'});
    gtag('js',new Date());
    gtag('config',id,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,debug_mode:config.debug===true});
    const script=root.document.createElement('script');script.async=true;script.id='danuri-google-tag';script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);script.onerror=()=>root.dispatchEvent(new root.CustomEvent('danuri-analytics-unavailable'));root.document.head.appendChild(script);
  }
  function track(name,params={}){
    if(!configured||choice!=='granted'||!/^[a-z][a-z0-9_]{0,39}$/.test(name))return false;
    start();const clean={};for(const [key,value] of Object.entries(params)){if(!fields.has(key))continue;if(typeof value==='number'&&Number.isFinite(value))clean[key]=Math.max(0,value);else if(typeof value==='string')clean[key]=value.slice(0,200);}
    if(config.debug)clean.debug_mode=true;
    gtag('event',name,clean);return true;
  }
  function page(screen){
    if(!routes.has(screen))return;currentScreen=screen;
    if(choice!=='granted'||lastScreen===screen||!configured)return;
    const loc=root.location.origin+root.location.pathname+'#'+screen;
    track('page_view',{screen_name:screen,page_title:'Danuri · '+screen,page_location:loc,page_referrer:previousLocation});
    previousLocation=loc;lastScreen=screen;
  }
  function forgetCookies(){
    const cookies=String(root.document.cookie||'').split(';').map(x=>x.trim().split('=')[0]).filter(n=>/^_ga(?:_|$)/.test(n));
    const host=root.location.hostname;
    const domains=[undefined,host,'.'+host];
    for(let n=1;n<host.split('.').length-1;n++)domains.push('.'+host.split('.').slice(n).join('.'));
    for(const cookie of cookies)for(const domain of domains)root.document.cookie=cookie+'=; Max-Age=0; path=/; SameSite=Lax'+(domain?'; domain='+domain:'');
  }
  function setConsent(next){
    if(!['granted','denied'].includes(next))return;
    choice=next;try{root.localStorage.setItem(KEY,next);}catch{}
    if(next==='granted'){root['ga-disable-'+id]=false;start();gtag('consent','update',{...denial,analytics_storage:'granted'});lastScreen='';if(currentScreen)page(currentScreen);}
    else{root['ga-disable-'+id]=true;if(started)gtag('consent','update',denial);forgetCookies();lastScreen='';}
    root.dispatchEvent(new root.CustomEvent('danuri-analytics-consent',{detail:next}));
  }
  const api={track,page,setConsent,status:()=>({configured,choice,loaded:started,measurementId:configured?id:null}),cardParams:item=>({content_kind:item.kind,learning_level:item.level,item_origin:item.id.startsWith('custom-')?'personal':'catalogue',item_id:item.id.startsWith('custom-')?'personal_card':item.id})};
  root.DanuriAnalytics=api;
  if(choice==='granted')start();
})(typeof window!=='undefined'?window:globalThis);
