(function(root){
  'use strict';
  function platform(nav=root.navigator||{}){const ua=nav.userAgent||'';if(/iPhone|iPad|iPod/i.test(ua)||(nav.platform==='MacIntel'&&nav.maxTouchPoints>1))return 'ios';return /Android/i.test(ua)?'android':'desktop';}
  function standalone(nav=root.navigator||{},media=root.matchMedia?.bind(root)){return nav.standalone===true||!!media?.('(display-mode: standalone)').matches;}
  async function promptInstall(event){
    if(!event)return 'unavailable';
    try{await event.prompt();const choice=await event.userChoice;return choice?.outcome==='accepted'?'accepted':'dismissed';}catch{return 'unavailable';}
  }
  const api={platform,standalone,promptInstall};
  if(typeof module!=='undefined')module.exports=api;else root.DanuriInstall=api;
})(typeof window!=='undefined'?window:globalThis);
