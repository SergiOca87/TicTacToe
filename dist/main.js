!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./dist",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(e.i,o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i={};function l(e,t,n){for(var r=0;r<t.length;r++){var o={css:t[r][1],media:t[r][2],sourceMap:t[r][3]};i[e][r]?i[e][r](o):i[e].push(g(o,n))}}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,y=0;function g(e,t){var n,r,o;if(t.singleton){var a=y++;n=p||(p=c(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o()),e=n.base?e+n.base:e,t=t||[],i[e]||(i[e]=[]),l(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){i[e]||(i[e]=[]),l(e,t,n);for(var r=t.length;r<i[e].length;r++)i[e][r]();i[e].length=t.length,0===i[e].length&&delete i[e]}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{padding:2rem;background-color:#b7eaf2}.board{width:500px;height:500px;border:1px solid black;display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(3, 1fr);margin:0 auto}.board-tile{display:flex;justify-content:center;align-items:center;border:1px solid black;width:100%;height:100%;cursor:pointer;font-size:3rem}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var o=[].concat(e[r]);n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),t.push(o)}},t}},function(e,t,n){"use strict";n.r(t);n(0);var r,o,a,i,l,c,u,s=(r=["","","","","","","","",""],o=document.querySelector(".board"),i=(a=function(e,t,n,r){return{playerName:e,playerNumber:t,playerSign:n,playerArr:r}})("player1",1,"X",[]),l=a("player2",2,"O",[]),{gameboard:r,renderBoard:function(){var e=0,t=!0,n=!1,a=void 0;try{for(var i,l=r[Symbol.iterator]();!(t=(i=l.next()).done);t=!0){var c=i.value;o.insertAdjacentHTML("beforeend",'<div class="board-tile" data-num="'.concat(e,'">').concat(c,"</div>")),e++}}catch(e){n=!0,a=e}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}},domBoard:o,winningCombos:[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]],playerFactory:a,player1:i,player2:l}),d=(u=0,void(c=s).domBoard.addEventListener("click",(function(e){e.target.classList.contains("board-tile")&&0===u&&""===e.target.textContent?(e.target.textContent=c.player1.playerSign,c.gameboard[e.target.dataset.num]=c.player1.playerSign,c.player1.playerArr.push(parseFloat(e.target.dataset.num)),u=1,console.log(function(e){var t=function(e,t){return t.every((function(t){return e.includes(t)}))},n="",r=!0,o=!1,a=void 0;try{for(var i,l=c.winningCombos[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var u=i.value;e.length>2&&t(e,u)&&(n=t(e,u))}}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(c.player1.playerArr))):e.target.classList.contains("board-tile")&&1===u&&""===e.target.textContent&&(e.target.textContent=c.player2.playerSign,c.gameboard[e.target.dataset.num]=c.player2.playerSign,c.player2.playerArr.push(parseFloat(e.target.dataset.num)),u=0)})));console.log("test hello3"),s.renderBoard(),d()}]);