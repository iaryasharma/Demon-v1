const discord = require("discord.js");

module.exports = {
  name: "surport",
  category: "help",
  description: "server of SENPAI BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE IS THE INVITE LINK OF THE SENPAI BOT surport `)
    .setDescription(`[click me](https://discord.gg/tJkAk9p`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY KANEKI`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
     
  
  }
}      