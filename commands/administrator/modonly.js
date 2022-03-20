const { owner, prefix } = require("../../config.json"),
  discord = require("discord.js"),
  db = require("quick.db");

module.exports = {
  name: "modonly",
  aliases: ["modsonly", "mods-only"],
  desciption: "enables and disables modsonly for bot in your server",
  category: "MODERATION",
  usage: "modsonly <on | off>",
  userPermissions: ["ADMINISTRATOR"],
  botPermissions: ["EMBED_LINKS"],

  async run(client, message, args) {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Administrator`
      ); {
      if (
        message.member.roles.highest.position <
        message.guild.me.roles.highest.position
      )
        return message.reply(
          client.emoji.fail + "| Your Role isn't High Enough to change modsonly setting!"
        );
    }
    const modonly = db.get("modOnly" + message.guild.id);
    if (args[0] === "on") {
      if (modonly === true) {
        return message.lineReply(client.emoji.fail + "| Already On");
      }
      return (
        db.set("modOnly" + message.guild.id, true) &&
        message.lineReply(client.emoji.success + "| Mods Only Is Now On")
      );
    } else if (args[0] === "off") {
      if (modonly !== true) {
        return message.lineReply(client.emoji.fail + "| Already Off");
      }
      return (
        db.delete("modOnly" + message.guild.id) &&
        message.lineReply(client.emoji.success + "| Mods Only Is Now Off")
      );
    } else {
      return message.lineReply(
        new discord.MessageEmbed()
          .setColor(client.embed.cf)
          .setDescription(prefix + "modsonly <on | off >")
      );
    }
  }
};
