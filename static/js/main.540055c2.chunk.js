(this["webpackJsonptodos-react"]=this["webpackJsonptodos-react"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),o=c(7),i=c.n(o),a=(c(14),c(4)),r=c(9),s=c(3),d=c(8),u=c.n(d),j=c(0);function f(e){var t=e.todo,c=e.checkedClick,n=e.handleDestroyTodo,l=e.editTodo,o=e.editIndex,i=e.saveTodo,a=e.exitSaveTodo;return Object(j.jsxs)("li",{className:u()({completed:t.isCompleted,editing:o===t.id}),children:[Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("input",{className:"toggle",type:"checkbox",value:t.title,checked:t.isCompleted,onChange:function(){return c(t.id,t.isCompleted)}}),Object(j.jsx)("label",{onDoubleClick:function(){return l(t.id)},children:t.title}),Object(j.jsx)("button",{className:"destroy",onClick:function(){return n(t.id)}})]}),Object(j.jsx)("input",{className:"edit",defaultValue:t.title,onKeyUp:function(e){return"Enter"===e.key&&i(t.id,e.target.value.trim(),t.isCompleted)||"Escape"===e.key&&a()},onBlur:function(e){return i(t.id,e.target.value.trim(),t.isCompleted)}})]})}function b(e){var t=e.todoList,c=e.filter,n=e.filters,l=e.editTodo,o=e.editIndex,i=e.checkedClick,a=e.checkedAllClick,r=e.handleDestroyTodo,s=e.saveTodo,d=e.exitSaveTodo;return Object(j.jsxs)("section",{className:"main",children:[Object(j.jsx)("input",{id:"toggle-all",className:"toggle-all",onChange:function(e){return a(e.target.checked)},type:"checkbox",checked:t.length>0&&t.every(n.completed)&&!0}),Object(j.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(j.jsx)("ul",{className:"todo-list",children:t.filter(n[c]).map((function(e){return Object(j.jsx)(f,{todo:e,checkedClick:i,handleDestroyTodo:r,editTodo:l,editIndex:o,saveTodo:s,exitSaveTodo:d},e.id)}))})]})}var h="TODOS",m=function(){return JSON.parse(localStorage.getItem(h))||[]},O=function(e){localStorage.setItem(h,JSON.stringify(e))},p=c(18);function x(e){var t=e.count,c=e.todoList,n=e.filter,l=e.filters,o=e.filterTodo,i=e.clearCompleted;return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsxs)("span",{className:"todo-count",children:[Object(j.jsx)("strong",{children:t})," item left"]}),Object(j.jsxs)("ul",{className:"filters",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"all"===n?"selected":"",onClick:function(){return o("all")},href:"#/",children:"All"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"active"===n?"selected":"",href:"#/active",onClick:function(){return o("active")},children:"Active"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"completed"===n?"selected":"",href:"#/completed",onClick:function(){return o("completed")},children:"Completed"})})]}),c.filter(l.completed).length>0&&Object(j.jsx)("button",{className:"clear-completed",onClick:function(){return i(l.active)},children:"Clear completed"})]})}function C(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],l=t[1],o=Object(n.useState)([]),i=Object(s.a)(o,2),d=i[0],u=i[1],f=Object(n.useState)("all"),h=Object(s.a)(f,2),C=h[0],v=h[1],g=Object(n.useState)(null),k=Object(s.a)(g,2),T=k[0],N=k[1],y={all:function(){return!0},active:function(e){return!e.isCompleted},completed:function(e){return e.isCompleted}};Object(n.useEffect)((function(){u(m())}),[]),Object(n.useEffect)((function(){O(d)}),[d]);var S=Object(n.useCallback)((function(e){13===e.keyCode&&(c&&u([].concat(Object(r.a)(d),[{id:Object(p.a)(),title:c,isCompleted:!1}])),l(""))}),[c,d]),I=Object(n.useCallback)((function(e,t){u((function(c){return c.map((function(c){return c.id===e?Object(a.a)(Object(a.a)({},c),{},{isCompleted:!t}):c}))}))}),[]),D=Object(n.useCallback)((function(e){var t=d.filter((function(t){return t.id!==e}));u(t)}),[d]),F=Object(n.useCallback)((function(e){u((function(t){return t.map((function(t){return t.isCompleted=Object(a.a)(Object(a.a)({},t),{},{isCompleted:e})}))}))}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:"todos"}),Object(j.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,value:c,onChange:function(e){l(e.target.value)},onKeyUp:S})]}),d.length>0&&Object(j.jsx)(b,{todoList:d,filter:C,filters:y,editTodo:function(e){N(e)},editIndex:T,checkedClick:I,checkedAllClick:F,handleDestroyTodo:D,saveTodo:function(e,t,c){null!==T&&(t?u((function(n){return n.map((function(n){return n.id===T?{id:e,title:t,isCompleted:c}:n}))})):D(e),N(null))},exitSaveTodo:function(){N(null)}}),d.length>0&&Object(j.jsx)(x,{count:d.filter(y.active).length,todoList:d,filter:C,filters:y,filterTodo:function(e){v(e)},clearCompleted:function(e){var t=d.filter(e);u(t)}})]})}var v=function(){return Object(j.jsx)("section",{className:"todoapp",children:Object(j.jsx)(C,{})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),l(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.540055c2.chunk.js.map