const discord = require("discord.js");
const url = require("../../server.js");
const default_url = require("../../server.js");
const msg = require("../../server.js");
const default_msg = require("../../server.js");

module.exports = {
  name: "welcometest",
  aliases:["wtest"],
  category: "moderation",
  description: "Test the welcome",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true, size: 2048}))
    .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 2048}))
    .setColor("RANDOM")
    .setImage(url)
    .setDescription(msg)
    
    message.channel.send(embed)
    
  }
}