(function(){"use strict";var n={462:function(n,t,o){var r=o(751),e=o(641);function a(n,t,o,r,a,s){const c=(0,e.g2)("main-screen"),i=(0,e.g2)("interact-screen");return(0,e.uX)(),(0,e.CE)(e.FK,null,["default"===a.statusMatch?((0,e.uX)(),(0,e.Wv)(c,{key:0,onOnStart:t[0]||(t[0]=n=>s.onHandleBeforeStart(n))})):(0,e.Q3)("",!0),"match"===a.statusMatch?((0,e.uX)(),(0,e.Wv)(i,{key:1})):(0,e.Q3)("",!0)],64)}const s={class:"screen"},c={class:"actions"};function i(n,t,o,r,a,i){return(0,e.uX)(),(0,e.CE)("div",s,[t[8]||(t[8]=(0,e.Lk)("h1",null,"Pokemon - GO",-1)),t[9]||(t[9]=(0,e.Lk)("h3",null,"Select mode to start game",-1)),(0,e.Lk)("div",c,[(0,e.Lk)("button",{onClick:t[0]||(t[0]=n=>i.onStart(16))},t[4]||(t[4]=[(0,e.Lk)("span",null,"4x4",-1),(0,e.Lk)("span",null,"Easy",-1)])),(0,e.Lk)("button",{onClick:t[1]||(t[1]=n=>i.onStart(36))},t[5]||(t[5]=[(0,e.Lk)("span",null,"6x6",-1),(0,e.Lk)("span",null,"Normal",-1)])),(0,e.Lk)("button",{onClick:t[2]||(t[2]=n=>i.onStart(64))},t[6]||(t[6]=[(0,e.Lk)("span",null,"8x8",-1),(0,e.Lk)("span",null,"Hard",-1)])),(0,e.Lk)("button",{onClick:t[3]||(t[3]=n=>i.onStart(100))},t[7]||(t[7]=[(0,e.Lk)("span",null,"10x10",-1),(0,e.Lk)("span",null,"Supper Hard",-1)]))])])}var l={methods:{onStart(n){this.$emit("onStart",{size:n})}}},u=o(262);const f=(0,u.A)(l,[["render",i]]);var d=f;const p={class:"screen"};function k(n,t,o,r,a,s){const c=(0,e.g2)("base-card");return(0,e.uX)(),(0,e.CE)("div",p,[(0,e.bF)(c)])}var v=o(33);const h={class:"card"};function g(n,t,o,r,a,s){return(0,e.uX)(),(0,e.CE)("div",h,[(0,e.Lk)("div",{class:(0,v.C4)(["card__inner",{"is-flipped":a.isFlipped}]),onClick:t[0]||(t[0]=(...n)=>s.ontoggleFlipCard&&s.ontoggleFlipCard(...n))},t[1]||(t[1]=[(0,e.Lk)("div",{class:"card_face card__face--front"},[(0,e.Lk)("div",{class:"card__content"},"Front")],-1),(0,e.Lk)("div",{class:"card_face card__face--back"},[(0,e.Lk)("div",{class:"card__content"},"Back")],-1)]),2)])}var m={data(){return{isFlipped:!1}},methods:{ontoggleFlipCard(){this.isFlipped=!this.isFlipped}}};const b=(0,u.A)(m,[["render",g]]);var L=b,C={components:{BaseCard:L}};const O=(0,u.A)(C,[["render",k]]);var _=O,S={name:"App",components:{MainScreen:d,InteractScreen:_},data(){return{settings:{totalOfBlocks:0,cardsContext:[],startedAt:null},timer:0,statusMatch:"default"}},methods:{onHandleBeforeStart(n){console.log("Configs:",n),this.settings.totalOfBlocks=n.size,console.log("Total of blocks:",this.settings.totalOfBlocks);const t=Array.from({length:this.settings.totalOfBlocks/2},((n,t)=>t+1));console.log("First cards:",t),this.statusMatch="match"}}};const y=(0,u.A)(S,[["render",a]]);var F=y;(0,r.Ef)(F).mount("#app")}},t={};function o(r){var e=t[r];if(void 0!==e)return e.exports;var a=t[r]={exports:{}};return n[r](a,a.exports,o),a.exports}o.m=n,function(){var n=[];o.O=function(t,r,e,a){if(!r){var s=1/0;for(u=0;u<n.length;u++){r=n[u][0],e=n[u][1],a=n[u][2];for(var c=!0,i=0;i<r.length;i++)(!1&a||s>=a)&&Object.keys(o.O).every((function(n){return o.O[n](r[i])}))?r.splice(i--,1):(c=!1,a<s&&(s=a));if(c){n.splice(u--,1);var l=e();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=n.length;u>0&&n[u-1][2]>a;u--)n[u]=n[u-1];n[u]=[r,e,a]}}(),function(){o.d=function(n,t){for(var r in t)o.o(t,r)&&!o.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};o.O.j=function(t){return 0===n[t]};var t=function(t,r){var e,a,s=r[0],c=r[1],i=r[2],l=0;if(s.some((function(t){return 0!==n[t]}))){for(e in c)o.o(c,e)&&(o.m[e]=c[e]);if(i)var u=i(o)}for(t&&t(r);l<s.length;l++)a=s[l],o.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return o.O(u)},r=self["webpackChunkPokemon_Go"]=self["webpackChunkPokemon_Go"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(462)}));r=o.O(r)})();
//# sourceMappingURL=app.f2619499.js.map