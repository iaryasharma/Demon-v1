const discord = require("discord.js");
module.exports = {
  name: "support",
  category: "help",
  description: "SUPPORT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`SUPPORT SERVER`)
    .setDescription(`[CLICK HERE](https://discord.gg/Th6fPQu9Gj)`)
    .setColor("RANDOM")
    .setFooter(`Mr. Wow`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}