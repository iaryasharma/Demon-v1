const discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
  name: "embed-help",

  aliases: ["embed"],

  category: "help",

  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:Demon_2:822458701037174834> Embed HELP <:Demon_2:822458701037174834> `
      )
      
      .addField(
        "<:Demon_Arrow:828621113025363988> Embed Setup",
        "`" +
          prefix +
          "embed-setup" `to start the setup process of Embed`
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Title of Embed",
        `Bot will post an message asking to provide title of embed `
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Colour Of Embed",
        `Bot will post an message asking to provide colour for the embed`
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Description Of Embed",
        `Bot will post an message asking to provide Description for the embed (provide in approx 800 words)`
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Footer Of Embed",
        `Bot will post an message asking to provide Footer for the embed`
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  Timestamps For Embed",
        `Bot will post an message asking if you want to add timestamp or not if Yes then type yes and if no then type No`
      )

      .addField(
        "<:Demon_Image:828622138260979802> Image",
        "Below is an gif for better understanding"
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/811083347618037781/861674485752135680/ezgif-1-5d48382c70c6.gif"
      )
      .setColor("#ff0073")
      .setThumbnail(client.user.avatarURL())
      .setFooter(
        "Requested By :-" + message.author.tag,

        message.author.displayAvatarURL()
      )

      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
