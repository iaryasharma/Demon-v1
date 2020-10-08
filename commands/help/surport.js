const discord = require("discord.js");
module.exports = {
  name: "support",
  category: "help",
  description: "SUPPORT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`SUPPORT SERVER <a:Hype_180_b:763742611856031766>`)
    .setDescription(`[CLICK HERE](https://discord.gg/9MJdm24)`)
    .setColor("RANDOM")
    .setFooter(`ShaDoW Op`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}