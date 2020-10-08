const Discord = require("discord.js");

module.exports = {
  name: "dm",
  description: "DM Mentioned User",
  execute(message, args) {
    const dmMsg = args.join(" ");
    message.delete().catch(err => console.log(err));

    const dm = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(dmMsg)
      .setTimestamp();
    try {
      message.mentions.users.first().send(dm);
    } catch {
      message.reply("Error Sending DM");
    }
  }
};
