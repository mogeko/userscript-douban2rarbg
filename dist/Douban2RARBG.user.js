// ==UserScript==
// @name        Douban2RARBG
// @version     0.4.3
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

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var RESOURCE_SITE_DATA = {
    RARBG: "https://rarbg.to/torrents.php?imdb=%i",
    "RARBG (Mirror)": "https://rarbgmirror.com/torrents.php?imdb=%i",
    TPB: "https://thepiratebay.org/search.php?q=%i"
};
var SUBTITLE_SITE_DATA = {
    opensubtitles: "https://www.opensubtitles.org/zh/search/imdbid-%x/sublanguageid-all/moviename-%i",
    SubHD: "https://subhd.tv/search/%d",
    字幕组: "https://zmk.pw/search?q=%i"
};
function handleMeta(keyName, siteData, imdb, doubanID) {
    var metaNode = document.createElement("span");
    var keyNode = document.createElement("span");
    var valueNode = document.createElement("span");
    keyNode.className = "pl";
    keyNode.innerHTML = keyName;
    var links = Object.entries(siteData).map(function(param) {
        var _param = _slicedToArray(param, 2), title = _param[0], url = _param[1];
        var handleURL = function(url) {
            var ref = [
                imdb,
                doubanID,
                imdb === null || imdb === void 0 ? void 0 : imdb.replace(/^tt/, ""), 
            ], tmp = ref[0], i = tmp === void 0 ? "" : tmp, tmp1 = ref[1], d = tmp1 === void 0 ? "" : tmp1, tmp2 = ref[2], x = tmp2 === void 0 ? "" : tmp2;
            return url.replace("%i", i).replace("%d", d).replace("%x", x);
        };
        var link = document.createElement("a");
        link.textContent = title;
        link.href = handleURL(url);
        link.target = "_blank";
        return link;
    });
    links.forEach(function(node, index, array) {
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
(function() {
    var ref, ref1;
    var mateNode = document.querySelector("#info");
    var imdb = (ref1 = mateNode === null || mateNode === void 0 ? void 0 : (ref = mateNode.innerHTML) === null || ref === void 0 ? void 0 : ref.match(/tt[0-9]{4,}/)) === null || ref1 === void 0 ? void 0 : ref1[0];
    var doubanID = document.location.toString().split("/")[4];
    mateNode === null || mateNode === void 0 ? void 0 : mateNode.appendChild(handleMeta("资源: ", RESOURCE_SITE_DATA, imdb));
    mateNode === null || mateNode === void 0 ? void 0 : mateNode.appendChild(handleMeta("字幕: ", SUBTITLE_SITE_DATA, imdb, doubanID));
})();


/******/ })()
;