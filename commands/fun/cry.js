const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "cry",
  category: "fun",
  description: "Cry with gif",
  run: async (client, message, args) => {
    let data = await random.getAnimeImgURL("cry");

    let embed = new discord.MessageEmbed()
      .setImage(data)
      .setColor("#ff00c3")
      .setFooter(`Please someone talk to ${message.author.username} they are crying`);

    message.channel.send(embed);
  }
};
