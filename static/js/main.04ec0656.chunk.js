(this["webpackJsonpenglish-for-kids"]=this["webpackJsonpenglish-for-kids"]||[]).push([[0],{13:function(t,e,a){t.exports={card:"style_card__2ACZx",front:"style_front__30GqM",back:"style_back__1_XDo",cardHeader:"style_cardHeader__k8U05",rotate:"style_rotate__1EXbh",inactive:"style_inactive__1i_Dd",stars:"style_stars__3N-JM",success:"style_success__3Mob2",error:"style_error__3bT3i"}},15:function(t,e,a){t.exports={wrapper:"style_wrapper__2O0i0",buttons:"style_buttons__1Y-_A",reset:"style_reset__3ThlZ",repeat:"style_repeat__2NQNB",statistics:"style_statistics__3wyJg",row:"style_row__2lcAL"}},17:function(t,e,a){t.exports={cards:"style_cards__1hD5m",btns:"style_btns__3mz4P",startBtn:"style_startBtn__2blqT",repeat:"style_repeat__1bPbi",stars:"style_stars__117ew",success:"style_success__hX9FH",error:"style_error__2erVd"}},25:function(t,e,a){t.exports={stars:"style_stars__3Fo0O",success:"style_success__oNQho",error:"style_error__3-s93"}},26:function(t,e,a){t.exports={div:"style_div__3Uy6O"}},34:function(t,e,a){t.exports={app:"style_app__r92wv"}},35:function(t,e,a){t.exports={cards:"style_cards__3l0XA"}},36:function(t,e,a){t.exports={card:"style_card__1owJu"}},37:function(t,e,a){t.exports={sort:"style_sort__1yYfn"}},51:function(t,e,a){},53:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a(20),n=a.n(r),i=a(5),o=a(18),c=a(10),l=a(31),d=a(29),p=a(16),g=a(32),f=a(27),u=a(2);function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(void 0===e){var a=new Audio("".concat(window.location.origin,"/english-for-kids/audio/").concat(t,".mp3"));a.play()}if(void 0!==e&&"rotate"!==e.target.getAttribute("data-type")){var s=new Audio("".concat(window.location.origin,"/english-for-kids/audio/").concat(t,".mp3"));s.play()}}function j(t){var e=Array.from(function(t){for(var e=new Set,a=t,s=0;e.size!==t;){var r=Math.floor(Math.random()*(a-s)+s);e.add(r),t===r&&(a-=1),s===r&&(s+=1)}return e}(t.length)),a=[];return e.forEach((function(e){a.push(t[e][0])})),a}function b(t,e){return 0===e?0:100*+(e/(t+e)).toFixed(2)}var y="TOGGLE_GAME",m="SELECT_CATEGORY",O="SHOW_MODAL",_="RESET_CURRENT_CATEGORY",k="CLOSE_MODAL",v="START_GAME",x="FINISH_GAME",w="SET_RANDOM_WORD_ORDER",N="SET_CURRENT_WORD",A="NEXT_WORD",C="CHANGE_RATING",E="SET_MISTAKE",S="OPEN_WINDOW_AFTER_GAME",T="CREATE_DIFFICULT_WORDS",W={categories:[{category:"Action (set A)",logo:"https://english-for-kids.netlify.app/static/media/dance.c70cc103.jpg"},{category:"Action (set B)",logo:"https://english-for-kids.netlify.app/static/media/swim.bddf0687.jpg"},{category:"Action (set C)",logo:"https://english-for-kids.netlify.app/static/media/drop.8cb9f43a.jpg"},{category:"Adjective",logo:"https://english-for-kids.netlify.app/static/media/friendly.ebfd8e9a.jpg"},{category:"Animal (set A)",logo:"https://english-for-kids.netlify.app/static/media/cat.e91220bb.jpg"},{category:"Animal (set B)",logo:"https://english-for-kids.netlify.app/static/media/bird.f0a80efa.jpg"},{category:"Clothes",logo:"https://english-for-kids.netlify.app/static/media/blouse.37a6d8fa.jpg"},{category:"Emotion",logo:"https://english-for-kids.netlify.app/static/media/smile.f55cb470.jpg"}],words:{"Action (set A)":{cry:{translate:"\u043f\u043b\u0430\u043a\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/cry.26a84a2c.jpg"},dance:{translate:"\u0442\u0430\u043d\u0446\u0435\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/dance.c70cc103.jpg"},dive:{translate:"\u043d\u044b\u0440\u044f\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/dive.41b7d509.jpg"},draw:{translate:"\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/draw.82be9665.jpg"},fish:{translate:"\u043b\u043e\u0432\u0438\u0442\u044c \u0440\u044b\u0431\u0443",logo:"https://english-for-kids.netlify.app/static/media/fish.27eb7746.jpg"},fly:{translate:"\u043b\u0435\u0442\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/fly.6122fa03.jpg"},hug:{translate:"\u043e\u0431\u043d\u0438\u043c\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/hug.9dda3c46.jpg"},jump:{translate:"\u043f\u0440\u044b\u0433\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/jump.ac945820.jpg"}},"Action (set B)":{open:{translate:"\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/open.191b88af.jpg"},play:{translate:"\u0438\u0433\u0440\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/play.75cbc10c.jpg"},point:{translate:"\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/point.ba50996a.jpg"},ride:{translate:"\u0435\u0437\u0434\u0438\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/ride.b7a77474.jpg"},run:{translate:"\u0431\u0435\u0433\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/run.0e8d157f.jpg"},sing:{translate:"\u043f\u0435\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/sing.d2d52786.jpg"},skip:{translate:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c, \u043f\u0440\u044b\u0433\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/skip.081bf61e.jpg"},swim:{translate:"\u043f\u043b\u0430\u0432\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/swim.bddf0687.jpg"}},"Action (set C)":{argue:{translate:"\u0441\u043f\u043e\u0440\u0438\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/argue.06b9a73a.jpg"},build:{translate:"\u0441\u0442\u0440\u043e\u0438\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/build.0ddc52ca.jpg"},carry:{translate:"\u043d\u0435\u0441\u0442\u0438",logo:"https://english-for-kids.netlify.app/static/media/carry.4e29617e.jpg"},catch:{translate:"\u043b\u043e\u0432\u0438\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/catch.02ee0391.jpg"},drive:{translate:"\u0432\u043e\u0434\u0438\u0442\u044c \u043c\u0430\u0448\u0438\u043d\u0443",logo:"https://english-for-kids.netlify.app/static/media/drive.7756db52.jpg"},drop:{translate:"\u043f\u0430\u0434\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/drop.8cb9f43a.jpg"},pull:{translate:"\u0442\u044f\u043d\u0443\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/pull.958b53a6.jpg"},push:{translate:"\u0442\u043e\u043b\u043a\u0430\u0442\u044c",logo:"https://english-for-kids.netlify.app/static/media/push.f5183491.jpg"}},Adjective:{big:{translate:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439",logo:"https://english-for-kids.netlify.app/static/media/big.15366658.jpg"},small:{translate:"\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439",logo:"https://english-for-kids.netlify.app/static/media/small.a9f7a59d.jpg"},fast:{translate:"\u0431\u044b\u0441\u0442\u0440\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/fast.2d5d071e.jpg"},slow:{translate:"\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/slow.7bbcaa16.jpg"},friendly:{translate:"\u0434\u0440\u0443\u0436\u0435\u043b\u044e\u0431\u043d\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/friendly.ebfd8e9a.jpg"},unfriendly:{translate:"\u043d\u0435\u0434\u0440\u0443\u0436\u0435\u043b\u044e\u0431\u043d\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/unfriendly.9bb158bd.jpg"},young:{translate:"\u043c\u043e\u043b\u043e\u0434\u043e\u0439",logo:"https://english-for-kids.netlify.app/static/media/young.7498933a.jpg"},old:{translate:"\u0441\u0442\u0430\u0440\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/old.76174203.jpg"}},"Animal (set A)":{cat:{translate:"\u043a\u043e\u0448\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/cat.e91220bb.jpg"},chick:{translate:"\u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",logo:"https://english-for-kids.netlify.app/static/media/chick.11bf9adb.jpg"},chicken:{translate:"\u043a\u0443\u0440\u0438\u0446\u0430",logo:"https://english-for-kids.netlify.app/static/media/chicken.915430df.jpg"},dog:{translate:"\u0441\u043e\u0431\u0430\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/dog.109811ba.jpg"},horse:{translate:"\u043b\u043e\u0448\u0430\u0434\u044c",logo:"https://english-for-kids.netlify.app/static/media/horse.8a825b3b.jpg"},pig:{translate:"\u0441\u0432\u0438\u043d\u044c\u044f",logo:"https://english-for-kids.netlify.app/static/media/pig.72810927.jpg"},rabbit:{translate:"\u043a\u0440\u043e\u043b\u0438\u043a",logo:"https://english-for-kids.netlify.app/static/media/rabbit.7242c16a.jpg"},sheep:{translate:"\u043e\u0432\u0446\u0430",logo:"https://english-for-kids.netlify.app/static/media/sheep.8d2deb43.jpg"}},"Animal (set B)":{bird:{translate:"\u043f\u0442\u0438\u0446\u0430",logo:"https://english-for-kids.netlify.app/static/media/bird.f0a80efa.jpg"},fish:{translate:"\u0440\u044b\u0431\u0430",logo:"https://english-for-kids.netlify.app/static/media/fish1.296cfcd4.jpg"},frog:{translate:"\u043b\u044f\u0433\u0443\u0448\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/frog.e8a07dca.jpg"},giraffe:{translate:"\u0436\u0438\u0440\u0430\u0444",logo:"https://english-for-kids.netlify.app/static/media/giraffe.32ab22c7.jpg"},lion:{translate:"\u043b\u0435\u0432",logo:"https://english-for-kids.netlify.app/static/media/lion.273c0650.jpg"},mouse:{translate:"\u043c\u044b\u0448\u044c",logo:"https://english-for-kids.netlify.app/static/media/mouse.a73259d9.jpg"},turtle:{translate:"\u0447\u0435\u0440\u0435\u043f\u0430\u0445\u0430",logo:"https://english-for-kids.netlify.app/static/media/turtle.b1e5849e.jpg"},dolphin:{translate:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d",logo:"https://english-for-kids.netlify.app/static/media/dolphin.905447d1.jpg"}},Clothes:{skirt:{translate:"\u044e\u0431\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/skirt.b0ee2c91.jpg"},pants:{translate:"\u0431\u0440\u044e\u043a\u0438",logo:"https://english-for-kids.netlify.app/static/media/pants.197f1069.jpg"},blouse:{translate:"\u0431\u043b\u0443\u0437\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/blouse.37a6d8fa.jpg"},dress:{translate:"\u043f\u043b\u0430\u0442\u044c\u0435",logo:"https://english-for-kids.netlify.app/static/media/dress.264b02bf.jpg"},boot:{translate:"\u0431\u043e\u0442\u0438\u043d\u043e\u043a",logo:"https://english-for-kids.netlify.app/static/media/boot.1a1ae11a.jpg"},shirt:{translate:"\u0440\u0443\u0431\u0430\u0448\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/shirt.3bed1473.jpg"},coat:{translate:"\u043f\u0430\u043b\u044c\u0442\u043e",logo:"https://english-for-kids.netlify.app/static/media/coat.8017b6ca.jpg"},shoe:{translate:"\u0442\u0443\u0444\u043b\u0438",logo:"https://english-for-kids.netlify.app/static/media/shoe.5522fbfd.jpg"}},Emotion:{sad:{translate:"\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/sad.5942f979.jpg"},angry:{translate:"\u0441\u0435\u0440\u0434\u0438\u0442\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/angry.66b1074a.jpg"},happy:{translate:"\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/happy.996126dd.jpg"},tired:{translate:"\u0443\u0441\u0442\u0430\u0432\u0448\u0438\u0439",logo:"https://english-for-kids.netlify.app/static/media/tired.a169662a.jpg"},surprised:{translate:"\u0443\u0434\u0438\u0432\u043b\u0435\u043d\u043d\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/surprised.0667ed30.jpg"},scared:{translate:"\u0438\u0441\u043f\u0443\u0433\u0430\u043d\u043d\u044b\u0439",logo:"https://english-for-kids.netlify.app/static/media/scared.e2747b49.jpg"},smile:{translate:"\u0443\u043b\u044b\u0431\u043a\u0430",logo:"https://english-for-kids.netlify.app/static/media/smile.f55cb470.jpg"},laugh:{translate:"\u0441\u043c\u0435\u0445",logo:"https://english-for-kids.netlify.app/static/media/laugh.8bbca0b9.jpg"}},"Difficult Words":{}},currentCategory:"",game:!1,showModal:!1,start:!1,finish:!1,currentWord:"",randomWordOrder:[],rating:[],allMistakes:0,windowAfterGame:!1},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0,a=e.type,s=e.payload,r=t.randomWordOrder.indexOf(t.currentWord),n=t.randomWordOrder[r+1];switch(a){case y:return Object(u.a)(Object(u.a)({},t),{},{game:!t.game});case m:return Object(u.a)(Object(u.a)({},t),{},{currentCategory:s});case O:return Object(u.a)(Object(u.a)({},t),{},{showModal:!t.showModal});case _:return Object(u.a)(Object(u.a)({},t),{},{currentCategory:""});case k:return Object(u.a)(Object(u.a)({},t),{},{showModal:!1});case v:return Object(u.a)(Object(u.a)({},t),{},{start:!0});case x:return Object(u.a)(Object(u.a)({},t),{},{start:!1,finish:!0,rating:[],allMistakes:0,currentWord:"",windowAfterGame:!1});case w:return Object(u.a)(Object(u.a)({},t),{},{randomWordOrder:s});case N:return Object(u.a)(Object(u.a)({},t),{},{currentWord:s});case A:return void 0!==n?(setTimeout((function(){return h(n)}),1e3),Object(u.a)(Object(u.a)({},t),{},{currentWord:n})):Object(u.a)(Object(u.a)({},t),{},{currentWord:void 0});case C:return Object(u.a)(Object(u.a)({},t),{},{rating:[].concat(Object(f.a)(t.rating),[s])});case E:return Object(u.a)(Object(u.a)({},t),{},{allMistakes:t.allMistakes+1});case S:return Object(u.a)(Object(u.a)({},t),{},{windowAfterGame:!0});case T:return Object(u.a)(Object(u.a)({},t),{},{words:Object(u.a)(Object(u.a)({},t.words),{},{"Difficult Words":s})});default:return t}},R=function(t){return function(e){e({type:m,payload:t})}},D=function(){return function(t){t({type:x})}},I="CREATE_DATA",B="UPDATE_STATISTICS",G="SET_SORT_TYPE",J="RESET_WORDS",L={words:[],sortType:"word",order:"ASC",buttons:["word","translation","category","clicks","correct","wrong","percent"]},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0,a=e.type,s=e.payload;switch(a){case I:case J:case B:return Object(u.a)(Object(u.a)({},t),{},{words:s});case G:return t.sortType===s?"ASC"===t.order?Object(u.a)(Object(u.a)({},t),{},{order:"DESC"}):Object(u.a)(Object(u.a)({},t),{},{order:"ASC"}):Object(u.a)(Object(u.a)({},t),{},{sortType:s,order:"ASC"});default:return t}},F=function(t){return function(e){var a={};localStorage.getItem("statistics")?a=JSON.parse(localStorage.getItem("statistics")):(Object.keys(t).forEach((function(e){Object.keys(t[e]).forEach((function(s){a[s]={translation:t[e][s].translate,category:e,clicks:0,correct:0,wrong:0,percent:0,logo:t[e][s].logo}}))})),localStorage.setItem("statistics",JSON.stringify(a)));e({type:I,payload:a})}},P=function(t){return Object(p.combineReducers)({data:M,statistics:H,router:Object(o.b)(t)})},U=Object(c.a)({basename:"/english-for-kids"}),Y=[l.a,Object(d.a)(U)],q=Object(p.createStore)(P(U),Object(g.composeWithDevTools)(p.applyMiddleware.apply(void 0,Y))),z=a(3),X=(a(51),a(34)),Q=a.n(X),V=a(14),Z=function(t){return t.categories},K=function(t){return t.game},$=function(t){return t.showModal},tt=function(t){return t.start},et=function(t){return t.currentWord},at=function(t){return t.windowAfterGame},st=function(t){return t.words},rt=function(t){var e=t.words,a=t.sortType,s=t.order,r=Object.keys(e).map((function(t){return{word:t,translation:e[t].translation,category:e[t].category,clicks:e[t].clicks,correct:e[t].correct,wrong:e[t].wrong,percent:e[t].percent,logo:e[t].logo}}));return r.sort((function(t,e){return("ASC"===s?t[a]>e[a]:t[a]<e[a])?1:("ASC"===s?t[a]<e[a]:t[a]>e[a])?-1:0})),r},nt=function(t){return t.sortType},it=a(7),ot=a.n(it),ct=a(1),lt={toggle:function(){return function(t){t({type:y})}},openModal:function(){return function(t){t({type:O})}},setCategory:R,finish:D,create:F},dt=Object(i.c)((function(t){var e,a=t.data;return{game:K(a),modal:$(a),categories:Z(a),currentCategory:(e=a,e.currentCategory),allWords:st(a)}}),lt)((function(t){var e=t.game,a=t.toggle,s=t.openModal,r=t.modal,n=t.categories,i=t.currentCategory,o=t.setCategory,c=t.finish,l=t.create,d=t.allWords,p="".concat(ot.a.burger," ").concat(ot.a.show),g={background:e?"linear-gradient(180deg,#fd6a63,#feb46b)":"linear-gradient(180deg, #0099ae,#00bf82)"};return Object(ct.jsxs)("header",{className:ot.a.header,children:[Object(ct.jsxs)("div",{"aria-hidden":"true",onClick:function(){return s()},className:r?p:ot.a.burger,children:[Object(ct.jsx)("div",{className:ot.a.first}),Object(ct.jsx)("div",{className:ot.a.second}),Object(ct.jsx)("div",{className:ot.a.third})]}),Object(ct.jsxs)("ul",{style:g,className:r?"".concat(ot.a.menu," ").concat(ot.a.show):ot.a.menu,children:[Object(ct.jsx)(V.a,{onClick:function(){return c()},to:"/",className:i?"":ot.a.active,children:"main page"}),n.map((function(t){var e=t.category;return Object(ct.jsx)(V.a,{onClick:function(){o(e),D(),l(d)},to:"/category/".concat(e),className:i===e?ot.a.active:"",children:e},e)})),Object(ct.jsx)(V.a,{onClick:function(){o("statistics"),D(),l(d)},to:"/statistics",className:"statistics"===i?ot.a.active:"",children:"statistics page"})]}),Object(ct.jsxs)("label",{htmlFor:"button",className:ot.a.button,children:[Object(ct.jsx)("input",{id:"button",onChange:e?function(){return a()}:function(){a(),D()},type:"checkbox",className:ot.a.input,checked:e}),Object(ct.jsx)("span",{className:ot.a.buttonBack,"data-game":e?"Play":"Train"}),Object(ct.jsx)("span",{className:ot.a.slider})]})]})})),pt=a(17),gt=a.n(pt),ft=a(13),ut=a.n(ft),ht={setNextWord:function(){return function(t){t({type:A})}},setNewRating:function(t){return function(e){e({type:C,payload:t})}},addMistake:function(){return function(t){t({type:E})}},updateStatistic:function(t,e){return function(a){var s=JSON.parse(localStorage.getItem("statistics"));switch(t){case"clicks":s[e].clicks+=1;break;case"correct":s[e].correct+=1,s[e].percent=b(s[e].correct,s[e].wrong);break;case"wrong":s[e].wrong+=1,s[e].percent=b(s[e].correct,s[e].wrong);break;default:return}a({type:B,payload:s}),localStorage.setItem("statistics",JSON.stringify(s))}}},jt=Object(i.c)((function(t){var e=t.data;return{game:K(e),start:tt(e),currentWord:et(e)}}),ht)((function(t){var e=t.translation,a=t.logo,s=t.word,r=t.game,n=t.start,i=t.currentWord,o=t.setNextWord,c=t.setNewRating,l=t.addMistake,d=t.updateStatistic;var p={backgroundImage:"url(".concat(a,")"),backgroundSize:r?"cover":"contain",backgroundPosition:r?"50%":""},g=n?function(t){var e;(e=t).target.classList.contains(ut.a.inactive)||(i===s?(o(),d("correct",i),c("success"),e.target.classList.add(ut.a.inactive),h("SUCCESS")):(d("wrong",i),c("error"),l(),h("ERROR")))}:function(){};return Object(ct.jsxs)("div",{"aria-hidden":"true",onClick:r?function(t){return g(t)}:function(t){h(s,t),d("clicks",s)},className:ut.a.card,children:[Object(ct.jsx)("div",{className:ut.a.front,style:p,children:Object(ct.jsx)("div",{style:{display:r?"none":"block"},className:ut.a.cardHeader,children:s})}),Object(ct.jsx)("div",{className:ut.a.back,style:p,children:Object(ct.jsx)("div",{style:{display:r?"none":"block"},className:ut.a.cardHeader,children:e})}),Object(ct.jsx)("div",{"aria-hidden":"true",onClick:function(t){var e=t.target.parentElement,a=t.target.previousElementSibling;e&&a&&(e.setAttribute("style","transform: rotateY(180deg)"),a.addEventListener("mouseout",(function(){e.setAttribute("style","transform: rotateY(0deg)")})))},className:ut.a.rotate,"data-type":"rotate",style:{display:r?"none":"block"}})]})})),bt=a(25),yt=a.n(bt),mt=Object(i.c)((function(t){var e,a=t.data;return{rating:(e=a,e.rating)}}))((function(t){var e=t.rating;return Object(ct.jsx)("div",{className:yt.a.stars,children:e.map((function(t){return Object(ct.jsx)("div",{className:yt.a[t]})}))})})),Ot=a(26),_t=a.n(Ot),kt=Object(i.c)((function(t){var e,a=t.data;return{allMistakes:(e=a,e.allMistakes)}}))((function(t){var e=t.allMistakes;return e?Object(ct.jsx)("div",{className:_t.a.div,children:Object(ct.jsx)("h1",{children:"".concat(e,1===e?" mistake":" mistakes")})}):Object(ct.jsx)("div",{className:_t.a.div,children:Object(ct.jsx)("h1",{children:"Win"})})})),vt={setCategory:R,startBtn:function(){return function(t){t({type:v})}},setWordOrder:function(t){return function(e){var a;e((a=t[0],{type:N,payload:a})),e({type:w,payload:t})}},finish:D,openWinModal:function(){return function(t){t({type:S})}}},xt=Object(i.c)((function(t){var e,a=t.data;return{words:(e=a,e.words[e.currentCategory]),game:K(a),start:tt(a),currentWord:et(a),windowAfterGame:at(a)}}),vt)((function(t){var e=t.words,a=t.game,r=t.start,n=t.startBtn,i=t.currentWord,o=t.setWordOrder,c=t.finish,l=t.windowAfterGame,d=t.openWinModal,p=t.setCategory;if(Object(s.useEffect)((function(){void 0===i&&(setTimeout(d,1e3),setTimeout((function(){c(),p("")}),3e3))})),e){var g=Object.entries(e),f=j(g);return l?Object(ct.jsx)(kt,{}):Object(ct.jsxs)("div",{children:[Object(ct.jsx)(mt,{}),Object(ct.jsx)("div",{className:gt.a.cards,children:g.map((function(t){var e={word:t[0],logo:t[1].logo,translation:t[1].translate};return Object(ct.jsx)(jt,Object(u.a)({},e),e.word)}))}),a?Object(ct.jsx)("div",{className:gt.a.btns,children:Object(ct.jsx)("button",{"aria-hidden":"true",type:"button",onClick:r?function(){return h(i)}:function(){n(),o(f),h(f[0])},className:r?"".concat(gt.a.startBtn," ").concat(gt.a.repeat):gt.a.startBtn,children:"start game"})}):""]})}return Object(ct.jsx)(z.a,{to:"/"})})),wt=a(35),Nt=a.n(wt),At=a(36),Ct=a.n(At),Et={setCategory:R,create:F},St=Object(i.c)((function(t){var e=t.data;return{game:K(e),allWords:st(e)}}),Et)((function(t){var e=t.category,a=t.logo,s=t.game,r=t.setCategory,n=t.create,i=t.allWords,o={background:s?"linear-gradient(180deg,#fd6a63,#feb46b 40%,#fff 0,#fff)":"linear-gradient(180deg, #0099ae,#00bf82 40%, white 40%)"};return Object(ct.jsxs)(V.a,{style:o,onClick:function(){r(e),n(i)},to:"/category/".concat(e),className:Ct.a.card,children:[Object(ct.jsx)("img",{src:a,alt:e}),e]})})),Tt={resetCategory:function(){return function(t){t({type:_})}}},Wt=Object(i.c)((function(t){var e=t.data;return{categories:Z(e)}}),Tt)((function(t){var e=t.categories,a=t.resetCategory;return Object(s.useEffect)((function(){return a()})),Object(ct.jsx)("main",{children:Object(ct.jsx)("div",{className:Nt.a.cards,children:e.map((function(t){return Object(ct.jsx)(St,Object(u.a)({category:"",logo:""},t),t.category)}))})})})),Mt=a(15),Rt=a.n(Mt),Dt=function(t){var e=t.word,a=t.translation,s=t.category,r=t.clicks,n=t.correct,i=t.wrong,o=t.percent;return Object(ct.jsxs)("tr",{children:[Object(ct.jsx)("td",{children:e}),Object(ct.jsx)("td",{children:a}),Object(ct.jsx)("td",{children:s}),Object(ct.jsx)("td",{children:r}),Object(ct.jsx)("td",{children:n}),Object(ct.jsx)("td",{children:i}),Object(ct.jsx)("td",{children:o})]})},It=a(37),Bt=a.n(It),Gt={setType:function(t){return function(e){e({type:G,payload:t})}}},Jt=Object(i.c)((function(t){var e,a=t.statistics;return{order:(e=a,e.order),sortType:nt(a)}}),Gt)((function(t){var e=t.button,a=t.order,s=t.setType,r=t.sortType,n=e;"percent"===e&&(n="% errors");var i="ASC"===a?"\u2193 ".concat(n):"\u2191 ".concat(n);return Object(ct.jsx)("td",{"aria-hidden":"true",className:Bt.a.sort,onClick:function(){return s(e)},children:r===e?i:n})})),Lt={reset:function(){return function(t){var e=JSON.parse(localStorage.getItem("statistics"));Object.keys(e).forEach((function(t){Object.keys(e[t]).forEach((function(a){switch(t){case"clicks":case"correct":case"wrong":case"percent":e[a][t]=0}}))})),localStorage.setItem("statistics",JSON.stringify(e)),t({type:J,payload:e})}},createWords:function(t){return function(e){var a=Object(f.a)(t),s={};a.sort((function(t,e){return t.percent<e.percent?1:t.percent>e.percent?-1:0})),a.filter((function(t,e){return t.percent>0&&e<8})).forEach((function(t){var e=t.word,a=t.translation,r=t.logo;s[e]={translate:a,logo:r}})),e({type:T,payload:s})}},setCategory:R},Ht=Object(i.c)((function(t){var e,a=t.data,s=t.statistics;return{words:rt(s),buttons:(e=s,e.buttons),game:K(a)}}),Lt)((function(t){var e=t.words,a=t.buttons,s=t.game,r=t.reset,n=t.createWords,i=t.setCategory,o={background:s?"linear-gradient(-90deg,#fd6a63,#feb46b)":"linear-gradient(-90deg, #0099ae,#00bf82)",boxShadow:s?"3px 3px 15px 2px rgb(138 83 0 / 25%), -3px -3px 15px 2px rgb(138 83 0 / 22%)":"3px 3px 15px 2px rgb(0 169 130 / 25%), -3px -3px 15px 2px rgb(0 169 130 / 25%)"};return 0===e.length?Object(ct.jsx)(z.a,{to:"/"}):Object(ct.jsxs)("div",{className:Rt.a.wrapper,children:[Object(ct.jsxs)("div",{className:Rt.a.buttons,children:[Object(ct.jsx)(V.a,{onClick:function(){n(e),i("Difficult Words")},to:"/category/Difficult Words",style:o,className:Rt.a.repeat,children:"repeat difficult words"}),Object(ct.jsx)("button",{type:"button",onClick:function(){return r()},style:o,className:Rt.a.reset,children:"reset"})]}),Object(ct.jsxs)("table",{style:{boxShadow:o.boxShadow},className:Rt.a.statistics,children:[Object(ct.jsx)("caption",{style:o,children:"Cards"}),Object(ct.jsx)("thead",{children:Object(ct.jsx)("tr",{className:Rt.a.row,children:a.map((function(t){return Object(ct.jsx)(Jt,{button:t},t)}))})}),Object(ct.jsx)("tbody",{children:e.map((function(t){return Object(ct.jsx)(Dt,Object(u.a)({},t),t.word)}))})]})]})})),Ft={close:function(){return function(t){t({type:k})}}},Pt=Object(i.c)((function(t){var e=t.data;return{modal:$(e)}}),Ft)((function(t){var e=t.modal,a=t.close;return Object(ct.jsxs)("div",{"aria-hidden":"true",onClick:e?function(t){return function(t){var e=t.target;e&&"ul"!==e.localName&&a()}(t)}:function(){},className:Q.a.app,children:[Object(ct.jsx)(dt,{}),Object(ct.jsxs)(z.d,{children:[Object(ct.jsx)(z.b,{path:"/category/:name",component:xt}),Object(ct.jsx)(z.b,{path:"/statistics",component:Ht}),Object(ct.jsx)(z.b,{path:"/",component:Wt})]})]})}));n.a.render(Object(ct.jsx)(i.a,{store:q,children:Object(ct.jsx)(o.a,{history:U,children:Object(ct.jsx)(Pt,{})})}),document.getElementById("root"))},7:function(t,e,a){t.exports={header:"style_header__2Oyr-",button:"style_button__1Llqo",input:"style_input__2dczz",buttonBack:"style_buttonBack__3VvuQ",slider:"style_slider__2DaPq",burger:"style_burger__2qj3E",show:"style_show__2H-em",first:"style_first__BTWJ3",second:"style_second__3fDOt",third:"style_third__2fg9b",menu:"style_menu__3VBfH",active:"style_active__1d7ja"}}},[[53,1,2]]]);
//# sourceMappingURL=main.04ec0656.chunk.js.map