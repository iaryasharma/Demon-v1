const db = require("quick.db");
const discord = require("discord.js");
module.exports = {
  name: "afk",
  category: "moderation",
  usage: "rignore @role",
  description: "Set the welcome channel",

  run: async (client, message, args) => {
    
    if (!args[0])
      return new discord.MessageEmbed({
          description: "Give a reason for your afk",
          color: "GOLD"
        })
    const afkmsg = args.slice(0).join(" ");
    db.set(`afkMentions_${message.guild.id + message.author.id}`, {
      difficulty: "Easy"
    });
    db.push(`afkMention_${message.guild.id + message.author.id}`, 0);
    db.set(`afkUser_${message.guild.id + message.author.id}`, true);
    db.set(`afkMsg_${message.guild.id + message.author.id}`, afkmsg);
    return new discord.MessageEmbed({
        description: "You are now afk\nReason : " + afkmsg,
        color: "GOLD"
      })

  }
};
