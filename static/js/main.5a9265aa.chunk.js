(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,n,t){e.exports=t(97)},40:function(e,n,t){},97:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(5),i=t.n(o),l=(t(40),t(20)),c=t(21),u=t(33),p=t(22),d=t(34),s=t(4),m=t(23),h=t.n(m),g=t(1),f=t(30),b=t(27),C=t(7),v=t.n(C),_=t(9),w=t(28),y=t.n(w),E=t(29),k=t.n(E),T=t(12);function I(){var e=Object(s.a)(["\n  width: 100%;\n\n  .select-control {\n    border-radius: 2em;\n    background: #eee;\n  }\n\n  .select-input {\n    margin-left: 0.5em;\n  }\n"]);return I=function(){return e},e}var O=Object(g.default)(v.a)(I()),j=function(e){var n=e.triggerNextStep,t=(e.steps,F()),o=Object(a.useState)(!1),i=Object(T.a)(o,2),l=i[0],c=i[1],u=Object(a.useState)(t[0].value),p=Object(T.a)(u,2),d=p[0],s=p[1];return r.a.createElement(O,{value:d,disabled:l,options:t,virtualized:!0,classes:{selectControl:"select-control",selectInput:"select-input"},onChange:function(e){s(e),c(!0),n({value:"".concat(A[e]," ( 3A_CODE: ").concat(B[e]," )")})}})},S=function(){return r.a.createElement("div",null,A.prompt_landingConfirm,r.a.createElement("hr",null),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"\ud83d\udcc5"),r.a.createElement("td",null,A.date),r.a.createElement("td",null,"2016-12-14")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u231a"),r.a.createElement("td",null,A.time),r.a.createElement("td",null,"11:33:00.125+08:00")),r.a.createElement("tr",null,r.a.createElement("td",null,"\ud83d\udea2"),r.a.createElement("td",null," ",A.container),r.a.createElement("td",null,"f5c5ab8f-8bcf-446a-8dea-4cb625316ffd")),r.a.createElement("tr",null,r.a.createElement("td",null,"\ud83d\udccd"),r.a.createElement("td",null,A.geoLocation),r.a.createElement("td",null,"geo:22.58425,120.31815")))))},D=[{key:"us",value:"us",flag:"us",label:"United States"},{key:"vn",value:"vn",flag:"vn",label:"Vietnam"},{key:"rs",value:"rs",flag:"rs",label:"Serbia"}],L=["atlanticCod","blueCrab","dolphinFish","grouper","kingCrab","pacificCod","redSnapper","seaCucumber","shark","swordfish","albacoreTuna","bigeyeTuna","skipjackTuna","yellowfinTuna","bluefinTuna"],B={atlanticCod:"LPS",blueCrab:"CRB",dolphinFish:"DOL",grouper:"EWL",kingCrab:"KCD",pacificCod:"PCO",redSnapper:"RES",seaCucumber:"EHV",shark:"HXC",swordfish:"SWO",albacoreTuna:"ALB",bigeyeTuna:"BET",skipjackTuna:"SKJ",yellowfinTuna:"YFT",bluefinTuna:"PBF"},A=new k.a({en:{input_placeholder:"Type your answer . . .",atlanticCod:"Atlantic Cod",blueCrab:"Blue Crab (Atlantic)",dolphinFish:"Dolphinfish (Mahi Mahi)",grouper:"Potato Grouper",kingCrab:"King Crab (red)",pacificCod:"Pacific Cod",redSnapper:"Red Snapper",seaCucumber:"Black Spotted Sea Cucumber",shark:"Frilled Shark",swordfish:"Swordfish",albacoreTuna:"Albacore Tuna",bigeyeTuna:"Bigeye Tuna",skipjackTuna:"Skipjack Tuna",yellowfinTuna:"Yellowfin Tuna",bluefinTuna:"Bluefin Tuna",prompt_welcome:"Welcome back Captain!",prompt_end:"See you soon Captain!",prompt_anotherOne:"What else can I add for you Captain?",prompt_unavailable:"I'm sorry Captain, I'm afraid I can't do that . . .",prompt_initial:"What would you like to add?",addNew:"Add new",catch:"Catch \ud83d\udc1f",transport:"Transport \ud83d\udea2",landing:"Landing \u2693",sale:"Sale \ud83d\udcb0",nothing:"I'm good \ud83d\ude01",prompt_nothing:"Smooth sailing \ud83d\udca8",prompt_catch:"What have you caught?",prompt_quantity:"How many {previousValue} did you catch?",prompt_preservation:"How are you preserving them?",prompt_catchCongrat:"\ud83d\udc1f Congratulations on the catch! \ud83d\udc1f",chilled:"Frozen \u2744",salted:"Dried \u2668",fresh:"Fresh \u2728",prompt_landing:"Have you finished unpacking?",prompt_landingConfirm:"\u2693 Your time, container, and geolocation has been automatically recorded! Please review the data for accuracy:",inprogress:"In-progress \u23f3",finished:"Finished \ud83c\udfc1",prompt_confirmData:"Does the data seem accurate?",dataIsAccurate:"Yes",dataIsInaccurate:"No",prompt_errorReported:"I have reported this error to our engineers. TODO: Continue this flow to add self-input data",date:"Date",time:"Time",timeZone:"Time Zone",container:"Container",geoLocation:"Location"},vn:{input_placeholder:"Xin giao nh\u1eadp th\xf4ng tin",atlanticCod:"C\xe1 tuy\u1ebft \u0110\u1ea1i T\xe2y D\u01b0\u01a1ng",blueCrab:"Cua xanh (\u0110\u1ea1i T\xe2y D\u01b0\u01a1ng)",dolphinFish:"C\xe1 heo (Mahi Mahi)",grouper:"C\xe1 m\xfa",kingCrab:"Cua Vua",pacificCod:"Cod Th\xe1i B\xecnh D\u01b0\u01a1ng",redSnapper:"C\xe1 h\u1ed3ng",seaCucumber:"D\u01b0a chu\u1ed9t bi\u1ec3n",shark:"C\xe1 m\u1eadp",swordfish:"C\xe1 ki\u1ebfm",albacoreTuna:"C\xe1 ng\u1eeb",bigeyeTuna:"C\xe1 ng\u1eeb m\u1eaft to",skipjackTuna:"C\xe1 ng\u1eeb v\u1eb1n",yellowfinTuna:"C\xe1 ng\u1eeb v\xe2y v\xe0ng",bluefinTuna:"C\xe1 ng\u1eeb v\xe2y xanh",prompt_welcome:"Ch\xe0o m\u1eebng tr\u1edf l\u1ea1i thuy\u1ec1n tr\u01b0\u1edfng!",prompt_end:"H\u1eb9n g\u1eb7p l\u1ea1i thuy\u1ec1n tr\u01b0\u1edfng!",prompt_unavailable:"Xin l\u1ed7i Thuy\u1ec1n tr\u01b0\u1edfng, ph\u1ea7n m\u1ec1m ch\u01b0a \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t  . . .",prompt_initial:"Thuy\u1ec1n tr\u01b0\u1edfng mu\u1ed1n l\xe0m g\xec??",addNew:"Th\xeam m\u1edbi",catch:"B\u1eaft \ud83d\udc1f",transport:"Di chuy\u1ec3n \ud83d\udea2",landing:"H\u1ea1 c\xe1nh \u2693",sale:"Giao b\xe1n \ud83d\udcb0",prompt_catch:"Lo\u1ea1i b\u1eaft n\xe0o?"},rs:{input_placeholder:"\u0420\u0435\u0446\u0438\u0442\u0435 \u043a\u0430\u043f\u0435\u0442\u0430\u043d\u0443 \u0410\u0445\u043e\u0438!",prompt_welcome:"\u0414\u043e\u0431\u0440\u043e\u0434\u043e\u0448\u043b\u0438 \u043d\u0430\u0437\u0430\u0434 \u043a\u0430\u043f\u0435\u0442\u0430\u043d\u0435!",prompt_end:"\u0412\u0438\u0434\u0438\u043c\u043e \u0441\u0435 \u0443\u0441\u043a\u043e\u0440\u043e \u043a\u0430\u043f\u0435\u0442\u0430\u043d\u0435!",prompt_unavailable:"\u0416\u0430\u043e \u043c\u0438 \u0458\u0435 \u043a\u0430\u043f\u0435\u0442\u0430\u043d\u0435, \u0431\u043e\u0458\u0438\u043c \u0441\u0435 \u0434\u0430 \u0442\u043e \u043d\u0435 \u043c\u043e\u0433\u0443 \u0434\u0430 \u0443\u0440\u0430\u0434\u0438\u043c . . .",atlanticCod:"\u0410\u0442\u043b\u0430\u043d\u0441\u043a\u0438 \u0431\u0430\u043a\u0430\u043b\u0430\u0440",blueCrab:"\u041f\u043b\u0430\u0432\u0438 \u0440\u0430\u043a (\u0410\u0442\u043b\u0430\u043d\u0442\u0438\u043a)",dolphinFish:"\u0414\u043e\u043b\u043f\u0445\u0438\u043d\u0444\u0438\u0441\u0445 (\u041c\u0430\u0445\u0438 \u041c\u0430\u0445\u0438)",grouper:"\u0413\u0440\u0443\u043f\u0435\u0440",kingCrab:"\u041a\u0440\u0430\u0459\u0435\u0432\u0441\u043a\u0430 \u043a\u0440\u0430\u0431\u0430",pacificCod:"\u041f\u0430\u0446\u0438\u0444\u0438\u0447\u043a\u0438 ko\u0431\u0430\u043a\u0430\u043b\u0430\u0440",redSnapper:"\u0426\u0440\u0432\u0435\u043d\u0438 \u0441\u043d\u0430\u043f\u0435\u0440",seaCucumber:"\u041c\u043e\u0440\u0441\u043a\u0438 \u043a\u0440\u0430\u0441\u0442\u0430\u0432\u0430\u0446",shark:"\u0410\u0458\u043a\u0443\u043b\u0430",swordfish:"\u0421\u0430\u0431\u0459\u0430\u0440\u043a\u0430",albacoreTuna:"\u0414\u0443\u0433\u043e\u043f\u0435\u0440\u0430\u0458\u043d\u0430 \u0442\u0443\u043d\u0430",bigeyeTuna:"\u0412\u0435\u043b\u0438\u043a\u0430 \u043e\u043a\u0430 \u0442\u0443\u043d\u0430",skipjackTuna:"\u041f\u0440\u0443\u0433\u0430\u0441\u0442\u0430 \u0442\u0443\u043d\u0430",yellowfinTuna:"\u0416\u0443\u0442\u043e\u043f\u0435\u0440\u0430\u0458\u043d\u0430 \u0442\u0443\u043d\u0430",bluefinTuna:"\u041f\u043b\u0430\u0432\u043e\u043f\u0435\u0440\u0430\u0458\u043d\u0430 \u0442\u0443\u043d\u0430",prompt_initial:"\u0428\u0442\u0430 \u0436\u0435\u043b\u0438\u0442\u0435 \u0434\u0430 \u0440\u0430\u0434\u0438\u0442\u0435?",addNew:"\u0414\u043e\u0434\u0430\u0458 \u043d\u043e\u0432\u043e",catch:"\u0426\u0430\u0442\u0446\u0445 \ud83d\udc1f",prompt_catch:"\u041a\u0430\u043a\u0432\u0430 \u0432\u0440\u0441\u0442\u0430 \u0443\u043b\u043e\u0432\u0430?",transport:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \ud83d\udea2",landing:"\u0421\u043b\u0435\u0442\u0430\u045a\u0435 \u2693",sale:"\u041f\u0440\u043e\u0434\u0430\u0458\u0430  \ud83d\udcb0"}}),F=function(){return L.map(function(e){return{value:e,label:"".concat(A[e])}})},x={savedLanguage:"NEMO_LANGUAGE"},N=function(e){return{value:e,label:A[e]}},W=["prompt_landing","add_landingDisposition","prompt_landingConfirm","prompt_confirmData","add_confirmData","prompt_checkConfirm","prompt_anotherOne"],H=function(){return[{id:"prompt_landing",hideInput:!0},{id:"add_landingDisposition",options:["inprogress","finished"].map(N)},{id:"prompt_landingConfirm",component:r.a.createElement(S,null)},{id:"prompt_confirmData",hideInput:!0},{id:"add_confirmData",hideInput:!0,options:["dataIsAccurate","dataIsInaccurate"].map(N)},{id:"prompt_checkConfirm",hideInput:!0,message:function(e){return"dataIsInaccurate"===e.previousValue?A.prompt_errorReported:"\u2714"}}].map(function(e,n){return R(e,n,W)})},P=["prompt_catch","add_catch","prompt_quantity","add_quantity","prompt_preservation","add_preservation","prompt_catchCongrat","prompt_anotherOne"],M=function(){return[{id:"prompt_catch",hideInput:!0},{id:"add_catch",component:r.a.createElement(j,null),hideInput:!0,replace:!1,waitAction:!0},{id:"prompt_quantity",hideInput:!0},{id:"add_quantity",user:!0,validator:function(e){return!(isNaN(e)||e<=0)||"It should be a number greater than 0!"}},{id:"prompt_preservation",hideInput:!0},{id:"add_preservation",hideInput:!0,options:["chilled","salted","fresh"].map(N)},{id:"prompt_catchCongrat",component:r.a.createElement(y.a,{ref:function(e){return e.rewardMe()},type:"emoji",config:{emoji:["\ud83d\udc1f","\ud83e\udd90","\ud83d\udc19","\ud83e\udd80","\ud83d\udc33","\ud83d\udc0b","\ud83d\udc2c","\ud83e\udd91","\ud83d\udc21","\ud83e\udd88"]}},r.a.createElement("div",null,A.prompt_catchCongrat))}].map(function(e,n){return R(e,n,P)})},R=function(e,n,t){var a=t[n+1];return e.options?e.options=e.options.map(function(e){return e.trigger=a,e}):(e.trigger=a,!e.hideInput||e.waitAction||e.message||(e.message=A[e.id])),e};function q(){var e=Object(s.a)(["\n  width: 9em;\n  margin-right: 2em;\n\n  .select-control {\n    border-radius: 2em;\n    background: #eee;\n  }\n\n  .select-input {\n    margin-left: 0.5em;\n  }\n  \n  .select-label {\n      color: #000;\n  }\n"]);return q=function(){return e},e}function V(){var e=Object(s.a)(["\n  height: 3.6em;\n  background: ",";\n  color: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n\n  h1 {\n    font-size: 1.8em;\n    margin-left: 2em;\n  }\n"]);return V=function(){return e},e}var z=g.default.div(V(),function(e){return e.theme.headerBgColor},function(e){return e.theme.headerFontColor}),G=Object(g.default)(v.a)(q()),Y=function(e){var n=e.language,t=e.onLanguageChanged;return r.a.createElement(z,null,r.a.createElement("h1",null,"Nemo"),r.a.createElement(G,{value:n,options:D,classes:{selectControl:"select-control",selectInput:"select-input"},valueRenderer:function(e){var n=e.value,t=e.label;return r.a.createElement("div",null,r.a.createElement(b.a,{code:n,svg:!0})," ",r.a.createElement("span",{className:"select-label"},t))},onChange:function(e){t(e)}}))},J={background:"#f5f8fb",headerBgColor:"#00b0ff",headerFontColor:"#fff",botBubbleColor:"#00b0ff",botFontColor:"#fff",userBubbleColor:"#fff",userFontColor:"#4a4a4a"};function K(){var e=Object(s.a)(["\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  position: absolute;\n  border: none;\n  bottom: 5em;\n  z-index: 1000;\n  background: ",";\n  color: ",";\n  button:focus {\n    outline: none;\n  }\n"]);return K=function(){return e},e}function U(){var e=Object(s.a)(["\n  width: 90%;\n  height: 90%;\n  .rsc-os-options {\n    display: flex;\n    flex-flow: wrap;\n    flex-direction: row-reverse;\n  }\n"]);return U=function(){return e},e}function X(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  justify-content: space-evenly;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);return X=function(){return e},e}var Z=g.default.div(X()),$=Object(g.default)(h.a)(U()),Q=g.default.button(K(),function(e){return e.theme.headerBgColor},function(e){return e.theme.headerFontColor}),ee=function(){return r.a.createElement(Q,null,r.a.createElement(f.a,{onClick:function(){return window.location.reload()}}))},ne=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={language:localStorage.getItem(x.savedLanguage)||D[0].value,hasEnded:!1},t.handleLanguageChanged=function(e){localStorage.setItem(x.savedLanguage,e),localStorage.removeItem("rsc_cache"),window.location.reload()},t.handleEnd=function(e){e.steps,e.values;t.setState({hasEnded:!0})},t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){A.setLanguage(this.state.language);var e=[{id:"prompt_welcome",hideInput:!0,message:function(){return A.prompt_welcome},trigger:"prompt_initial"},{id:"prompt_initial",hideInput:!0,message:function(){return A.prompt_initial},trigger:"prompt_events"},{id:"prompt_anotherOne",hideInput:!0,message:function(){return A.prompt_anotherOne},trigger:"prompt_events"},{id:"prompt_nothing",hideInput:!0,message:function(){return A.prompt_nothing},trigger:"prompt_end"},{id:"prompt_events",hideInput:!0,options:["catch","transport","landing","sale","nothing"].map(function(e){return{value:e,label:"".concat(A[e]),trigger:"prompt_".concat(e)}})}].concat(Object(_.a)(["transport","sale"].map(function(e){return{id:"prompt_".concat(e),message:function(){return A.prompt_unavailable},trigger:"prompt_end"}})),Object(_.a)(M()),Object(_.a)(H()),[{id:"prompt_end",hideInput:!0,message:function(){return A.prompt_end},end:!0}]);return r.a.createElement(g.ThemeProvider,{theme:J},r.a.createElement(Z,null,this.state.hasEnded&&r.a.createElement(ee,null),r.a.createElement($,Object.assign({},this.props,{headerComponent:r.a.createElement(Y,{language:this.state.language,onLanguageChanged:this.handleLanguageChanged}),botAvatar:"assets/avatar.png",hideUserAvatar:!0,cache:!0,userAvatar:"assets/captain.png",placeholder:A.placeholder,userDelay:0,steps:e,handleEnd:this.handleEnd}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.5a9265aa.chunk.js.map