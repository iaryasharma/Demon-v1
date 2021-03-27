const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
  name:"clearnotes",
  run: async (client, message, args) => {
       let prefix = db.fetch(`prefixx_${message.guild.id}_${message.author.id}`)
  if(prefix == null) prefix = "!!"
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Manage Channels`
      );
  if(!message.content.startsWith(prefix)) return;
    let notes = db.fetch(`NOTESS_${message.author.id}`)
    if(notes == null) {
      message.reply("No notes to delete!")
    } else {
      message.reply("Cleared all your notes. ") && db.delete(`NOTESS_${message.author.id}`)
    }
  }
}