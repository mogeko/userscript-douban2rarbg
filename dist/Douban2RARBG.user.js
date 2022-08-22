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

(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){return function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,a=[],o=!0,l=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(t){l=!0,i=t}finally{try{o||null==r.return||r.return()}finally{if(l)throw i}}return a}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r,n,i,a,o,l={RARBG:"https://rarbg.to/torrents.php?imdb=%i","RARBG (Mirror)":"https://rarbgmirror.com/torrents.php?imdb=%i",TPB:"https://thepiratebay.org/search.php?q=%i"},u={opensubtitles:"https://www.opensubtitles.org/zh/search/imdbid-%x/sublanguageid-all/moviename-%i",SubHD:"https://subhd.tv/search/%d",字幕组:"https://zmk.pw/search?q=%i"};function c(t,r,n,i){var a=document.createElement("span"),o=document.createElement("span"),l=document.createElement("span");return o.className="pl",o.innerHTML=t,Object.entries(r).map((function(t){var r=e(t,2),a=r[0],o=r[1],l=document.createElement("a");return l.textContent=a,l.href=function(t){var e=[n,i,null==n?void 0:n.replace(/^tt/,"")],r=e[0],a=void 0===r?"":r,o=e[1],l=void 0===o?"":o,u=e[2],c=void 0===u?"":u;return t.replace("%i",a).replace("%d",l).replace("%x",c)}(o),l.target="_blank",l})).forEach((function(t,e,r){l.appendChild(t),e!==r.length-1&&(l.innerHTML+=" / ")})),a.appendChild(o),a.appendChild(l),a.innerHTML+="</br>",a}i=document.querySelector("#info"),a=null===(n=null==i||null===(r=i.innerHTML)||void 0===r?void 0:r.match(/tt[0-9]{4,}/))||void 0===n?void 0:n[0],o=document.location.toString().split("/")[4],null==i||i.appendChild(c("资源: ",l,a)),null==i||i.appendChild(c("字幕: ",u,a,o))})();