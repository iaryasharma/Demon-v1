const Discord = require("discord.js");
const { prefix } = require("../../config.json");
const { parse } = require("twemoji-parser");

//const { prefix } = require('../config.json');

module.exports = {
  name: "enlarge",

  aliases: ["viewemoji"],

  description: "Adds Given Emoji To Server",

  usage: `\`${prefix}enlarge <Emoji>\``,

  run: async (client, message, args) => {
     if (!message.guild.me.permissions.has("MANAGE_EMOJIS"))

    return message.channel.send(

      `I Don't Have Permission To Use This Command! Manage Emojis`

    );

    if (!message.member.permissions.has(`MANAGE_EMOJIS`))

    return message.channel.send(

    `You Don't Have Permission To Use This Command! Manage Emojis`

    );

    const emoji = args[0];

    if (!emoji) return message.channel.send(`Usage: ${this.usage}`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;

      //     const name = args.slice(1).join(" ");

      //     message.guild.emojis.create(

      //       `${Link}`,
      //       `${name || `${customemoji.name}`}`

      //     );

      const embed = new Discord.MessageEmbed()

        .setTitle(`Emoji`)

        .setColor(`GREEN`)

        .setDescription(`Name : ${customemoji.name}`)

        .setImage(Link)
        .setFooter(
          "Requested By : " + message.author.tag,

          message.author.displayAvatarURL()
        )

        .setTimestamp((message.timestamp = Date.now()));

      return message.channel.send(embed);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });

      if (!CheckEmoji[0])
        return message.channel.send(`Please Give Me A Valid Emoji!`);

      message.channel.send(
        `You Okay Using Default Emoji`
      );
    }
  }
};
