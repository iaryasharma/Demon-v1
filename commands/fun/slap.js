const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "slap",
  category: "fun",
  description: "Slap someone",
  run: async (client, message, args) => {
    
   
    
    let embed = new discord.MessageEmbed()
    .setImage()
    .setColor("RANDOM")
    .setFooter(`${message.author.username} slaps ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  } 
};