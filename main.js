!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const r=(t,e=[],n)=>{const r=document.createElement(t);return e.forEach(t=>{r.classList.add(t)}),n&&(r.innerHTML=n),r},o=(t,e)=>{const n=document.querySelector(".main-content"),o=document.querySelector(".todolist"),i=r("li",["task"]),a=r("div",["radio"]),d=r("span",[],`${t}`),c=r("span",["date"],`Due ${e}`),l=r("div",["buttons"]);[r("div",["editbtn"]),r("div",["deletebtn"])].forEach(t=>l.appendChild(t)),[a,d,c,l].forEach(t=>i.appendChild(t)),o.appendChild(i),n.appendChild(o)};(t=>{const e=document.querySelector(".main-content"),n=r("div",["header-content"]);[r("div",["backbtn"]),r("h1",["taskheader"],`${t}`),r("div",["newtask"])].forEach(t=>n.appendChild(t)),e.appendChild(n);const o=r("ul",["todolist"]);e.appendChild(o)})("School"),o("Prog I Assignment","March 1st, 2020"),o("Psych Research Paper","March 5th, 2020"),o("Todo List Project","March 9th, 2020"),(()=>{const t=r("div",["newlist-container"]),e=r("div",["newlist-modal"]),n=r("form");n.setAttribute("action","javascript:void(0)");const o=r("span",["newlisthead"],"New List"),i=r("label",[],"Title");i.setAttribute("for","list-title");const a=r("input");a.setAttribute("type","text"),a.setAttribute("name","list-title"),a.setAttribute("placeholder","Work");const d=r("div",["modal-buttons"]);[r("button",["create-list"],"Create"),r("button",["cancel-list"],"Cancel")].forEach(t=>d.appendChild(t)),[o,i,a,d].forEach(t=>n.appendChild(t)),e.appendChild(n),t.appendChild(e),document.body.appendChild(t)})()}]);