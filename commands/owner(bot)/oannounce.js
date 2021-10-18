const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "oannounce",
aliases: ["oannounce", "oa"],
category: "Utility",
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
  if (message.author.id !== '852612839629127711') return;
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
  let embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
  .setDescription(`${say}`)
  .setColor("#51ffae")
.setFooter(` ${message.guild}`)
.setTimestamp()
  message.channel.send(embed)
}
}  