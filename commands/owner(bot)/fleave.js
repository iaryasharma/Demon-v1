const { MessageEmbed, TextChannel } = require("discord.js"),
  { prefix, owner } = require("../../config.json");

module.exports = {
  name: "fleave",
  aliases: ["forceleave", "leaveguild", "removeguild", "leaveserver"],
  group: "owner",
  description: "Force Demon to leave a server",

  run: async (client, message, args) => {
    if (message.author.id !== owner) return;
    if (!args[0]) return message.reply("Provide Id  First");
    const gg = client.guilds.cache.get(args[0]);

    if (!gg) {
      return message.channel.send(
        `\\❌ | ${message.author}, guild **${
          args[0]
        }** does not exist on your cache`
      );
    }
    const cha = gg.channels.cache.find(
      channel =>
        channel.type === "text" &&
        channel
          .permissionsFor(gg.me)
          .has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])
    );
    cha
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setTitle(`👋 My developer has requested that I leave ${gg.name}!`)
          .setDescription(
            `Reason:\n${args.slice(1).join(" ") || "No Reason Specified"}`
          )
      )
      .then(() => gg.leave())
      .then(() =>
        message.channel.send(`\\✔️ Sucessfully left the guild **${gg.name}**`)
      )
      .catch(() =>
        message.channel.send(`\\❗ Could not perform the operation.`)
      );
  }
};
