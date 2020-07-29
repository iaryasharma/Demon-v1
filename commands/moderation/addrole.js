const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "addrole",
  aliases: ["arole", "+role"],
  category: "moderation",
  description: "Add role to any user",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`I am unable to find the user`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`I am unable to find the role`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      .setAuthor(target.user.username, ticon)
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(`${arole} role added to ${target}`)
      .setFooter(`Role added by ${message.author.username}`, aicon)
      .setTimestamp()
      
      await message.channel.send(embed)
      
      target.roles.add(arole)
    
  }
}