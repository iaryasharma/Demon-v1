const Discord = require("discord.js");
const { prefix, owner } = require("../../config.json");
module.exports = {
  name: "dm",
  description: "DM Mentioned User",
  async run(client, message, args) {
    if (message.author.id !== owner) return;
    const dmMsg = args.join(" ");
    const dm = new Discord.MessageEmbed()
      //   const dm = new
      //    const per =
      //    message.mentions.users.first() || client.users.cache.get(args[0]);
      //  if (per.id == "756052319417925633") return;
      .setColor("RANDOM")
      .setDescription(dmMsg)
      .setTimestamp();
    message.delete();

    try {
      message.mentions.users.first().send(dm);
    } catch {
      message.channel.send("Error Sending DM");
    }
  }
};
