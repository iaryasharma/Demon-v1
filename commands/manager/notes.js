const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
  name:"notes",
  run: async (client, message, args) => {
       let prefix = db.fetch(`prefixx_${message.guild.id}_${message.author.id}`)
  if(prefix == null) prefix = "!!"
  if(!message.content.startsWith(prefix)) return;
    let notes = db.fetch(`NOTESS_${message.author.id}`)
    let added = args.join(" ")
    if(notes == null){
      message.reply("No notes.")
    } else {
  let embed = new Discord.MessageEmbed()
   .setTitle("Your Notes")
   .addField("**NOTES**", notes, true)
    message.reply(embed)
    }
  }
}