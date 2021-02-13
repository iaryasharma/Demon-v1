const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "addrole",
  aliases: ["role", "P!role"],
  category: "moderation",
  description: "Add role to any user",
  run: async (client, message, args) => {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("sorry you need permission to mute someone");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to mute");
    } 
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`<a:GC_wrong:810000635113635840>please mention user!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`<a:GC_wrong:810000635113635840>please mention role for add!`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      
      .setColor("RANDOM")
      .setDescription(`<a:GC_right:810000945562910761>changed role for ${target.user.username} added ${arole}`)
      
      await message.channel.send(embed)
      
      target.roles.add(arole)
    
  }
}
