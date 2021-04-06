const discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
  name: "helpwelcome",

  aliases: ["welcome"],

  category: "help",

  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:Demon_2:822458701037174834> WELCOME HELP <:Demon_2:822458701037174834> `
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  How It Works",
        `Our Bot has a different type of welcomer includes more than one commands :-`
      )
      .addField(
        "<:Demon_Arrow:828621113025363988> Welcome Example",
        "`" +
          prefix +
          "welcomeexample or " +
          prefix +
          "wexample` to see how the welcomer looks like"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Set Channel",
        "`" + prefix + "setwelcome <#channel> `" + "to set welcome channel"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Set Message",
        "`" +
          prefix +
          "setwmsg <msg>` to set welcome message make sure to use` " +
          prefix +
          "wexample` before setting up"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Set Image",
        "`" + prefix + "setwimg <url>` " + "to set welcome image (must use url)"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Reset Image",
        "`" + prefix + "rsetwelcomeimg` to reset welcome image"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Reset Message",
        "`" + prefix + "resetmsg` to reset welcome message"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Reset Message",
        "`" + prefix + "disable` to disable embed welcomer"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Miscellaneous Settings",
        "use {member} in your description for mentioning the new member"
      )
      .addField(
        "<:marvel_image:814798025066020884> Image",
        "Below Is An Image Of What Things Can Be Changed"
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/799624878109622312/814738236869836830/20210226_112833.jpg"
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
