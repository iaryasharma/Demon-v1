module.exports = {
name:"poll",
  run:async (client, message, args) => {
    const db = require('quick.db')
  let prefix = db.fetch(`prefixx_${message.guild.id}_${message.author.id}`)
  if(prefix == null) prefix = "!!"
  if(!message.content.startsWith(prefix)) return;
    let NOPERMS = "Missing MANAGE_GUILD permission."
   if(!message.member.hasPermission('MANAGE_GUILD')) {
     return message.channel.send(NOPERMS)
   }
    let pollChannel = message.mentions.channels.first()
    let pollDescription = args.slice(1).join(' ');
    if(!pollChannel) return message.reply("Please provide a channel!")
    if(!pollDescription) return message.reply("Please provide the question!")
    const Discord = require('discord.js')
    let embedP = new Discord.RichEmbed()
    .setColor('RED')
    .setTitle("Poll")
    .addField("**Content**", pollDescription, true)
    
    message.channel.send(`Poll Created inside ${pollChannel}`)
    pollChannel.send("**NEW POLL!!!**")
    let msg = await pollChannel.send(embedP)
    await msg.react('👍')
    await msg.react('👎')
    }
}