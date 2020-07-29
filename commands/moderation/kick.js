const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author}**, You do not have enough permission to use this command`)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author}**, I do not have enough permission to use this command`)
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author}**, Please mention the person who you want to kick`)
    }
    
    if(!target.kickable) {
      return message.reply(`I cannot kick them as they have admin/mod powers.`)
    }
    
  if(!args[1]) {
    return message.channel.send(`**${message.author}**, Please Give Reason to kick`)
  }
    
    let reason = args.slice(1).join(" ")
    
    let embed1 = new discord.MessageEmbed()
    .setTitle(`Kicked from ${message.guild}`)
    .setDescription(`You were kicked from \`${message.guild}\` for \`${reason}\``)
    .setColor("RANDOM")
    .setFooter(`Kicked by ${message.author.username}`)
    .setTimestamp(message.timestamp = Date.now())
    
    target.send(embed1)
    
    let embed = new discord.MessageEmbed()
    .setDescription(`<a:verifynew:733244253215653931> | **Kicked** **${target}** for \`${reason}\``)
    .setColor("RANDOM")
    .setFooter(`Kicked by ${message.author.username}`)
    .setTimestamp(message.timestamp = Date.now())
    
    await message.channel.send(embed)
    target.kick(args[1]);
    
    
    
  }
}