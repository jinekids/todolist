(function(){"use strict";var n={7514:function(n,t,e){var o=e(5130),r=e(6768);function u(n,t,e,o,u,i){const a=(0,r.g2)("HeaderView"),c=(0,r.g2)("MainView");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(a),(0,r.bF)(c)],64)}var i=e(4232);const a={class:"header wrap"},c=["textContent"],f=["textContent"];function d(n,t,e,o,u,d){return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("h2",{textContent:(0,i.v_)(n.subject)},null,8,c),(0,r.Lk)("p",{textContent:(0,i.v_)(n.name)},null,8,f)])}var s={name:"HeaderView",data:function(){return{subject:"TodoList",name:"여진"}}},l=e(1241);const v=(0,l.A)(s,[["render",d],["__scopeId","data-v-08f8d85a"]]);var p=v;const b={class:"main wrap"};function w(n,t,e,u,i,a){return(0,r.uX)(),(0,r.CE)("div",b,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>n.newTodoItem=t)},null,512),[[o.Jo,n.newTodoItem]]),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...t)=>n.addToDo&&n.addToDo(...t))},"추가")])}var h={name:"MainView",data:function(){return{newTodoItem:"항목을 입력하세요"}}};const m=(0,l.A)(h,[["render",w],["__scopeId","data-v-c8ab013e"]]);var O=m,g={name:"App",components:{HeaderView:p,MainView:O}};const k=(0,l.A)(g,[["render",u]]);var x=k;(0,o.Ef)(x).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return n[o].call(u.exports,u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,u){if(!o){var i=1/0;for(d=0;d<n.length;d++){o=n[d][0],r=n[d][1],u=n[d][2];for(var a=!0,c=0;c<o.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](o[c])}))?o.splice(c--,1):(a=!1,u<i&&(i=u));if(a){n.splice(d--,1);var f=r();void 0!==f&&(t=f)}}return t}u=u||0;for(var d=n.length;d>0&&n[d-1][2]>u;d--)n[d]=n[d-1];n[d]=[o,r,u]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,u,i=o[0],a=o[1],c=o[2],f=0;if(i.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(c)var d=c(e)}for(t&&t(o);f<i.length;f++)u=i[f],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(d)},o=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(7514)}));o=e.O(o)})();
//# sourceMappingURL=app.5103a49f.js.map