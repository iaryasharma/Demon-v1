const discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
  name: "embed",

  aliases: ["help-embed"],

  category: "help",

  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:Demon_2:822458701037174834> EMBED HELP <:Demon_2:822458701037174834> `
      )

      .addField(
        "<:Demon_Arrow:828621113025363988>  Giveaway Format",
        "`" + prefix + "embed-setup`" + "to start the setup process of Embed"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  TITLE OF EMBED",
        "Bot will post an message asking to provide title of embed"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  COLOUR OF EMBED",
        "Bot will post an message asking to provide colour for the embed"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  DESCRIPTION OF EMBED",
        "Bot will post an message asking to provide Description for the embed"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  FOOTER OF EMBED",
        "Bot will post an message asking to provide Footer for the embed"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  TIMESTAMPS FOR EMBED",
        "Bot will post an message asking if you want to add timestamp or not if Yes then type yes and if no then type No"
      )
      .addField(
        "<:Demon_Image:828622138260979802> Image",
        "Below Is An Image for better understanding"
      )
      .setImage(
        "https://cdn.glitch.com/44149d26-670c-4539-8879-adfa615654c1%2Fezgif-1-5d48382c70c6.gif?v=1625509895434"
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
