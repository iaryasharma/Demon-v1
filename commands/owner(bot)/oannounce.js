const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')
const { prefix, owner } = require("../../config.json");

module.exports = {
name: "oannounce",
aliases: ["oannounce", "oa"],
category: "Utility",
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
  if (!client.config.owner.includes(message.author.id)) return;
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