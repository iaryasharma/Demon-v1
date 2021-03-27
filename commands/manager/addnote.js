const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
  name:"addnote",
  run: async (client, message, args) => {
       let prefix = db.fetch(`prefixx_${message.guild.id}_${message.author.id}`)
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Manage Channels`
      );
  if(prefix == null) prefix = "!!"
  if(!message.content.startsWith(prefix)) return;
    let notes = db.fetch(`NOTES_${message.author.id}`)
    let added = args.join(" ")
    if(!added){
      message.reply("Provide a note.")
    } else {

   message.reply("Note added.") && db.push(`NOTESS_${message.author.id}`, added)
    }
  }
}