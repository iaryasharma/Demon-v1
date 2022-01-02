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

    const guild = client.guilds.cache.get(args[0]);

    if (!guild) {
      return message.channel.send(
        `\\❌ | ${message.author}, guild **${
          args[0]
        }** does not exist on your cache`
      );
    }
    const channel = guild.channels.cache.find(
      channel =>
        channel.type === "text" &&
        channel
          .permissionsFor(guild.me)
          .has(["VIEW_CHANNEL", "SEND_MESSAGES"])

          .send(
            new MessageEmbed()
              .setColor("RED")
              .setTitle(
                `👋 My developer has requested that I leave ${guild.name}!`
              )
              .setDescription(
                `Reason:\n${args.slice(1).join

|| "No Reason Specified"}`
              )
          )
          .then(() => guild.leave())
          .then(() =>
            message.channel.send(
              `\\✔️ Sucessfully left the guild **${guild.name}**`
            )
          )
          .catch(() =>
            message.channel.send(`\\❗ Could not perform the operation.`)
          )
    );
  }
};
