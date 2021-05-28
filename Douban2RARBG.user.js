// ==UserScript==
// @name         Douban2RARBG
// @namespace    https://mogeko.me
// @version      0.1
// @description  Add direct links to RARBG & TPB from Douban.
// @author       Mogeko
// @match        https://movie.douban.com/subject/*
// @icon         https://img9.doubanio.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/Mogeko/Douban2RARBG/master/IMDb2RARBG.meta.js
// @downloadURL  https://raw.githubusercontent.com/Mogeko/Douban2RARBG/master/IMDb2RARBG.user.js
// @grant        none
// ==/UserScript==

const SITE_DATA = [
    ["RARBG", "https://rarbgmirror.com/torrents.php?imdb="],
    ["TPB", "https://thepiratebay.org/search.php?q="]
];

(function() {
    'use strict';
    const infoNode = document.querySelector("#info");
    const itemNode = document.createElement("span");
    const l_Node = document.createElement("span");
    const r_Node = document.createElement("span");
    const br = document.createElement("br");

    const imdb = infoNode.innerHTML.match(/tt[0-9]{4,}/)[0];

    l_Node.className = "pl";
    l_Node.innerHTML = "资源: ";

    SITE_DATA.map(site => {
        const link = document.createElement("a");
        link.textContent = site[0];
        link.href = site[1] + imdb;
        link.target="_blank";
        return link;
    }).forEach((node, index, array) => {
        r_Node.appendChild(node);
        if (index !== array.length - 1) {
            r_Node.innerHTML += " / ";
        }
    });

    itemNode.appendChild(l_Node);
    itemNode.appendChild(r_Node);
    infoNode.appendChild(itemNode);
    infoNode.appendChild(br);
})();
