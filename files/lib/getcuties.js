const fetch = require("node-fetch");
const redgifs = require("./redgifs");
const discord = require("discord.js");

var loadCuties = function(message, subreddit, sorting) {
  if (sorting === "") {
    sorting = "sort=top&t=day";
  }
  fetch(subreddit + ".json?limit=100&" + sorting)
    .then(res => res.json())
    .then(json => json.data.children.map(v => v.data))
    .then(urls => postRandomCutie(urls, message))
    .catch(error => console.log(error.message));
};

function postRandomCutie(urls, message) {
  let randomNumber = Math.floor(Math.random() * urls.length - 1) + 1;
  if (urls[randomNumber].pinned === true) {
    randomNumber = Math.floor(Math.random() * urls.length - 1) + 1;
  }

  let myEmbed = new discord.MessageEmbed()
    .setTitle(urls[randomNumber].title)
    .setURL("https://reddit.com" + urls[randomNumber].permalink)
    .setImage(urls[randomNumber].url_overridden_by_dest)
    .setColor("RED")
    .setFooter(
      "Requested By :-" + message.author.tag,
      message.author.displayAvatarURL()
    )
    .setTimestamp((message.timestamp = Date.now()));

  if (myEmbed.image.url.includes("redgifs")) {
    let redgifLink = redgifs.getHotlink(myEmbed.image.url);
    redgifLink.then(redgifLink => {
      //myEmbed.image.url = redgifLink
      //message.channel.send({ embed: myEmbed });
      message.channel.send(redgifLink);
    });
  } else {
    if (myEmbed.image.url.includes(".gifv")) {
      myEmbed.image.url.replace(".gifv", ".mp4");
    }
    message.channel.send(myEmbed);
  }
}

module.exports.loadCuties = loadCuties;
