const discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
  name: "helpgiveaway",

  aliases: ["ghelp"],

  category: "help",

  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:Demon_2:822458701037174834> GIVEAWAY HELP <:Demon_2:822458701037174834> `
      )

      .addField(
        "<:Demon_Arrow:828621113025363988>  Giveaway Format",
        "`" + prefix + "giveaway <#channel> <time> <winners> <prize> `" + "Format of using Giveaway Command"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Reroll Giveaway Winner",
        "`" + prefix + "reroll <giveaway id>` " + "To reroll Giveaway Winner"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  End Giveaway",
        "`" + prefix + "rsetwelcomeimg` to reset welcome image"
      )
      .addField(
        "<:Demon_Image:828622138260979802> Image",
        "Below Is An Image for better understanding"
      )
      .setImage(
        "https://cdn.glitch.com/f6bb0bab-55e9-472b-a59a-465c25d21937%2FScreenshot_1.png?v=1617712920271"
      )
      .setColor("RED")
      .setThumbnail(client.user.avatarURL())
      .setFooter(
        "Requested By :-" + message.author.tag,

        message.author.displayAvatarURL()
      )

      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
