const { MessageEmbed } = require("discord.js");

module.exports = {
info:{
  name: "allbots", 
  aliases: ["listbots", "botlist"], 
  description: "lists all bots of a sever", 
  usage: "<>", 
}, 
  run: async function(client, message, args) {
    const botssize = message.guild.members.cache.filter(m=>m.user.bot).map(m=> `<@${m.id}> [ ${m.user.username} ]
    **ID :** \`${m.id}\``);
    const x = new MessageEmbed()
    .setColor('GREEN')
    .setDescription(`${botssize.join('\n \━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\ \n') //(`\n\n`)
      
    }`)
    .setFooter(`Total Bots : ${message.guild.members.cache.filter(member => member.user.bot).size}`)
    message.channel.send(x)
  }
}