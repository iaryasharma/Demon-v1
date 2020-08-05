const discord = require("discord.js")

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "info",
  description: "Get dp of any user",
  run: async (client, message, args) => {
    
      let embed = new discord.MessageEmbed()
      
      if(!message.mentions.users.first()) {
        embed.setDescription(`[Download](${message.author.displayAvatarURL({ dynamic: true, size: 1024 })})`)
        embed.setImage(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        embed.setColor("RANDOM")
        message.channel.send(embed)
        
      } else {
        
      let target = message.mentions.users.first() || message.guild.members.cache.get(args[0]).target
      embed.setDescription(`[Download](${target.displayAvatarURL({ dynamic: true, size: 1024 })})`)
      embed.setImage(target.displayAvatarURL({ dynamic: true, size: 1024 }))
      embed.setColor("RANDOM")
      message.channel.send(embed)
        
      } 
  }
}