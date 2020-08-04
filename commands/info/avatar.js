const discord = require("discord.js")

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "info",
  description: "Get dp of any user",
  run: async (client, message, args) => {
    
      let embed = new discord.MessageEmbed()
    
      let target = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author.id
      
      embed.setDescription(`[Download](${target.user.displayAvatarURL({ dynamic: true, size: 1024 })})`)
      embed.setImage(target.user.displayAvatarURL({ dynamic: true, size: 1024 }))
      embed.setColor("RANDOM")
      message.channel.send(embed)
      
  }
}