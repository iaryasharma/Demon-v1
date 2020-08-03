const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(2).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`You don't have enough powers to ban someone`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`I don't have powers to ban someone`)
    
    if(!args[1]) return message.reply(`Please mention someone to ban`)
    
    if(!target) return message.reply(`I can't find that member`)
    
    if(target.roles.highest.position >= message.author.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.reply(`They ave more power than you`)
    }
    
    

  }
};