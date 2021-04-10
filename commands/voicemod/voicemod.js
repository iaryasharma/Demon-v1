const discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
  name: "voicemod",

  aliases: ["vhelp"],

  category: "help",

  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:Demon_2:822458701037174834> VOICEMOD HELP <:Demon_2:822458701037174834> `
      )

      .addField(
        "<:Demon_Arrow:828621113025363988>  VOICEMOVE",
        "`" + prefix + "voicemove`" + "To drag members from one voice channel to another"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  FORCE MUTE",
        "`" + prefix + "fmute <@user>` " + "To Force Mute(Server Mute) a member in voice channel"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  FORCE UNMUTE",
        "`" + prefix + "funmute <@user>` " + "To Force UnMute(Server UnMute) a member in voice channel"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  FORCE DEAFEN",
        "`" + prefix + "fdeafen <@user>` " + "To Force Deafen(Server Deafen) a member in voice channel"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  FORCE UNDEAFEN",
        "`" + prefix + "fundeafen <@user>` " + "To Force UnDeafen(Server Undeafen) a member in voice channel"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  MUTE ALL",
        "`" + prefix + "muteall` " + "To Force Mute(Server Mute) all member in voice channel"
      )
      .addField(
        "<:Demon_Arrow:828621113025363988>  UNMUTE ALL",
        "`" + prefix + "unmuteall` " + "To Force UnMute(Server UnMute) all member in voice channel"
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
