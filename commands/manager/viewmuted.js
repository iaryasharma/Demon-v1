const discord = require('discord.js')
const db = require('quick.db')
module.exports = {
name: "mutedrole",
run: async (client, message, args) => {
       let prefix = db.fetch(`prefixx_${message.guild.id}_${message.author.id}`)
  if(prefix == null) prefix = "!!"
      if(!message.member.hasPermission('MANAGE_GUILD')) {
     return message.channel.send("Missing MANAGE_GUILD permission.")
   }
  let CurrentMutedRole = db.fetch(`Muted_${message.guild.id}`)
  if(CurrentMutedRole == null) {
   return message.reply("This server doesn't have a Muted role!")
  } else {
    message.reply(`This server has a Muted role. It is called: ${CurrentMutedRole}`)
  }
}
}