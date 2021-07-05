/*const db = require("quick.db");

const { url } = require("../../server.js");

module.exports = {
  name: "rsetwelcomemsg",

  aliases: ["rsetwmessage", "rsetwmsg", "resetwelcomemessage"],

  category: "moderation",

  usage: "prefix <new-prefix>",

  description: "Change the guild prefix",

  run: async (client, message, args) => {
    //PERMISSION

    if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("You don't enough powers");
    }

    db.delete(`msg_${message.guild.id}`);

    return await message.channel.send("Reseted Welcome Message ✅");
  }
};
*/