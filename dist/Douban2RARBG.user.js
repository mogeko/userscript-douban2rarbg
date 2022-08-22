// ==UserScript==
// @name        Douban2RARBG
// @version     0.4.2
// @author      Mogeko
// @description Add direct links to RARBG & TPB from Douban.
// @supportURL  https://github.com/mogeko/userscript-douban2rarbg/issues
// @match       https://movie.douban.com/subject/*
// @namespace   https://mogeko.me
// @icon        https://img9.doubanio.com/favicon.ico
// @updateURL   https://cdn.jsdelivr.net/gh/mogeko/userscript-douban2rarbg@master/dist/Douban2RARBG.user.js
// @grant       none
// @license     MIT
// ==/UserScript==

(()=>{function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function r(r,e){return function(t){if(Array.isArray(t))return t}(r)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,a,i=[],o=!0,l=!1;try{for(e=e.call(t);!(o=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);o=!0);}catch(t){l=!0,a=t}finally{try{o||null==e.return||e.return()}finally{if(l)throw a}}return i}}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e={RARBG:"https://rarbg.to/torrents.php?imdb=%i","RARBG (Mirror)":"https://rarbgmirror.com/torrents.php?imdb=%i",TPB:"https://thepiratebay.org/search.php?q=%i"},n={opensubtitles:"https://www.opensubtitles.org/zh/search/imdbid-%x/sublanguageid-all/moviename-%i",SubHD:"https://subhd.tv/search/%d",字幕组:"https://zmk.pw/search?q=%i"};function a(t,e,n,a){var i=document.createElement("span"),o=document.createElement("span"),l=document.createElement("span");return o.className="pl",o.innerHTML=t,Object.entries(e).map((function(t){var e=r(t,2),i=e[0],o=e[1],l=document.createElement("a");return l.textContent=i,l.href=function(t){var r=[n,a,n.replace(/^tt/,"")],e=r[0],i=r[1],o=r[2];return t.replace("%i",e).replace("%d",i).replace("%x",o)}(o),l.target="_blank",l})).forEach((function(t,r,e){l.appendChild(t),r!==e.length-1&&(l.innerHTML+=" / ")})),i.appendChild(o),i.appendChild(l),i.innerHTML+="</br>",i}!function(){"use strict";var t=document.querySelector("#info"),r=null==t?void 0:t.innerHTML.match(/tt[0-9]{4,}/)[0],i=document.location.toString().split("/")[4];null==t||t.appendChild(a("资源: ",e,r)),null==t||t.appendChild(a("字幕: ",n,r,i))}()})();