const META_DATA = {
  资源: {
    RARBG: "https://rarbg.to/torrents.php?imdb=%i",
    "RARBG (Mirror)": "https://rarbgmirror.com/torrents.php?imdb=%i",
    TPB: "https://thepiratebay.org/search.php?q=%i",
  },
  字幕: {
    opensubtitles:
      "https://www.opensubtitles.org/zh/search/imdbid-%x/sublanguageid-all/moviename-%i",
    SubHD: "https://subhd.tv/search/%d",
    字幕组: "https://zmk.pw/search?q=%i",
  },
};

(function () {
  const metaRoot = document.querySelector("#info");
  const imdb = metaRoot?.innerHTML?.match(/tt[0-9]{4,}/)?.[0];
  const doubanID = document.location.toString().split("/")[4];

  if (!imdb || !doubanID) return;

  Object.entries(META_DATA).forEach(([key, sites]) => {
    const metaNode = document.createElement("span");
    const keyNode = document.createElement("span");
    const valueNode = document.createElement("span");
    const br = document.createElement("br");

    keyNode.textContent = `${key}: `;
    keyNode.setAttribute("class", "pl");

    const links = Object.entries(sites).map(([title, template]) => {
      const handleTemplate = (template: string) => {
        const [i, d, x] = [imdb, doubanID, imdb.replace(/^tt/, "")];

        return template.replace("%i", i).replace("%d", d).replace("%x", x);
      };
      const link = document.createElement("a");

      link.textContent = title;
      link.setAttribute("href", handleTemplate(template));
      link.setAttribute("target", "_blank");

      return link;
    });

    links.forEach((link, index, array) => {
      valueNode.appendChild(link);
      if (index !== array.length - 1) {
        valueNode.innerHTML += " / ";
      }
    });

    metaNode.appendChild(keyNode);
    metaNode.appendChild(valueNode);
    metaRoot.appendChild(metaNode);
    metaRoot.appendChild(br);
  });
})();

export {};
