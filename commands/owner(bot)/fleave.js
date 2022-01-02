const { MessageEmbed, TextChannel } = require("discord.js");
const { prefix, owner } = require("../../config.json");

module.exports = {
  name: "fleave",
  aliases: ["forceleave", "leaveguild", "removeguild", "leaveserver"],
  ownerOnly: true,
  group: "owner",
  description: "Force Demon to leave a server",
  parameters: ["server ID", "Reason"],
  get examples() {
    [this.name, ...this.aliases].map(x => x + " 12345678901234567890");
  },
  run: async (client, message, args, [id = "", ...reason]) => {
    if (message.author.id !== owner) return;

    if (!args[0]) return message.reply("Provide Id  First");

    const guild = client.guilds.cache.get(args[);

    if (!guild) {
      return message.channel.send(
        `\\❌ | ${message.author}, guild **${id}** does not exist on your cache`
      );
    }

    return guild.channels.cache
      .filter(
        c =>
          c instanceof TextChannel &&
          c
            .permissionsFor(client.user.me)
            .has(["VIEW_CHANNEL", "SEND_MESSAGES"])
      )
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setTitle(`👋 My developer has requested that I leave ${guild.name}!`)
          .setDescription(`Reason:\n${reason.join(" ") || "Unspecified"}`)
      )
      .then(() => guild.leave())
      .then(() =>
        message.channel.send(
          `\\✔️ Sucessfully left the guild **${guild.name}**`
        )
      )
      .catch(() =>
        message.channel.send(`\\❗ Could not perform the operation.`)
      );
  }
};
