!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const i=(t,e=[],n)=>{const i=document.createElement(t);return e.forEach(t=>{i.classList.add(t)}),n&&(i.innerHTML=n),i};function o(t,e){this.taskList=[],this.title=t,this.id=e}const d=(t,e)=>{const n=document.querySelector(".main-content"),o=document.querySelector(".todolist"),d=i("li",["list"]);d.dataset.listId=`${e}`;const a=i("span",[],`${t}`),l=i("div",["buttons"]);[i("div",["editbtn"]),i("div",["deletebtn"])].forEach(t=>l.appendChild(t)),[a,l].forEach(t=>d.appendChild(t)),o.appendChild(d),n.appendChild(o)};const a=t=>{if("list"===t){const t=i("div",["modal-container"]),e=i("div",["modal"]),n=i("form");n.setAttribute("action","javascript:void(0)");const o=i("span",["newlisthead"],"New List"),d=i("label",[],"Title");d.setAttribute("for","list-title");const a=i("input");a.setAttribute("type","text"),a.setAttribute("name","list-title"),a.setAttribute("placeholder","Work");const l=i("div",["modal-buttons"]);[i("button",["create-list"],"Create"),i("button",["cancel"],"Cancel")].forEach(t=>l.appendChild(t)),[o,d,a,l].forEach(t=>n.appendChild(t)),e.appendChild(n),t.appendChild(e),document.body.appendChild(t)}else if("task"===t){const t=i("div",["modal-container"]),e=i("div",["modal"]),n=i("form");n.setAttribute("action","javascript:void(0)");const o=i("span",["newtaskhead"],"New Task"),d=i("label",[],"Title");d.setAttribute("for","task-title");const a=i("input");a.setAttribute("type","text"),a.setAttribute("name","task-title"),a.setAttribute("placeholder","Do Laundry");const l=i("label",[],"Due Date");l.setAttribute("for","duedate");const r=i("input");r.setAttribute("type","date"),r.setAttribute("name","duedate");const s=i("div",["modal-buttons"]);[i("button",["create-task"],"Create"),i("button",["cancel"],"Cancel")].forEach(t=>s.appendChild(t)),[o,d,a,l,r,s].forEach(t=>n.appendChild(t)),e.appendChild(n),t.appendChild(e),document.body.appendChild(t)}else if("delete"===t){const t=i("div",["modal-container"]),e=i("div",["modal"]),n=i("form");n.setAttribute("action","javascript:void(0)");const o=i("div",["warning-container"]),d=i("div",["warning-icon"]);o.appendChild(d);const a=i("span",["warning-header"],"Are you sure?"),l=i("span",["warning-body"],"Do you really want to delete this record? This process cannot be undone."),r=i("div",["modal-buttons"]);[i("button",["delete"],"Delete"),i("button",["cancel"],"Cancel")].forEach(t=>r.appendChild(t)),[o,a,l,r].forEach(t=>n.appendChild(t)),e.appendChild(n),t.appendChild(e),document.body.appendChild(t)}};(()=>{((t,e)=>{const n=document.querySelector(".main-content"),o=i("div",["header-content"]);if("task"===t){const t=i("div",["backbtn"]),d=i("h1",["taskheader"],`${e}`),a=i("div",["newbutton"]);a.id="newTask",[t,d,a].forEach(t=>o.appendChild(t)),n.appendChild(o);const l=i("ul",["todolist"]);n.appendChild(l)}else if("list"===t){const t=i("h1",["header"],"All Lists"),e=i("div",["newbutton"]);e.id="newList",[t,e].forEach(t=>o.appendChild(t)),n.appendChild(o);const d=i("ul",["todolist"]);n.appendChild(d)}})("list");let t=[],e=0;(n=>{let i=new o(n,e++);t.push(i),d(i.title,i.id)})("test"),document.addEventListener("click",(function(t){const{target:e}=t;"newList"===e.id?(a("list"),addList("title")):"deletebtn"===e.className?a("delete"):"cancel"===e.className&&document.querySelector(".modal-container").remove()})),document.addEventListener("addList",(function(t){console.log(t.detail)}))})()}]);