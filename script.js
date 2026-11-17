(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};

const T={
ru:{kick:'ДОБРО ПОЖАЛОВАТЬ В',nAbout:'Обо мне',nSvc:'Услуги',nNum:'Номера',nCon:'Связь',tag:'Крипта · NFT подарки · Telegram',music:'Моя музыка',contact:'Связь',
aboutT:'Обо мне',aboutP:'Привет! Я — Раевский, мне 16 лет, занимаюсь крипторынком и NFT подарками в Telegram, в сфере уже 1.5 года. Также продаю некоторые услуги: физические | виртуальные номера TG, верификации TON, бирж, блокчейнов и прочего. Если интересно, пролистай вниз и увидишь все мои услуги.',
svcT:'Услуги',miami:'СЕЙЧАС В МАЙАМИ',numT:'Физ. номера',
siteP:'Делаю сайт на заказ по вашему описанию: инфо/био, услуги, музыка, фон, цвета и всё, что нужно на сайте. Вы мне всё с точностью описываете, я создаю сайт и отдаю вам (хостинг покупается отдельно).',
siteName:'Сайт на заказ',sitePrice:'от 450₽',
nftT:'NFT подарки',b1t:'Оценка',b1p:'Оцениваю ваш NFT подарок и называю примерную цену в stars | gram | $ | ₽.',b2t:'Обмен',b2p:'Обменяю ваш NFT подарок с честной доплатой.',b3t:'Продажа',b3p:'Куплю у вас ваш NFT подарок.',
linksT:'Ссылки',l1:'Партнёр',l2:'Канал',l3:'Дешёвые stars',l4:'Отзывы',l5:'Переходник',
faqT:'FAQ',writeMe:'Напиши мне',order:'Заказать',stock:'В наличии',from:'от',pcs:'2 номера',
idPs:'Псевдоним',idPsV:'Раевский',idNick:'Никнейм',statY:'года в крипте',stat24:'в Telegram',statS:'услуг',statP:'сайт от',howT:'Как это работает',s1t:'Напиши мне',s1p:'Telegram @RaevYoU: расскажи, что нужно.',s2t:'Обсуждаем детали',s2p:'Объём, цена, сроки. Без сюрпризов.',s3t:'Оплата',s3p:'СБП, Stars, NFT, крипта или карта.',s4t:'Получаешь результат',s4p:'Если хочешь, сначала загляни в отзывы.',gramT:'Модель GRAM',gramP:'Gram (ранее известный как Toncoin) — это нативная криптовалюта блокчейн-платформы The Open Network (TON), изначально созданной командой Telegram.',accT:'Аккаунты с отлегой',accC:'Аккаунты с отлегой',view:'Посмотреть',sp888:'Номера +888'},
en:{kick:'WELCOME TO',nAbout:'About',nSvc:'Services',nNum:'Numbers',nCon:'Contact',tag:'Crypto · NFT gifts · Telegram',music:'My music',contact:'Contact',
aboutT:'About me',aboutP:"Hi! I'm Raevsky, I'm 16, and I've been working with the crypto market and NFT gifts in Telegram for 1.5 years. I also sell a few services: physical | virtual TG numbers, TON, exchange and blockchain verifications, and more. Scroll down to see all my services.",
svcT:'Services',miami:'RIGHT NOW IN MIAMI',numT:'Physical numbers',
siteP:"I build custom websites from your description: info/bio, services, music, background, colors, everything you want on the site. You describe it in detail, I build the site and hand it over to you (hosting is bought separately).",
siteName:'Custom website',sitePrice:'from 450₽',
nftT:'NFT gifts',b1t:'Appraisal',b1p:"I'll appraise your NFT gift and give an approximate price in stars | gram | $ | ₽.",b2t:'Swap',b2p:"I'll swap your NFT gift with a fair surcharge.",b3t:'Sell',b3p:"I'll buy your NFT gift from you.",
linksT:'Links',l1:'Partner',l2:'Channel',l3:'Cheap stars',l4:'Reviews',l5:'Redirect',
faqT:'FAQ',writeMe:'Write me',order:'Order',stock:'In stock',from:'from',pcs:'2 numbers',
idPs:'Alias',idPsV:'Raevsky',idNick:'Nickname',statY:'years in crypto',stat24:'in Telegram',statS:'services',statP:'website from',howT:'How it works',s1t:'Message me',s1p:'Telegram @RaevYoU: tell me what you need.',s2t:'We discuss details',s2p:'Scope, price, deadlines. No surprises.',s3t:'Payment',s3p:'SBP, Stars, NFT, crypto or card.',s4t:'You get the result',s4p:'If you want, check the reviews first.',gramT:'GRAM model',gramP:'Gram (formerly known as Toncoin) is the native cryptocurrency of The Open Network (TON), originally created by the Telegram team.',accT:'Aged accounts',accC:'Aged accounts',view:'View',sp888:'+888 numbers'}};

const ico=p=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const IC={vpn:ico('<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>'),ad:ico('<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 9a4 4 0 0 1 0 6"/><path d="M18 6a8 8 0 0 1 0 12"/>'),num:ico('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),web:ico('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>'),nft:ico('<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>'),ver:ico('<path d="M12 2l2.4 2 3.1-.2.9 3 2.6 1.7-1 3 1 3-2.6 1.7-.9 3-3.1-.2L12 22l-2.4-2-3.1.2-.9-3L3 15.5l1-3-1-3 2.6-1.7.9-3 3.1.2z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),clock:ico('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>')};
const SVC=[
['vpn','VPN','VPN','Создаю ваш личный VPN для вас, за хорошую цену.','I build a personal VPN just for you, at a good price.'],
['ad','Реклама','Advertising','Рекламирую вас и ваши услуги на разных сайтах, в соцсетях, ботах, а также в своём боте.','I promote you and your services on various sites, social networks, bots, and in my own bot.'],
['num','Физ. номера','Physical numbers','На выбор даю физический номер любой страны из списка ниже: список и цены в блоке «Физ. номера».','I give you a physical number from any country on the list below: the list and prices are in the "Physical numbers" block.'],
['web','Сайт на заказ','Custom website','Создаю вам сайт по вашему описанию: стиль, услуги, что добавить и прочее. Выпускаю его в сеть и передаю вам.','I create a website from your description: style, services, what to add and more. I publish it and hand it over to you.'],
['nft','Продажа NFT','Selling NFT','Покупаю ваш NFT подарок, username или номер за вашу или ниже рыночной цену.','I buy your NFT gift, username or number at your price or below market price.'],
['ver','Верификация бирж','Exchange verification','Помогаю вам верифицировать биржу, TON или кошельки.','I help you verify an exchange, TON or wallets.']];

const NUM=[['+1','USA','USA',99],['+56','Чили','Chile',99],['+1','Canada','Canada',99],['+62','Индонезия','Indonesia',99],['+880','Бангладеш','Bangladesh',99],['+998','Узбекистан','Uzbekistan',99],['+91','Индия','India',99],['+593','Эквадор','Ecuador',123],['+55','Бразилия','Brazil',139],['+44','Великобритания','United Kingdom',159],['+66','Таиланд','Thailand',159],['+81','Япония','Japan',199],['+90','Турция','Turkey',199],['+7','Россия','Russia',299],['+7 7','Казахстан','Kazakhstan',299]];

const ACC=[['USA [+1]','USA [+1]','6-8 лет','6-8 years','299₽'],['Kazakhstan [+7 7]','Kazakhstan [+7 7]','2020','2020','890₽'],['USA [+1]','USA [+1]','2015','2015','1299₽']];

const FAQ=[
['Как можно оплатить?','How can I pay?','СБП, Telegram Stars, NFT, крипта или перевод на карту.','SBP, Telegram Stars, NFT, crypto or a card transfer.'],
['Почему не отвечаешь сразу?','Why don\'t you reply right away?','Я в Telegram почти 24/7, но работы много. Отвечу, как только смогу.','I am in Telegram almost 24/7, but I have a lot of work. I will reply as soon as I can.'],
['Сколько стоит сайт на заказ?','How much is a custom website?','От 450 ₽. Зависит от размера и сложности: опиши, что нужно, и я назову цену.','From 450 ₽. It depends on size and complexity: describe what you need and I will name the price.'],
['Где отзывы?','Where are the reviews?','Кнопка «Отзывы» в блоке со ссылками ведёт на сайт с отзывами.','The "Reviews" button in the links block leads to the reviews site.']];

let lang=store.get('lang')||((navigator.language||'').startsWith('ru')?'ru':'en');
const L=i=>lang==='ru'?i[0]:i[1];

/* modal */
const modal=$('#modal');
function openM(title,html,showBtn=true){$('#mTitle').textContent=title;$('#mBody').innerHTML=html;$('#mBtn').style.display=showBtn?'':'none';modal.classList.add('open');modal.setAttribute('aria-hidden','false')}
function closeM(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
$('#mClose').onclick=closeM;modal.onclick=e=>{if(e.target===modal)closeM()};
addEventListener('keydown',e=>{if(e.key==='Escape'){closeM();pm.classList.remove('open')}});

/* render dynamic */
function render(){
 $('#svcGrid').innerHTML=SVC.map((s,i)=>`<button class="sc" data-s="${i}"><i>${IC[s[0]]}</i>${lang==='ru'?s[1]:s[2]}</button>`).join('');
 $$('.sc').forEach(b=>b.onclick=()=>{const s=SVC[b.dataset.s];openM(lang==='ru'?s[1]:s[2],`<p>${lang==='ru'?s[3]:s[4]}</p>`)});
 const t=T[lang];
 $('#numTrack').innerHTML=NUM.map(n=>`<div class="num"><b>${n[0]}</b><span>${lang==='ru'?n[1]:n[2]}</span><em>● ${t.stock}</em><strong>${n[3]}₽</strong></div>`).join('')+
 `<div class="num sp"><b>+888</b><span>${t.sp888}</span><em>● ${t.pcs}</em><strong>${t.from} 23.900₽</strong></div>`+
 `<div class="num sp"><b class="ic">${IC.clock}</b><span>${t.accC}</span><button class="btn" id="accBtn">${t.view}</button></div>`;
 $('#accBtn').onclick=()=>openM(t.accT,ACC.map(a=>`<div class="mRow"><span>${lang==='ru'?a[0]:a[1]} · ${lang==='ru'?a[2]:a[3]}</span><b>${a[4]}</b></div>`).join(''));
 $('#faqList').innerHTML=FAQ.map(f=>`<div class="faqI"><button>${lang==='ru'?f[0]:f[1]}</button><div><p>${lang==='ru'?f[2]:f[3]}</p></div></div>`).join('');
 $$('.faqI').forEach(el=>el.firstElementChild.onclick=()=>{const o=el.classList.toggle('open'),d=el.lastElementChild;d.style.maxHeight=o?d.scrollHeight+'px':0});
}
function setLang(l){
 lang=l;store.set('lang',l);document.documentElement.lang=l;
 $$('[data-i]').forEach(e=>e.textContent=T[l][e.dataset.i]);
 $$('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
 closeM();render();clock();
}
$$('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));

/* themes */
const pm=$('#palMenu');
function setTheme(t){document.body.dataset.theme=t;store.set('theme',t);$$('.sw').forEach(s=>s.classList.toggle('on',s.dataset.t===t))}
$('#palBtn').onclick=e=>{e.stopPropagation();const o=pm.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};
$$('.sw').forEach(s=>s.onclick=()=>setTheme(s.dataset.t));
document.addEventListener('click',e=>{if(!e.target.closest('.pal'))pm.classList.remove('open')});

/* carousel arrows */
$$('.arr').forEach(b=>b.onclick=()=>$('#numTrack').scrollBy({left:b.dataset.d*320,behavior:'smooth'}));

/* Miami clock */
function clock(){
 const loc=lang==='ru'?'ru-RU':'en-US',z='America/New_York',d=new Date();
 $('#mTime').textContent=new Intl.DateTimeFormat(loc,{timeZone:z,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(d);
 $('#mDate').textContent=new Intl.DateTimeFormat(loc,{timeZone:z,weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(d);
}
setInterval(clock,1000);

/* music: manual start only, one track at a time */
const audios=new Map();let cur=null;
$$('.trk').forEach(row=>{
 const btn=$('.pl',row),bar=$('.bar s',row);
 btn.onclick=()=>{
  let a=audios.get(row);if(!a){a=new Audio(row.dataset.f);a.preload='none';audios.set(row,a);
   a.ontimeupdate=()=>{bar.style.width=(a.currentTime/(a.duration||1)*100)+'%'};
   a.onended=()=>{row.classList.remove('on');btn.textContent='▶';bar.style.width=0}}
  if(cur&&cur!==row){const p=audios.get(cur);p.pause();cur.classList.remove('on');$('.pl',cur).textContent='▶'}
  if(a.paused){a.play().catch(()=>{});row.classList.add('on');btn.textContent='❚❚';cur=row}
  else{a.pause();row.classList.remove('on');btn.textContent='▶'}
 };
});

/* car without background: colour left half + matte right half of one video */
const vc=$('#vcar'),cv=$('#carCv'),cx=cv.getContext('2d',{willReadFrequently:true}),off=document.createElement('canvas'),ox=off.getContext('2d',{willReadFrequently:true});
let W=0,H=0,out=null;
function paint(){
 if(W){ox.drawImage(vc,0,0,W*2,H);const s=ox.getImageData(0,0,W*2,H).data,o=out.data;
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=(y*W*2+x)*4,j=(y*W*2+W+x)*4,k=(y*W+x)*4;o[k]=s[i];o[k+1]=s[i+1];o[k+2]=s[i+2];o[k+3]=s[j]}
  cx.putImageData(out,0,0)}
 vc.requestVideoFrameCallback?vc.requestVideoFrameCallback(paint):requestAnimationFrame(paint);
}
function initCar(){W=vc.videoWidth/2;H=vc.videoHeight;if(!W)return;cv.width=W;cv.height=H;off.width=W*2;off.height=H;out=cx.createImageData(W,H);vc.play().catch(()=>{});paint()}
vc.readyState>=1?initCar():vc.addEventListener('loadedmetadata',initCar);
const kick=()=>{[vc,$('#vwin')].forEach(v=>v.play().catch(()=>{}))};
addEventListener('touchstart',kick,{once:true,passive:true});addEventListener('click',kick,{once:true});
$('#vwin').play().catch(()=>{});

/* ticker */
const tw='NFT,TON,CRYPTO,TELEGRAM,STARS,VPN,BOTS'.split(',').map(x=>`<span>${x}</span>`).join('');
$('#tk').innerHTML=tw+tw+tw+tw;

/* counters */
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,n=+el.dataset.n,d=+(el.dataset.d||0),s=el.dataset.s||'',t0=performance.now();
 (function f(t){const p=Math.min(1,(t-t0)/1300),v=n*(1-Math.pow(1-p,3));el.textContent=v.toFixed(d)+s;if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
$$('[data-n]').forEach(el=>co.observe(el));

/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
$$('.rv').forEach(el=>io.observe(el));

const stag=()=>$$('.sc,.step,.bub,.st,.links .btn,.num').forEach((el,i,a)=>{el.style.setProperty('--i',[...el.parentElement.children].indexOf(el))});
stag();new MutationObserver(stag).observe(document.body,{childList:true,subtree:true});

/* dock + scroll-spy + parallax */
const dock=$('#dock'),hero=$('.hero');let tick=false;
function onScroll(){tick=false;const y=scrollY;hero.style.setProperty('--py',Math.min(y,innerHeight*1.2));dock.classList.toggle('show',y>innerHeight*.45)}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('.dock a').forEach(a=>a.classList.toggle('on',a.dataset.sp===e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
['about','services','numbers','contacts'].forEach(id=>spy.observe($('#'+id)));

setTheme(store.get('theme')||'sunset');
setLang(lang);
})();
