// ==UserScript==
// @name         Douban2RARBG
// @namespace    https://mogeko.me
// @version      0.4.2
// @description  Add direct links to RARBG & TPB from Douban.
// @author       Mogeko
// @supportURL   https://github.com/Mogeko/userscript-douban2rarbg/issues
// @match        https://movie.douban.com/subject/*
// @icon         https://img9.doubanio.com/favicon.ico
// @updateURL    https://cdn.jsdelivr.net/gh/Mogeko/userscript-douban2rarbg@master/Douban2RARBG.user.js
// @grant        none
// @license      MIT
// ==/UserScript==

const RESOURCE_SITE_DATA = {
  RARBG: "https://rarbg.to/torrents.php?imdb=%i",
  "RARBG (Mirror)": "https://rarbgmirror.com/torrents.php?imdb=%i",
  TPB: "https://thepiratebay.org/search.php?q=%i",
};

const SUBTITLE_SITE_DATA = {
  opensubtitles:
    "https://www.opensubtitles.org/zh/search/imdbid-%x/sublanguageid-all/moviename-%i",
  SubHD: "https://subhd.tv/search/%d",
  字幕组: "https://zmk.pw/search?q=%i",
};

function handleMeta(l_Name, siteData, imdb, doubanID) {
  const metaNode = document.createElement("span");
  const keyNode = document.createElement("span");
  const valueNode = document.createElement("span");

  keyNode.className = "pl";
  keyNode.innerHTML = l_Name;

  const links = Object.entries(siteData).map(([title, url]) => {
    const handleURL = (url) => {
      const [i, d, x] = [imdb, doubanID, imdb.replace(/^tt/, "")];

      return url.replace("%i", i).replace("%d", d).replace("%x", x);
    };
    const link = document.createElement("a");

    link.textContent = title;
    link.href = handleURL(url);
    link.target = "_blank";

    return link;
  });

  links.forEach((node, index, array) => {
    valueNode.appendChild(node);
    if (index !== array.length - 1) {
      valueNode.innerHTML += " / ";
    }
  });

  metaNode.appendChild(keyNode);
  metaNode.appendChild(valueNode);
  metaNode.innerHTML += "</br>";

  return metaNode;
}

(function () {
  "use strict";
  const mateNode = document.querySelector("#info");

  const imdb = mateNode?.innerHTML.match(/tt[0-9]{4,}/)[0];
  const doubanID = document.location.toString().split("/")[4];

  mateNode?.appendChild(handleMeta("资源: ", RESOURCE_SITE_DATA, imdb));
  mateNode?.appendChild(
    handleMeta("字幕: ", SUBTITLE_SITE_DATA, imdb, doubanID)
  );
})();
