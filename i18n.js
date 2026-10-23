(function(root){
  'use strict';
  const KEY='danuri-locale-v1';
  let locale='en';
  try{const saved=root.localStorage?.getItem(KEY);locale=['en','ja'].includes(saved)?saved:(root.navigator?.language||'').startsWith('ja')?'ja':'en';}catch{}
  const cache=new WeakMap();
  const extras={
    'BEGINNER · LEVELS 1–2':'初級 · 1〜2級','INTERMEDIATE & ADVANCED · LEVELS 3–6':'中級・上級 · 3〜6級',
    'Bomi says: One small step is still a step.':'ボミより：小さな一歩も、立派な一歩。','Danuri dialog':'Danuriのダイアログ',
    'Explore cards':'カードを探す','Get comfortable with Korean listening, reading and writing.':'韓国語の聞き取り・読解・作文に慣れていきましょう。',
    'Keep practicing':'練習を続ける','Look how far you’re going.':'積み重ねた学習を見てみよう。','Make this space your own.':'自分だけの学習スペースを作ろう。',
    'Make yourself at home.':'自分に合った学習環境に。','Real practice, small victories. Your journey grows one day at a time.':'実践と小さな達成を、一日ずつ積み重ねましょう。',
    'Reset this device’s data':'この端末のデータをリセット','Set your rhythm, keep a backup, and take Korean with you.':'学習のペースを決めて、バックアップを保存。韓国語をいつも手元に。',
    'Your next chapter starts here.':'次の一歩は、ここから。','↑ Import cards':'↑ カードを読み込む','↓ Export cards':'↓ カードを書き出す','← Leave practice':'← 練習を中断',
    '· These practice sets are shorter than the official exam. Results are practice percentages, not TOPIK scores or level certification.':'· 公式試験より短い練習用セットです。結果は練習の正答率であり、TOPIKの点数や級の認定ではありません。',
    '나만의 카드 · A NEW DISCOVERY':'나만의 카드 · 新しい発見','내 단어장 · YOUR PERSONAL COLLECTION':'내 단어장 · マイコレクション',
    '다누리 · Korean, together.':'다누리 · いっしょに韓国語。','모의시험 · A LITTLE PRACTICE, A LOT OF CONFIDENCE':'모의시험 · 練習を重ねて、自信に',
    '문제로 익히기 · QUICK PRACTICE':'문제로 익히기 · クイック練習','설정 · YOUR SPACE, YOUR PACE':'설정 · 自分に合った学習ペース',
    '쓰기 · TOPIK II WRITING STUDIO':'쓰기 · TOPIK II 作文練習','탐색 · YOUR KOREAN TOOLKIT':'탐색 · 韓国語の学習ツール',
    '학습 기록 · EVERY STEP COUNTS':'학습 기록 · 一歩ずつの学習記録','오늘의 한 마디 · A LITTLE KOREAN':'오늘의 한 마디 · 今日の韓国語',
    '수고했어요 · YOU SHOWED UP':'수고했어요 · よく頑張りました',
    'TOPIK official practice materials ↗':'TOPIK公式の学習資料 ↗','NIKL Korean-English Learners’ Dictionary ↗':'国立国語院 韓国語基礎辞典（日本語）↗',
    'King Sejong Institute Foundation ↗':'世宗学堂財団 ↗','Korean Basic Dictionary, full JSON download (2026-10) ↗':'韓国語基礎辞典・全件JSON（2026年10月）↗',
    'Usage analytics enabled.':'利用分析を有効にしました。','Usage analytics turned off.':'利用分析を無効にしました。',
    'No cards match yet. Try another filter or save a few cards.':'対象のカードがありません。絞り込みを変えるか、カードを保存してください。',
    'These cards need more distinct meanings for a quiz. Try another selection.':'クイズには意味の異なる選択肢が必要です。別のカードを選んでください。',
    'Your in-progress session is ready.':'途中の学習セッションを再開しました。','Removed from your collection.':'コレクションから削除しました。','Saved to your collection.':'コレクションに保存しました。',
    'Note saved for your future self.':'メモを保存しました。','Personal card deleted.':'自作カードを削除しました。','Backup restored. Welcome back.':'バックアップを復元しました。おかえりなさい。','A fresh page is ready.':'データをリセットしました。',
    'Not saved · Export a backup':'未保存 · バックアップを書き出してください',
    'Saved data could not be read. Your original storage is untouched; import a backup in Settings.':'保存データを読み込めませんでした。元のデータは変更していません。設定からバックアップを読み込んでください。',
    'Device storage is unavailable or full. Export a backup in Settings to keep this session.':'端末の保存領域が利用できないか、容量が不足しています。設定からバックアップを書き出してください。',
    'Import a non-empty cards array (maximum 5,000 cards).':'空ではないカード配列を読み込んでください（最大5,000枚）。','Your collection can contain at most 5,000 personal cards.':'自作カードは最大5,000枚まで保存できます。',
    'Source links must use http or https.':'出典リンクにはhttpまたはhttpsを指定してください。','This is not a Danuri backup (schema version 1).':'Danuriのバックアップ（形式バージョン1）ではありません。','Backup is too large. Limit: 5,000 personal cards.':'バックアップが大きすぎます。自作カードの上限は5,000枚です。','Personal card IDs must be unique and start with custom-.':'自作カードのIDは重複せず、custom-で始まる必要があります。',
    'Skip to learning content':'学習コンテンツへ移動','MY KOREAN JOURNEY':'韓国語の学習記録',
    'Words, expressions & grammar':'単語・表現・文法','Current search':'現在の検索',
    'Japanese translation by Danuri; the exact source entry has no Japanese equivalent.':'この項目の日本語訳はDanuriが作成しました。原典の同じ見出しには日本語訳がありません。',
    'vocabulary':'語彙','expression':'表現','grammar':'文法','listening':'聞き取り','reading':'読解',
    'NIKL curriculum and dictionary materials. These are learning levels, not official TOPIK word assignments. Ungraded patterns are available under All levels or Ungraded. Past-exam occurrence has not been verified.':'国立国語院のカリキュラムと辞書に基づく学習レベルです。公式TOPIKの単語レベル分類ではありません。未分類の文型は「すべてのレベル」または「レベルなし」で学習できます。過去試験への出題は確認していません。',
    'Make friends':'TOPIKと','with TOPIK.':'仲良くなろう。',
    'day':'日','days':'日','cards':'枚','saved':'枚保存済み',
    'Made for your next 안녕하세요.':'次の「안녕하세요」のために。','다누리 · One small step at a time.':'다누리 · 一歩ずつ、少しずつ。',
    'Practice a few cards and we’ll bring them back when it’s time.':'カードを練習すると、復習のタイミングでここに表示されます。',
    'Search Korean, English or a topic…':'韓国語・日本語・英語・トピックを検索…',
    'Nice to meet you (formal).':'はじめまして（丁寧な表現）。','Introductions, food, work…':'あいさつ、食べ物、仕事…',
    'Language':'表示言語','English / 日本語':'English / 日本語','App language':'アプリの言語',
    'Language saved on this device. Your personal cards and notes keep their original text.':'言語設定はこの端末に保存されます。自作カードやメモの文章はそのまま保持されます。',
    'Add app':'アプリ追加','Home screen':'ホーム画面','Add to home screen':'ホーム画面に追加',
    'Take Danuri with you.':'Danuriをいつも手元に。','KOREAN, IN YOUR POCKET':'韓国語を、ポケットに。',
    'Install Danuri':'Danuriをインストール','Already running as an app':'アプリとして起動しています',
    'Choose your device':'端末を選択','Android':'Android','iPhone / iPad':'iPhone / iPad','Computer':'パソコン',
    'Use Chrome on Android.':'AndroidのChromeで開いてください。',
    'Tap the install button below, then confirm in your browser.':'下のインストールボタンを押し、ブラウザで確認してください。',
    'You can also use the browser menu:':'ブラウザのメニューからも追加できます。',
    'Open Danuri in Chrome.':'ChromeでDanuriを開きます。',
    'Tap ⋮ → Install app or Add to Home screen.':'⋮ →「アプリをインストール」または「ホーム画面に追加」を選びます。',
    'If shown, choose Install and create shortcut → Install.':'表示される場合は「インストールとショートカットの作成」→「インストール」を選びます。',
    'Confirm Add or Install. Then open Danuri from its home screen icon.':'「追加」または「インストール」で確定し、ホーム画面のアイコンから起動します。',
    'Open Danuri in Safari.':'SafariでDanuriを開きます。',
    'Tap Share (the square with an upward arrow). It may be inside the More menu.':'共有ボタン（四角から上向きの矢印）を押します。「その他」メニュー内にある場合もあります。',
    'Choose Add to Home Screen. If missing, check Edit Actions.':'「ホーム画面に追加」を選びます。見つからない場合は「アクションを編集」を確認してください。',
    'Turn on Open as Web App if shown, then tap Add.':'表示される場合は「Webアプリとして開く」をオンにして、「追加」を押します。',
    'iPhone installation finishes in Safari’s Share menu. Copy this link if you are using another browser or an in-app browser.':'iPhoneではSafariの共有メニューで追加を完了します。別のブラウザやアプリ内ブラウザを使っている場合は、このリンクをコピーしてSafariで開いてください。',
    'Open Danuri in Chrome or Edge, then use the install icon in the address bar or the browser menu.':'ChromeまたはEdgeで開き、アドレスバーのインストールアイコン、またはブラウザのメニューを使います。',
    'The install button appears when your browser supports it and Danuri is ready. The menu instructions work when no prompt is available.':'対応ブラウザで準備ができると、インストールボタンが表示されます。表示されない場合はメニューから追加してください。',
    'After your first online visit, learning cards and quizzes are cached for offline use. Korean voice availability depends on your device.':'初回オンライン利用後、学習カードとクイズはオフライン用に保存されます。韓国語音声の利用可否は端末によって異なります。',
    'Copy app link':'アプリのリンクをコピー','Official instructions ↗':'公式の手順 ↗',
    'Link copied. Open Safari and paste it in the address bar.':'リンクをコピーしました。Safariのアドレスバーに貼り付けてください。',
    'Copy the link shown in the guide.':'案内に表示されているリンクを選択してコピーしてください。',
    'Installation started. Follow your browser’s instructions.':'ブラウザの案内に従ってインストールを完了してください。',
    'You can install later using the guide.':'あとでこの案内から追加できます。',
    'The install prompt is unavailable. Use the browser menu instructions.':'インストール画面を開けませんでした。ブラウザのメニューから追加してください。',
    'Danuri is installed. Open it from your home screen.':'Danuriを追加しました。ホーム画面から開けます。',
    'This quiz keeps its starting language so your answers stay in place. New quizzes use your selected language.':'解答を保持するため、このクイズは開始時の言語で続きます。次のクイズから選択した言語になります。',
    'Choose the Japanese meaning.':'日本語の意味を選んでください。',
    'Choose the matching Korean.':'意味に合う韓国語を選んでください。',
    'Each card needs a type, level (1–6), Korean and English meaning.':'カードには種類、レベル（1〜6）、韓国語、意味が必要です。'
  };
  let patterns;
  const dynamic=[
    [/^TOPIK (I|II) · Level (\d+)$/u,'TOPIK $1 · レベル$2'],
    [/^TOPIK (I|II) · Level (\d+) · Pick an answer, get instant feedback,$/u,'TOPIK $1 · レベル$2 · 答えを選んで、すぐ確認。'],
    [/^Start (\d+)-question quiz(?: →)?$/u,'$1問クイズを開始 →'],
    [/^(\d+) \/ (\d+) practiced today$/u,'今日 $1 / $2 問を練習'],
    [/^([\d,]+) learning cards$/u,'学習カード $1枚'],
    [/^([\d,]+) questions$/u,'$1問'],[/^(\d+) minutes$/u,'$1分'],[/^(\d+) questions a day$/u,'1日$1問'],
    [/^([\d,]+) cards across all levels$/u,'全レベルで$1枚のカード'],
    [/^([\d,]+) cards · (.+)$/u,'$1枚のカード · $2'],
    [/^(.+) · ([\d,]+) (saved )?cards( · Current search)?$/u,'$1 · $2枚のカード'],
    [/^([\d,]+) sourced words · ([\d,]+) expressions · ([\d,]+) grammar patterns$/u,'出典付き語彙 $1語 · 表現 $2項目 · 文法 $3項目'],
    [/^Vocabulary by learning level: (.+)$/u,'学習レベル別の語彙数：$1'],
    [/^Read dictionary entry (\d+) ↗$/u,'辞書の項目 $1 を読む ↗'],
    [/^NIKL Korean Basic Dictionary · CC BY-SA 2.0 KR\. (.*)$/u,'国立国語院 韓国語基礎辞典 · CC BY-SA 2.0 KR。$1'],
    [/^Curriculum\/source row: (.+)$/u,'カリキュラム・出典の項目：$1'],
    [/^(\d+) dictionary meanings$/u,'辞書の語義 $1件'],
    [/^Project-authored supplementary card · Suggested learning level (\d+)$/u,'アプリ独自の補足カード · 推奨学習レベル$1'],
    [/^(Show|Hide) model & self-check$/u,'模範解答・自己確認を$1'],
    [/^(\d+) characters · spaces included$/u,'$1文字（空白を含む）'],
    [/^TOPIK (I|II) mini mock$/u,'TOPIK $1 ミニ模試'],
    [/^TOPIK (I|II) · Mini mock$/u,'TOPIK $1 · ミニ模試'],
    [/^(\d+)% correct · Every revisit makes a stronger memory\.$/u,'正答率$1% · 復習するたびに記憶が定着します。'],
    [/^(\d+)% correct · Mini mock practice result, not an official TOPIK score\.$/u,'正答率$1% · ミニ模試の練習結果です。公式TOPIKの点数ではありません。'],
    [/^Back to (Today|Explore|My collection|mock tests)$/u,'$1に戻る'],
    [/^(\d+) unanswered questions\. Skipped answers count as incorrect in this practice result\.$/u,'未解答が$1問あります。この練習では未解答は不正解として扱われます。'],
    [/^This replaces the learning data in this browser with (\d+) personal cards, (\d+) saved cards and (\d+) practice sessions\. Download your current backup first if you want to keep it\.$/u,'このブラウザの学習データを、自作カード$1枚、保存カード$2枚、練習記録$3件のバックアップで置き換えます。現在のデータを残す場合は、先にバックアップを保存してください。'],
    [/^You have a saved (.+) in progress\.$/u,'途中の学習セッションがあります。'],
    [/^(\d+) cards added\. Duplicates skipped\.$/u,'$1枚のカードを追加しました。重複は除外しました。'],
    [/^Listen to (.+)$/u,'$1を聞く'],[/^Practice (.+)$/u,'$1を練習'],[/^Save (.+)$/u,'$1を保存'],[/^Unsave (.+)$/u,'$1の保存を解除'],
    [/^Question (\d+)(, answered)?$/u,'問題$1'],[/^QUESTION (\d+) OF (\d+)$/u,'問題 $1 / $2']
  ];
  function t(value){
    const source=String(value??'');if(locale!=='ja')return source;
    const text=source.trim(),pack=root.DANURI_JA_UI||{};
    let translated=extras[text]??pack.exact?.[text];
    if(translated===undefined){
      const analytics=' Google may process browser, device and approximate-location information when enabled. Advertising features are disabled.';
      if(text.endsWith(analytics)){const first=text.slice(0,-analytics.length),prefix={'Usage analytics is currently inactive.':'利用分析は現在無効です。','You have allowed Google Analytics.':'Google Analyticsの利用を許可しています。','Usage analytics is off until you allow it.':'許可するまで利用分析は無効です。'}[first];if(prefix)translated=prefix+'有効にすると、Googleがブラウザ・端末・おおよその地域の情報を処理する場合があります。広告機能は無効です。';}
    }
    if(translated===undefined){
      patterns||=(pack.patterns||[]).map(([pattern,replacement])=>[new RegExp(pattern,'u'),replacement]);
      for(const [pattern,replacement] of [...dynamic,...patterns]){if(pattern.test(text)){translated=text.replace(pattern,replacement);break;}}
    }
    if(translated!==undefined){translated=translated.replace(/^(Today|Explore|My collection|mock tests)に戻る$/u,(_,name)=>({'Today':'今日','Explore':'探す','My collection':'マイコレクション','mock tests':'模擬試験'}[name])+'に戻る').replace(/をShow$/u,'を表示').replace(/をHide$/u,'を隠す');}
    return translated===undefined?source:source.slice(0,source.indexOf(text))+translated+source.slice(source.indexOf(text)+text.length);
  }
  const topicNames={'NIKL vocabulary':'国立国語院の語彙','Grammar pattern':'文法パターン',idiom:'慣用句',phrase:'表現',proverb:'ことわざ'};
  function items(raw){
    if(locale!=='ja')return raw;
    if(cache.has(raw))return cache.get(raw);
    const ja=root.DANURI_JA_DATA,project=root.DANURI_JA_PROJECT;
    const translated=raw.map(item=>{
      const sourceId=item.catalogueId||item.id,official=ja?.cards[sourceId];
      const dict=official?.missing?null:official,own=project?.items[item.id]||project?.sourceFallbacks?.[sourceId];
      if(!dict&&!own)return item;
      const meaning=dict?(item.kind==='vocabulary'&&!/対訳語なし/.test(dict.meaning)?dict.meaning:dict.definition||dict.meaning):own.meaning;
      return {...item,english:meaning.trim(),definition:dict?.definition||own?.definition||'',translation:own?.translation||item.translation,japaneseFallback:!!project?.sourceFallbacks?.[sourceId],
        topic:own?.topic||topicNames[item.topic]||item.topic,
        searchText:[item.english,item.definition,item.topic,meaning,dict?.definition,own?.topic].filter(Boolean).join(' '),
        senses:item.senses?.map((s,index)=>{const aligned=dict?.senses?.[index],samePair=x=>String(x?.entry)===String(s.entry)&&String(x?.sense)===String(s.sense);const equivalent=(samePair(aligned)?aligned:dict?.senses?.find(samePair))||ja?.entries[s.entry]?.senses[s.sense]||own;return equivalent?{...s,english:equivalent.definition||equivalent.meaning}:s;})};
    });
    cache.set(raw,translated);return translated;
  }
  function questions(raw){return locale==='ja'?raw.map(q=>({...q,explanation:root.DANURI_JA_PROJECT?.questions[q.id]?.explanation||q.explanation})):raw;}
  function rubric(w){return locale==='ja'?root.DANURI_JA_PROJECT?.writing[w.id]?.rubric||w.rubric:w.rubric;}
  function syncDocument(){const doc=root.document;if(!doc?.documentElement)return;doc.documentElement.lang=locale;doc.title=locale==='ja'?'Danuri · いっしょに韓国語。':'Danuri · Korean, together.';const skip=doc.querySelector('.skip-link');if(skip)skip.textContent=locale==='ja'?'学習コンテンツへ移動':'Skip to learning content';}
  function localize(container){
    if(locale!=='ja'||!container||!root.document?.createTreeWalker)return;
    // Translate only interface nodes. Authored lesson text and user input use exact data overlays.
    const excluded='script,style,textarea,[data-learning-text],[data-user-text],[lang="ko"],.card-korean,.card-meaning,.detail-korean,.detail-meaning,.dictionary-definition,.question-passage,.answer-options,.feedback p,.explanation,.featured-meaning,.korean-example,.other-senses p,.model-answer .check-label';
    const walker=root.document.createTreeWalker(container,4);
    let node;while((node=walker.nextNode())){if(!node.parentElement?.closest(excluded))node.nodeValue=t(node.nodeValue);}
    for(const el of container.querySelectorAll('[aria-label],[placeholder],[title],[alt]')){
      if(el.closest('[data-user-text],[data-learning-text]'))continue;
      for(const attr of ['aria-label','placeholder','title','alt'])if(el.hasAttribute(attr))el.setAttribute(attr,t(el.getAttribute(attr)));
    }
  }
  function setLocale(next){if(!['en','ja'].includes(next))return false;locale=next;try{root.localStorage?.setItem(KEY,next);}catch{}syncDocument();return true;}
  root.DanuriI18n={t,items,questions,rubric,localize,syncDocument,setLocale,getLocale:()=>locale};
  syncDocument();
})(typeof window!=='undefined'?window:globalThis);
