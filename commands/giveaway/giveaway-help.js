const discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
  name: "helpgiveaway",

  aliases: ["Ghelp", "Giveawayhelp"],

  category: "help",

  description: "How to use Giveaway Command",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:Demon_2:822458701037174834> GIVEAWAY HELP <:Demon_2:822458701037174834> `

      .addField(
        "<:Demon_Arrow:828621113025363988>  Giveaway Format",
        "`" + prefix + "giveaway <#channel> <time> <winners> <prize>` " + "It is the format to Start Giveaway"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988> Reroll Winner",
        "`" + prefix + "reroll <giveaway id>` To reroll The giveaway Winner"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  End Giveaway",
        "`" + prefix + "end <Giveawayid>` to end Giveaway before time"
      )
      .addField(
        "<:Demon_Image:828622138260979802> Image",
        "Below Is An Image For Better Understanding"
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
