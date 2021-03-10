const fetch = require("node-fetch");

function getIndicesOf(searchStr, str, caseSensitive) {
  let searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  let startIndex = 0,
    index,
    indices = [];
  if (!caseSensitive) {
    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

const getHotlink = function(pageLink) {
  return new Promise(function(resolve, reject) {
    let webResult = fetch(pageLink, { method: "GET", headers: {} });
    webResult.then(webResult => {
      webResult = webResult.text();

      webResult.then(webResult => {
        let identifier = pageLink.split("/watch/")[1];

        let searchString =
          'name="twitter:image:src" content="https://thumbs2.redgifs.com/';
        let expectedString = (searchString + identifier).toUpperCase();

        let foundPositions = getIndicesOf(searchString, webResult);
        let foundLink = "";
        for (let i = 0; i < foundPositions.length; i++) {
          let position = foundPositions[i];
          let expectedEnd = position + expectedString.length;
          let possibleResult = webResult.slice(position, expectedEnd);
          if (possibleResult.toUpperCase() === expectedString) {
            foundLink = possibleResult;
            i = foundPositions.length;
          }
        }

        let foundIdentifier = foundLink.slice(searchString.length);
        resolve("https://thumbs2.redgifs.com/" + foundIdentifier + ".mp4");
      });
    });
  });
};

module.exports.getHotlink = getHotlink;
