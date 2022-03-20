const discord = require("discord.js"),
  db = require("quick.db");

module.exports = {
  name: "s-owner",
  category: "OWNERS",
  userPermissions: [],
  botPermissions: ["EMBED_LINKS"],

  run: async (client, message, args) => {
    message.delete({ timeout: 1000 })
    if (!client.config.owner.includes(message.author.id)) return;
    if (!args[0]) {
      return message.channel.send(
        new discord.MessageEmbed({
          color: client.embed.cf,
          description: "Target user not mentioned!",
        })
      );
    }
    const target =
      message.mentions.members.first() ||
      message.guild.members.guild.cache.get[0];

    if (!args[1]) return message.lineReply("Add or Remove")

    if (args[1] === "add") {
      db.set("secondaryowner" + target.id, true)
      return message.lineReply("Done").then(m => m.delete({ timeout: 3000 }))
    } else if (args[1] === 'remove') {
      db.delete("secondaryowner" + target.id)
      return message.lineReply("Done").then(m => m.delete({ timeout: 3000 }))
    }

  }
}