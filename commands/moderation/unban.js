const discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "moderation",
  description: "Unban users",
  usage: "unban <@user> <reason>",
 run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have perms to unban someone`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, I am not having perms to unban someone`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Please mention the person who you want to unban.`)
    }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action : Unban")
    .setDescription(`Unbanned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Unbanned by ${message.author.tag}`);
    
    message.channel.send(embed)
    target.unban(args[1])
  }
}