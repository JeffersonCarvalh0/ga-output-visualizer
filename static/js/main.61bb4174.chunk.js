(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(12),l=a(0),c=a.n(l),u=a(11),o=a(6),s=function(e){var t=e.tuples.map(function(e){return c.a.createElement("td",null," ",void 0===e.grade?e:"subject=".concat(e.subject,", teacher=").concat(e.teacher)," ")});return c.a.createElement("tr",null,t)},m=function(e){if(e.input&&e.periodNum&&e.days){var t,a=parseInt(e.periodNum),n=parseInt(e.days),l=e.input.filter(function(t){return t.grade===e.grade}),u=[],m=[];u.push(c.a.createElement("th",null));for(var i=0;i<n;++i)u.push(c.a.createElement("th",null," Day ",i+1," "));var p=Array(n).fill("Free");(t=console).log.apply(t,Object(r.a)(p));for(var d=0;d<a;++d){var b=[c.a.createElement("span",null," ",c.a.createElement("b",null," Period ",d+1," ")," ")].concat(Object(r.a)(p));m.push(b.slice())}console.log(m);var v=!0,E=!1,f=void 0;try{for(var h,g=l[Symbol.iterator]();!(v=(h=g.next()).done);v=!0){var y=h.value;m[y.period%(n+1)][Math.trunc(y.period/(n+1))+1]=y}}catch(j){E=!0,f=j}finally{try{v||null==g.return||g.return()}finally{if(E)throw f}}for(var N=0;N<m.length;++N)m[N]=c.a.createElement(s,{tuples:m[N]});return c.a.createElement("div",{className:"section"},c.a.createElement("h4",null," Grade ",e.grade," "),c.a.createElement("div",{className:"divider"}),c.a.createElement(o.CardPanel,{className:"z-depth-5"},c.a.createElement(o.Table,{centered:!0,hoverable:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,u)),c.a.createElement("tbody",null,m))))}return null};Object(u.render)(c.a.createElement(function(e){var t=Object(l.useState)({}),a=Object(n.a)(t,2),r=a[0],u=a[1],s=Object(l.useState)(0),i=Object(n.a)(s,2),p=i[0],d=i[1],b=Object(l.useState)(0),v=Object(n.a)(b,2),E=v[0],f=v[1],h=Object(l.useState)(0),g=Object(n.a)(h,2),y=g[0],N=g[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper indigo"},c.a.createElement("span",{className:"brand-logo center"}," Output visualizer "))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section"},c.a.createElement(o.Input,{name:"input",onChange:function(e){return u(JSON.parse(e.target.value))},label:"Input"}),c.a.createElement(o.Input,{name:"periodNum",type:"number",onChange:function(e){return d(e.target.value)},label:"Periods per day"}),c.a.createElement(o.Input,{name:"classesNum",type:"number",onChange:function(e){return f(e.target.value)},label:"Number of classes"}),c.a.createElement(o.Input,{name:"days",type:"number",onChange:function(e){return N(e.target.value)},label:"Number of school days per week"})),function(){for(var e=[],t=0;t<E;++t)e.push(c.a.createElement(m,{input:r,periodNum:p,grade:t,days:y,key:t}));return e}()))},null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.61bb4174.chunk.js.map