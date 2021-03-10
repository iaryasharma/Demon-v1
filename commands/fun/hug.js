const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "hug",
  //    noalias: [""],
  category: "emojis",
  description: "Shows random baka image",
  usage: "",

  //   accessableby: "everyone"

  async run(client, message, args) {
    let victim =
      message.mentions.users.first() ||
      (args.length > 0
        ? message.users.cache
            .filter(e =>
              e.username.toLowerCase().includes(args.join(" ").toLowerCase())
            )
            .first()
        : message.author) ||
      message.author;

    const { body } = await superagent.get("https://nekos.life/api/v2/img/hug");

    const embed = new MessageEmbed()

      .setColor("#6cffbd")
      .setTitle("HUG")
      .setDescription(`${message.author} hugs ${victim}`)
      .setImage(body.url)
      .setTimestamp()
      .setFooter(
        "Requested By :-" + message.author.tag,

        message.author.displayAvatarURL()
      )

      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
