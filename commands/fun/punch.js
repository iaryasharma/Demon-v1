const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();
module.exports = {
  name: "punch",
  category: "fun",
  description: "Punch someone",

  run: async (client, message, args) => {
    let target = message.mentions.members.first();
    let data = await random.getAnimeImgURL("punch");
    let embed = new discord.MessageEmbed()
      .setTitle("Punch")
      .setImage(data)
      .setColor("#ff0000")
      .setDescription(`${message.author} punches ${target.user}`)
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
