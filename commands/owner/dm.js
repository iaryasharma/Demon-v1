const Discord = require("discord.js");
const { prefix, owner } = require("../../config.json");
module.exports = {
  name: "dm",
  description: "DM Mentioned User",
  async run(client, message, args) {
    if (message.author.id !== owner) return;
    const dmMsg = args.join(" ");
    message.delete();

    try {
      message.mentions.users.first().send(dmMsg);
    } catch {
      message.channel.send("Error Sending DM");
    }
  }
};
