const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name:"raidmode",
  run: async (client, message, args) => {
    let prefix = db.fetch(`prefixx_${message.guild.id}_${message.author.id}`)
  if(prefix == null) prefix = "!!"
  if(!message.content.startsWith(prefix)) return;
    let user = message.author;
    if(!message.member.hasPermission('ADMINISTRATOR')) {
     return message.channel.send("Missing ADMINISTRATOR permission.")
   }
    let raidmode = db.fetch(`RAIDMODE_${message.guild.id}`)
    if(raidmode == null) raidmode = 'off'
    if(raidmode == 'off' && args.join(" ") == 'off') return message.reply("Raid mode already disabled!")
    if(raidmode == 'on' && args.join(" ") == 'on') return message.reply("Raid mode already enabled!")
    if(!args.join(" ") == 'off' && args.join(" ") == 'on') return message.reply("ERROR! Error is below!\n\nUnable to parse argument. Provide 'off' or 'on'")
    if(args.join(" ") == 'on') {
message.reply("Raid mode on. This server is now protected by Aeromancy. Chances of raid: " + Math.random() * 10)
      db.set(`RAIDMODE_${message.guild.id}`, "on")
    }
    if(args.join(" ") == 'off') {
message.reply("Raid mode off. Chances of a raid: " + Math.random() * 100 + 50)
      db.delete(`RAIDMODE_${message.guild.id}`)
    }
    
  }
}