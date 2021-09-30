// ==UserScript==
// @name         Douban2RARBG
// @namespace    https://mogeko.me
// @version      0.4.1
// @description  Add direct links to RARBG & TPB from Douban.
// @author       Mogeko
// @supportURL   https://github.com/Mogeko/userscript-douban2rarbg/issues
// @match        https://movie.douban.com/subject/*
// @icon         https://img9.doubanio.com/favicon.ico
// @updateURL    https://cdn.jsdelivr.net/gh/Mogeko/userscript-douban2rarbg@master/Douban2RARBG.user.js
// @grant        none
// @license      MIT
// ==/UserScript==

const RESOURCE_SITE_DATA = [
    ["RARBG", "https://rarbg.to/torrents.php?imdb=%i"],
    ["RARBG (Mirror)", "https://rarbgmirror.com/torrents.php?imdb=%i"],
    ["TPB", "https://thepiratebay.org/search.php?q=%i"]
];

const SUBTITLE_SITE_DATA = [
    ["opensubtitles", "https://www.opensubtitles.org/zh/search/imdbid-%x/sublanguageid-all/moviename-%i"],
    ["SubHD", "https://subhd.tv/search/%d"],
    ["字幕组", "https://zmk.pw/search?q=%i"]
];

const getItemNode = (l_Name, siteData, imdb, doubanID) => {
    const itemNode = document.createElement("span");
    const l_Node = document.createElement("span");
    const r_Node = document.createElement("span");

    l_Node.className = "pl";
    l_Node.innerHTML = l_Name;

    siteData.map(site => {
        const link = document.createElement("a");
        link.textContent = site[0];
        link.href = site[1]
            .replace("%i", imdb)
            .replace("%d", doubanID)
            .replace("%x", imdb.substring(2));
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
    itemNode.innerHTML += "</br>";

    return itemNode;
}

(function() {
    'use strict';
    const infoNode = document.querySelector("#info");

    const imdb = infoNode.innerHTML.match(/tt[0-9]{4,}/)[0];
    const doubanID = document.location.toString().split("/")[4];

    infoNode.appendChild(
        getItemNode("资源: ", RESOURCE_SITE_DATA, imdb)
    );
    infoNode.appendChild(
        getItemNode("字幕: ", SUBTITLE_SITE_DATA, imdb, doubanID)
    );
})();
