(this["webpackJsonpenglish-for-kids"]=this["webpackJsonpenglish-for-kids"]||[]).push([[0],{13:function(t,e,a){t.exports={card:"style_card__2ACZx",front:"style_front__30GqM",back:"style_back__1_XDo",cardHeader:"style_cardHeader__k8U05",rotate:"style_rotate__1EXbh",inactive:"style_inactive__1i_Dd",stars:"style_stars__3N-JM",success:"style_success__3Mob2",error:"style_error__3bT3i"}},15:function(t,e,a){t.exports={wrapper:"style_wrapper__2O0i0",buttons:"style_buttons__1Y-_A",reset:"style_reset__3ThlZ",repeat:"style_repeat__2NQNB",statistics:"style_statistics__3wyJg",row:"style_row__2lcAL"}},17:function(t,e,a){t.exports={cards:"style_cards__1hD5m",btns:"style_btns__3mz4P",startBtn:"style_startBtn__2blqT",repeat:"style_repeat__1bPbi",stars:"style_stars__117ew",success:"style_success__hX9FH",error:"style_error__2erVd"}},25:function(t,e,a){t.exports={stars:"style_stars__3Fo0O",success:"style_success__oNQho",error:"style_error__3-s93"}},26:function(t,e,a){t.exports={div:"style_div__3Uy6O"}},34:function(t,e,a){t.exports={app:"style_app__r92wv"}},35:function(t,e,a){t.exports={cards:"style_cards__3l0XA"}},36:function(t,e,a){t.exports={card:"style_card__1owJu"}},37:function(t,e,a){t.exports={sort:"style_sort__1yYfn"}},51:function(t,e,a){},53:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a(20),n=a.n(s),i=a(5),o=a(18),c=a(10),l=a(31),d=a(29),p=a(16),g=a(32),u=a(27),f=a(2);function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(void 0===e){var a=new Audio("".concat(window.location.origin,"/english-for-kids/audio/").concat(t,".mp3"));a.play()}if(void 0!==e&&"rotate"!==e.target.getAttribute("data-type")){var r=new Audio("".concat(window.location.origin,"/english-for-kids/audio/").concat(t,".mp3"));r.play()}}function b(t){var e=Array.from(function(t){for(var e=new Set,a=t,r=0;e.size!==t;){var s=Math.floor(Math.random()*(a-r)+r);e.add(s),t===s&&(a-=1),r===s&&(r+=1)}return e}(t.length)),a=[];return e.forEach((function(e){a.push(t[e][0])})),a}function j(t,e){return 0===e?0:100*+(e/(t+e)).toFixed(2)}var y="TOGGLE_GAME",m="SELECT_CATEGORY",O="SHOW_MODAL",_="RESET_CURRENT_CATEGORY",k="CLOSE_MODAL",x="START_GAME",v="FINISH_GAME",w="SET_RANDOM_WORD_ORDER",N="SET_CURRENT_WORD",A="NEXT_WORD",C="CHANGE_RATING",E="SET_MISTAKE",S="OPEN_WINDOW_AFTER_GAME",T="CREATE_DIFFICULT_WORDS",W={categories:[{category:"Action (set A)",logo:"https://english-for-kids.netlify.app/static/media/dance.c70cc103.jpg"},{category:"Action (set B)",logo:"https://english-for-kids.netlify.app/static/media/swim.bddf0687.jpg"},{category:"Action (set C)",logo:"https://english-for-kids.netlify.app/static/media/drop.8cb9f43a.jpg"},{category:"Adjective",logo:"https://english-for-kids.netlify.app/static/media/friendly.ebfd8e9a.jpg"},{category:"Animal (set A)",logo:"https://english-for-kids.netlify.app/static/media/cat.e91220bb.jpg"},{category:"Animal (set B)",logo:"https://english-for-kids.netlify.app/static/media/bird.f0a80efa.jpg"},{category:"Clothes",logo:"https://english-for-kids.netlify.app/static/media/blouse.37a6d8fa.jpg"},{category:"Emotion",logo:"https://english-for-kids.netlify.app/static/media/smile.f55cb470.jpg"}],words:{"Action (set A)":{cry:{translate:"\u043f\u043b\u0430\u043a\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/cry.26a84a2c.jpg"},dance:{translate:"\u0442\u0430\u043d\u0446\u0435\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/dance.c70cc103.jpg"},dive:{translate:"\u043d\u044b\u0440\u044f\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/dive.41b7d509.jpg"},draw:{translate:"\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/draw.82be9665.jpg"},fish:{translate:"\u043b\u043e\u0432\u0438\u0442\u044c \u0440\u044b\u0431\u0443",logo:"https://english-for-kids.netlify.app/static/media/fish.27eb7746.jpg"},fly:{translate:"\u043b\u0435\u0442\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/fly.6122fa03.jpg"},hug:{translate:"\u043e\u0431\u043d\u0438\u043c\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/hug.9dda3c46.jpg"},jump:{translate:"\u043f\u0440\u044b\u0433\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/jump.ac945820.jpg"}},"Action (set B)":{open:{translate:"\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/open.191b88af.jpg"},play:{translate:"\u0438\u0433\u0440\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/play.75cbc10c.jpg"},point:{translate:"\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/point.ba50996a.jpg"},ride:{translate:"\u0435\u0437\u0434\u0438\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/ride.b7a77474.jpg"},run:{translate:"\u0431\u0435\u0433\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/run.0e8d157f.jpg"},sing:{translate:"\u043f\u0435\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/sing.d2d52786.jpg"},skip:{translate:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c, \u043f\u0440\u044b\u0433\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/skip.081bf61e.jpg"},swim:{translate:"\u043f\u043b\u0430\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/swim.bddf0687.jpg"}},"Action (set C)":{argue:{translate:"\u0441\u043f\u043e\u0440\u0438\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/argue.06b9a73a.jpg"},build:{translate:"\u0441\u0442\u0440\u043e\u0438\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/build.0ddc52ca.jpg"},carry:{translate:"\u043d\u0435\u0441\u0442\u0438",logo:"https://english-for-kids.netlify.app/static/media/carry.4e29617e.jpg"},catch:{translate:"\u043b\u043e\u0432\u0438\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/catch.02ee0391.jpg"},drive:{translate:"\u0432\u043e\u0434\u0438\u0442\u044c \u043c\u0430\u0448\u0438\u043d\u0443",logo:"https://english-for-kids.netlify.app/static/media/drive.7756db52.jpg"},drop:{translate:"\u043f\u0430\u0434\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/drop.8cb9f43a.jpg"},pull:{translate:"\u0442\u044f\u043d\u0443\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/pull.958b53a6.jpg"},push:{translate:"\u0442\u043e\u043b\u043a\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/push.f5183491.jpg"}},Adjective:{big:{translate:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",logo:"https://english-for-kids.netlify.app/static/media/big.15366658.jpg"},small:{translate:"\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439",logo:"https://english-for-kids.netlify.app/static/media/small.a9f7a59d.jpg"},fast:{translate:"\u0431\u044b\u0441\u0442\u0440\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/fast.2d5d071e.jpg"},slow:{translate:"\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/slow.7bbcaa16.jpg"},friendly:{translate:"\u0434\u0440\u0443\u0436\u0435\u043b\u044e\u0431\u043d\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/friendly.ebfd8e9a.jpg"},unfriendly:{translate:"\u043d\u0435\u0434\u0440\u0443\u0436\u0435\u043b\u044e\u0431\u043d\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/unfriendly.9bb158bd.jpg"},young:{translate:"\u043c\u043e\u043b\u043e\u0434\u043e\u0439",logo:"https://english-for-kids.netlify.app/static/media/young.7498933a.jpg"},old:{translate:"\u0441\u0442\u0430\u0440\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/old.76174203.jpg"}},"Animal (set A)":{cat:{translate:"\u043a\u043e\u0448\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/cat.e91220bb.jpg"},chick:{translate:"\u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",logo:"https://english-for-kids.netlify.app/static/media/chick.11bf9adb.jpg"},chicken:{translate:"\u043a\u0443\u0440\u0438\u0446\u0430",logo:"https://english-for-kids.netlify.app/static/media/chicken.915430df.jpg"},dog:{translate:"\u0441\u043e\u0431\u0430\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/dog.109811ba.jpg"},horse:{translate:"\u043b\u043e\u0448\u0430\u0434\u044c",logo:"https://english-for-kids.netlify.app/static/media/horse.8a825b3b.jpg"},pig:{translate:"\u0441\u0432\u0438\u043d\u044c\u044f",logo:"https://english-for-kids.netlify.app/static/media/pig.72810927.jpg"},rabbit:{translate:"\u043a\u0440\u043e\u043b\u0438\u043a",logo:"https://english-for-kids.netlify.app/static/media/rabbit.7242c16a.jpg"},sheep:{translate:"\u043e\u0432\u0446\u0430",logo:"https://english-for-kids.netlify.app/static/media/sheep.8d2deb43.jpg"}},"Animal (set B)":{bird:{translate:"\u043f\u0442\u0438\u0446\u0430",logo:"https://english-for-kids.netlify.app/static/media/bird.f0a80efa.jpg"},fish:{translate:"\u0440\u044b\u0431\u0430",logo:"https://english-for-kids.netlify.app/static/media/fish1.296cfcd4.jpg"},frog:{translate:"\u043b\u044f\u0433\u0443\u0448\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/frog.e8a07dca.jpg"},giraffe:{translate:"\u0436\u0438\u0440\u0430\u0444",logo:"https://english-for-kids.netlify.app/static/media/giraffe.32ab22c7.jpg"},lion:{translate:"\u043b\u0435\u0432",logo:"https://english-for-kids.netlify.app/static/media/lion.273c0650.jpg"},mouse:{translate:"\u043c\u044b\u0448\u044c",logo:"https://english-for-kids.netlify.app/static/media/mouse.a73259d9.jpg"},turtle:{translate:"\u0447\u0435\u0440\u0435\u043f\u0430\u0445\u0430",logo:"https://english-for-kids.netlify.app/static/media/turtle.b1e5849e.jpg"},dolphin:{translate:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d",logo:"https://english-for-kids.netlify.app/static/media/dolphin.905447d1.jpg"}},Clothes:{skirt:{translate:"\u044e\u0431\u043a\u0430",logo:"https://poshivm.ru/blog/img/items/i-16.jpg"},pants:{translate:"\u0431\u0440\u044e\u043a\u0438",logo:"https://images.ru.prom.st/791403737_w500_h500_adidas-bryuki-sportivnye.jpg"},blouse:{translate:"\u0431\u043b\u0443\u0437\u043a\u0430",logo:"https://i.etsystatic.com/19861253/d/il/bfe168/1932269032/il_340x270.1932269032_bhxs.jpg?version=1"},dress:{translate:"\u043f\u043b\u0430\u0442\u044c\u0435",logo:"https://prformula.ru/wp-content/uploads/2019/05/3-1-300x200.jpg"},boot:{translate:"\u0431\u043e\u0442\u0438\u043d\u043e\u043a",logo:"https://images.ru.prom.st/675422978_w200_h200_hummer-botinki-rabochie.jpg"},shirt:{translate:"\u0440\u0443\u0431\u0430\u0448\u043a\u0430",logo:"https://mirnadivane.ru/wp-content/uploads/2017/05/effekt-ot-otbelivateley-s-hlorom-zametney-vsego-no-300x200.jpg"},coat:{translate:"\u043f\u0430\u043b\u044c\u0442\u043e",logo:"https://foxi.ro/upload/articles/91/big-paltoane-dama--1.jpg"},shoe:{translate:"\u0442\u0443\u0444\u043b\u0438",logo:"https://kzn-ritual.ru/upload/iblock/a53/a53ec334b89baa9efc4af2af1f2a7abd.jpg"}},Emotion:{sad:{translate:"\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439",logo:"https://c.wallhere.com/photos/b7/44/puppy_dog_face_sad_sight-645298.jpg!s"},angry:{translate:"\u0441\u0435\u0440\u0434\u0438\u0442\u044b\u0439",logo:"https://arulchandrana.files.wordpress.com/2011/10/jangan-buat-dia-keras-dan-marah-hatinya.jpg"},happy:{translate:"\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0439",logo:"http://www.studiodiogene.org/wp-content/uploads/2014/11/3061008251_28e8f88a58_b-300x200.jpg"},tired:{translate:"\u0443\u0441\u0442\u0430\u0432\u0448\u0438\u0439",logo:"https://ideasqueinspiran.com/wp-content/uploads/2016/04/sindrome-de-burnout-en-el-docente-300x200.jpg"},surprised:{translate:"\u0443\u0434\u0438\u0432\u043b\u0435\u043d\u043d\u044b\u0439",logo:"https://wikimedspravka.ru/wp-content/public_images2/26e34439168bd4edaf34375aafb04d6f-300x200.jpg"},scared:{translate:"\u0438\u0441\u043f\u0443\u0433\u0430\u043d\u043d\u044b\u0439",logo:"https://bioliferezonans.com/wp-content/uploads/2019/12/panik-atak-300x200.jpg"},smile:{translate:"\u0443\u043b\u044b\u0431\u043a\u0430",logo:"https://iamhuman.ru/images/upload_images/1245517/01-logo_c91ad.jpg"},laugh:{translate:"\u0441\u043c\u0435\u0445",logo:"https://miro.medium.com/max/300/0*pSxV30GVEVbJGXHU.jpg"}},"Difficult Words":{}},currentCategory:"",game:!1,showModal:!1,start:!1,finish:!1,currentWord:"",randomWordOrder:[],rating:[],allMistakes:0,windowAfterGame:!1},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0,a=e.type,r=e.payload,s=t.randomWordOrder.indexOf(t.currentWord),n=t.randomWordOrder[s+1];switch(a){case y:return Object(f.a)(Object(f.a)({},t),{},{game:!t.game});case m:return Object(f.a)(Object(f.a)({},t),{},{currentCategory:r});case O:return Object(f.a)(Object(f.a)({},t),{},{showModal:!t.showModal});case _:return Object(f.a)(Object(f.a)({},t),{},{currentCategory:""});case k:return Object(f.a)(Object(f.a)({},t),{},{showModal:!1});case x:return Object(f.a)(Object(f.a)({},t),{},{start:!0});case v:return Object(f.a)(Object(f.a)({},t),{},{start:!1,finish:!0,rating:[],allMistakes:0,currentWord:"",windowAfterGame:!1});case w:return Object(f.a)(Object(f.a)({},t),{},{randomWordOrder:r});case N:return Object(f.a)(Object(f.a)({},t),{},{currentWord:r});case A:return void 0!==n?(setTimeout((function(){return h(n)}),1e3),Object(f.a)(Object(f.a)({},t),{},{currentWord:n})):Object(f.a)(Object(f.a)({},t),{},{currentWord:void 0});case C:return Object(f.a)(Object(f.a)({},t),{},{rating:[].concat(Object(u.a)(t.rating),[r])});case E:return Object(f.a)(Object(f.a)({},t),{},{allMistakes:t.allMistakes+1});case S:return Object(f.a)(Object(f.a)({},t),{},{windowAfterGame:!0});case T:return Object(f.a)(Object(f.a)({},t),{},{words:Object(f.a)(Object(f.a)({},t.words),{},{"Difficult Words":r})});default:return t}},R=function(t){return function(e){e({type:m,payload:t})}},D=function(){return function(t){t({type:v})}},G="CREATE_DATA",I="UPDATE_STATISTICS",B="SET_SORT_TYPE",J="RESET_WORDS",H={words:[],sortType:"word",order:"ASC",buttons:["word","translation","category","clicks","correct","wrong","percent"]},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0,a=e.type,r=e.payload;switch(a){case G:case J:case I:return Object(f.a)(Object(f.a)({},t),{},{words:r});case B:return t.sortType===r?"ASC"===t.order?Object(f.a)(Object(f.a)({},t),{},{order:"DESC"}):Object(f.a)(Object(f.a)({},t),{},{order:"ASC"}):Object(f.a)(Object(f.a)({},t),{},{sortType:r,order:"ASC"});default:return t}},z=function(t){return function(e){var a={};localStorage.getItem("statistics")?a=JSON.parse(localStorage.getItem("statistics")):(Object.keys(t).forEach((function(e){Object.keys(t[e]).forEach((function(r){a[r]={translation:t[e][r].translate,category:e,clicks:0,correct:0,wrong:0,percent:0,logo:t[e][r].logo}}))})),localStorage.setItem("statistics",JSON.stringify(a)));e({type:G,payload:a})}},F=function(t){return Object(p.combineReducers)({data:M,statistics:L,router:Object(o.b)(t)})},P=Object(c.a)({basename:"/english-for-kids"}),U=[l.a,Object(d.a)(P)],Y=Object(p.createStore)(F(P),Object(g.composeWithDevTools)(p.applyMiddleware.apply(void 0,U))),q=a(3),V=(a(51),a(34)),X=a.n(V),Q=a(14),Z=function(t){return t.categories},K=function(t){return t.game},$=function(t){return t.showModal},tt=function(t){return t.start},et=function(t){return t.currentWord},at=function(t){return t.windowAfterGame},rt=function(t){return t.words},st=function(t){var e=t.words,a=t.sortType,r=t.order,s=Object.keys(e).map((function(t){return{word:t,translation:e[t].translation,category:e[t].category,clicks:e[t].clicks,correct:e[t].correct,wrong:e[t].wrong,percent:e[t].percent,logo:e[t].logo}}));return s.sort((function(t,e){return("ASC"===r?t[a]>e[a]:t[a]<e[a])?1:("ASC"===r?t[a]<e[a]:t[a]>e[a])?-1:0})),s},nt=function(t){return t.sortType},it=a(7),ot=a.n(it),ct=a(1),lt={toggle:function(){return function(t){t({type:y})}},openModal:function(){return function(t){t({type:O})}},setCategory:R,finish:D,create:z},dt=Object(i.c)((function(t){var e,a=t.data;return{game:K(a),modal:$(a),categories:Z(a),currentCategory:(e=a,e.currentCategory),allWords:rt(a)}}),lt)((function(t){var e=t.game,a=t.toggle,r=t.openModal,s=t.modal,n=t.categories,i=t.currentCategory,o=t.setCategory,c=t.finish,l=t.create,d=t.allWords,p="".concat(ot.a.burger," ").concat(ot.a.show),g={background:e?"linear-gradient(180deg,#fd6a63,#feb46b)":"linear-gradient(180deg, #0099ae,#00bf82)"};return Object(ct.jsxs)("header",{className:ot.a.header,children:[Object(ct.jsxs)("div",{"aria-hidden":"true",onClick:function(){return r()},className:s?p:ot.a.burger,children:[Object(ct.jsx)("div",{className:ot.a.first}),Object(ct.jsx)("div",{className:ot.a.second}),Object(ct.jsx)("div",{className:ot.a.third})]}),Object(ct.jsxs)("ul",{style:g,className:s?"".concat(ot.a.menu," ").concat(ot.a.show):ot.a.menu,children:[Object(ct.jsx)(Q.a,{onClick:function(){return c()},to:"/",className:i?"":ot.a.active,children:"main page"}),n.map((function(t){var e=t.category;return Object(ct.jsx)(Q.a,{onClick:function(){o(e),D(),l(d)},to:"/category/".concat(e),className:i===e?ot.a.active:"",children:e},e)})),Object(ct.jsx)(Q.a,{onClick:function(){o("statistics"),D(),l(d)},to:"/statistics",className:"statistics"===i?ot.a.active:"",children:"statistics page"})]}),Object(ct.jsxs)("label",{htmlFor:"button",className:ot.a.button,children:[Object(ct.jsx)("input",{id:"button",onChange:e?function(){return a()}:function(){a(),D()},type:"checkbox",className:ot.a.input,checked:e}),Object(ct.jsx)("span",{className:ot.a.buttonBack,"data-game":e?"Play":"Train"}),Object(ct.jsx)("span",{className:ot.a.slider})]})]})})),pt=a(17),gt=a.n(pt),ut=a(13),ft=a.n(ut),ht={setNextWord:function(){return function(t){t({type:A})}},setNewRating:function(t){return function(e){e({type:C,payload:t})}},addMistake:function(){return function(t){t({type:E})}},updateStatistic:function(t,e){return function(a){var r=JSON.parse(localStorage.getItem("statistics"));switch(t){case"clicks":r[e].clicks+=1;break;case"correct":r[e].correct+=1,r[e].percent=j(r[e].correct,r[e].wrong);break;case"wrong":r[e].wrong+=1,r[e].percent=j(r[e].correct,r[e].wrong);break;default:return}a({type:I,payload:r}),localStorage.setItem("statistics",JSON.stringify(r))}}},bt=Object(i.c)((function(t){var e=t.data;return{game:K(e),start:tt(e),currentWord:et(e)}}),ht)((function(t){var e=t.translation,a=t.logo,r=t.word,s=t.game,n=t.start,i=t.currentWord,o=t.setNextWord,c=t.setNewRating,l=t.addMistake,d=t.updateStatistic;var p={backgroundImage:"url(".concat(a,")"),backgroundSize:s?"cover":"contain",backgroundPosition:s?"50%":""},g=n?function(t){var e;(e=t).target.classList.contains(ft.a.inactive)||(i===r?(o(),d("correct",i),c("success"),e.target.classList.add(ft.a.inactive),h("SUCCESS")):(d("wrong",i),c("error"),l(),h("ERROR")))}:function(){};return Object(ct.jsxs)("div",{"aria-hidden":"true",onClick:s?function(t){return g(t)}:function(t){h(r,t),d("clicks",r)},className:ft.a.card,children:[Object(ct.jsx)("div",{className:ft.a.front,style:p,children:Object(ct.jsx)("div",{style:{display:s?"none":"block"},className:ft.a.cardHeader,children:r})}),Object(ct.jsx)("div",{className:ft.a.back,style:p,children:Object(ct.jsx)("div",{style:{display:s?"none":"block"},className:ft.a.cardHeader,children:e})}),Object(ct.jsx)("div",{"aria-hidden":"true",onClick:function(t){var e=t.target.parentElement,a=t.target.previousElementSibling;e&&a&&(e.setAttribute("style","transform: rotateY(180deg)"),a.addEventListener("mouseout",(function(){e.setAttribute("style","transform: rotateY(0deg)")})))},className:ft.a.rotate,"data-type":"rotate",style:{display:s?"none":"block"}})]})})),jt=a(25),yt=a.n(jt),mt=Object(i.c)((function(t){var e,a=t.data;return{rating:(e=a,e.rating)}}))((function(t){var e=t.rating;return Object(ct.jsx)("div",{className:yt.a.stars,children:e.map((function(t){return Object(ct.jsx)("div",{className:yt.a[t]})}))})})),Ot=a(26),_t=a.n(Ot),kt=Object(i.c)((function(t){var e,a=t.data;return{allMistakes:(e=a,e.allMistakes)}}))((function(t){var e=t.allMistakes;return e?Object(ct.jsx)("div",{className:_t.a.div,children:Object(ct.jsx)("h1",{children:"".concat(e,1===e?" mistake":" mistakes")})}):Object(ct.jsx)("div",{className:_t.a.div,children:Object(ct.jsx)("h1",{children:"Win"})})})),xt={setCategory:R,startBtn:function(){return function(t){t({type:x})}},setWordOrder:function(t){return function(e){var a;e((a=t[0],{type:N,payload:a})),e({type:w,payload:t})}},finish:D,openWinModal:function(){return function(t){t({type:S})}}},vt=Object(i.c)((function(t){var e,a=t.data;return{words:(e=a,e.words[e.currentCategory]),game:K(a),start:tt(a),currentWord:et(a),windowAfterGame:at(a)}}),xt)((function(t){var e=t.words,a=t.game,s=t.start,n=t.startBtn,i=t.currentWord,o=t.setWordOrder,c=t.finish,l=t.windowAfterGame,d=t.openWinModal,p=t.setCategory;if(Object(r.useEffect)((function(){void 0===i&&(setTimeout(d,1e3),setTimeout((function(){c(),p("")}),3e3))})),e){var g=Object.entries(e),u=b(g);return l?Object(ct.jsx)(kt,{}):Object(ct.jsxs)("div",{children:[Object(ct.jsx)(mt,{}),Object(ct.jsx)("div",{className:gt.a.cards,children:g.map((function(t){var e={word:t[0],logo:t[1].logo,translation:t[1].translate};return Object(ct.jsx)(bt,Object(f.a)({},e),e.word)}))}),a?Object(ct.jsx)("div",{className:gt.a.btns,children:Object(ct.jsx)("button",{"aria-hidden":"true",type:"button",onClick:s?function(){return h(i)}:function(){n(),o(u),h(u[0])},className:s?"".concat(gt.a.startBtn," ").concat(gt.a.repeat):gt.a.startBtn,children:"start game"})}):""]})}return Object(ct.jsx)(q.a,{to:"/"})})),wt=a(35),Nt=a.n(wt),At=a(36),Ct=a.n(At),Et={setCategory:R,create:z},St=Object(i.c)((function(t){var e=t.data;return{game:K(e),allWords:rt(e)}}),Et)((function(t){var e=t.category,a=t.logo,r=t.game,s=t.setCategory,n=t.create,i=t.allWords,o={background:r?"linear-gradient(180deg,#fd6a63,#feb46b 40%,#fff 0,#fff)":"linear-gradient(180deg, #0099ae,#00bf82 40%, white 40%)"};return Object(ct.jsxs)(Q.a,{style:o,onClick:function(){s(e),n(i)},to:"/category/".concat(e),className:Ct.a.card,children:[Object(ct.jsx)("img",{src:a,alt:e}),e]})})),Tt={resetCategory:function(){return function(t){t({type:_})}}},Wt=Object(i.c)((function(t){var e=t.data;return{categories:Z(e)}}),Tt)((function(t){var e=t.categories,a=t.resetCategory;return Object(r.useEffect)((function(){return a()})),Object(ct.jsx)("main",{children:Object(ct.jsx)("div",{className:Nt.a.cards,children:e.map((function(t){return Object(ct.jsx)(St,Object(f.a)({category:"",logo:""},t),t.category)}))})})})),Mt=a(15),Rt=a.n(Mt),Dt=function(t){var e=t.word,a=t.translation,r=t.category,s=t.clicks,n=t.correct,i=t.wrong,o=t.percent;return Object(ct.jsxs)("tr",{children:[Object(ct.jsx)("td",{children:e}),Object(ct.jsx)("td",{children:a}),Object(ct.jsx)("td",{children:r}),Object(ct.jsx)("td",{children:s}),Object(ct.jsx)("td",{children:n}),Object(ct.jsx)("td",{children:i}),Object(ct.jsx)("td",{children:o})]})},Gt=a(37),It=a.n(Gt),Bt={setType:function(t){return function(e){e({type:B,payload:t})}}},Jt=Object(i.c)((function(t){var e,a=t.statistics;return{order:(e=a,e.order),sortType:nt(a)}}),Bt)((function(t){var e=t.button,a=t.order,r=t.setType,s=t.sortType,n=e;"percent"===e&&(n="% errors");var i="ASC"===a?"\u2193 ".concat(n):"\u2191 ".concat(n);return Object(ct.jsx)("td",{"aria-hidden":"true",className:It.a.sort,onClick:function(){return r(e)},children:s===e?i:n})})),Ht={reset:function(){return function(t){var e=JSON.parse(localStorage.getItem("statistics"));Object.keys(e).forEach((function(t){Object.keys(e[t]).forEach((function(a){switch(t){case"clicks":case"correct":case"wrong":case"percent":e[a][t]=0}}))})),localStorage.setItem("statistics",JSON.stringify(e)),t({type:J,payload:e})}},createWords:function(t){return function(e){var a=Object(u.a)(t),r={};a.sort((function(t,e){return t.percent<e.percent?1:t.percent>e.percent?-1:0})),a.filter((function(t,e){return t.percent>0&&e<8})).forEach((function(t){var e=t.word,a=t.translation,s=t.logo;r[e]={translate:a,logo:s}})),e({type:T,payload:r})}},setCategory:R},Lt=Object(i.c)((function(t){var e,a=t.data,r=t.statistics;return{words:st(r),buttons:(e=r,e.buttons),game:K(a)}}),Ht)((function(t){var e=t.words,a=t.buttons,r=t.game,s=t.reset,n=t.createWords,i=t.setCategory,o={background:r?"linear-gradient(-90deg,#fd6a63,#feb46b)":"linear-gradient(-90deg, #0099ae,#00bf82)",boxShadow:r?"3px 3px 15px 2px rgb(138 83 0 / 25%), -3px -3px 15px 2px rgb(138 83 0 / 22%)":"3px 3px 15px 2px rgb(0 169 130 / 25%), -3px -3px 15px 2px rgb(0 169 130 / 25%)"};return 0===e.length?Object(ct.jsx)(q.a,{to:"/"}):Object(ct.jsxs)("div",{className:Rt.a.wrapper,children:[Object(ct.jsxs)("div",{className:Rt.a.buttons,children:[Object(ct.jsx)(Q.a,{onClick:function(){n(e),i("Difficult Words")},to:"/category/Difficult Words",style:o,className:Rt.a.repeat,children:"repeat difficult words"}),Object(ct.jsx)("button",{type:"button",onClick:function(){return s()},style:o,className:Rt.a.reset,children:"reset"})]}),Object(ct.jsxs)("table",{style:{boxShadow:o.boxShadow},className:Rt.a.statistics,children:[Object(ct.jsx)("caption",{style:o,children:"Cards"}),Object(ct.jsx)("thead",{children:Object(ct.jsx)("tr",{className:Rt.a.row,children:a.map((function(t){return Object(ct.jsx)(Jt,{button:t},t)}))})}),Object(ct.jsx)("tbody",{children:e.map((function(t){return Object(ct.jsx)(Dt,Object(f.a)({},t),t.word)}))})]})]})})),zt={close:function(){return function(t){t({type:k})}}},Ft=Object(i.c)((function(t){var e=t.data;return{modal:$(e)}}),zt)((function(t){var e=t.modal,a=t.close;return Object(ct.jsxs)("div",{"aria-hidden":"true",onClick:e?function(t){return function(t){var e=t.target;e&&"ul"!==e.localName&&a()}(t)}:function(){},className:X.a.app,children:[Object(ct.jsx)(dt,{}),Object(ct.jsxs)(q.d,{children:[Object(ct.jsx)(q.b,{path:"/category/:name",component:vt}),Object(ct.jsx)(q.b,{path:"/statistics",component:Lt}),Object(ct.jsx)(q.b,{path:"/",component:Wt})]})]})}));n.a.render(Object(ct.jsx)(i.a,{store:Y,children:Object(ct.jsx)(o.a,{history:P,children:Object(ct.jsx)(Ft,{})})}),document.getElementById("root"))},7:function(t,e,a){t.exports={header:"style_header__2Oyr-",button:"style_button__1Llqo",input:"style_input__2dczz",buttonBack:"style_buttonBack__3VvuQ",slider:"style_slider__2DaPq",burger:"style_burger__2qj3E",show:"style_show__2H-em",first:"style_first__BTWJ3",second:"style_second__3fDOt",third:"style_third__2fg9b",menu:"style_menu__3VBfH",active:"style_active__1d7ja"}}},[[53,1,2]]]);
//# sourceMappingURL=main.93eec361.chunk.js.map