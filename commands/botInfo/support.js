const discord = require("discord.js");
module.exports = {
  name: "support",
  category: "help",
  description: "SUPPORT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`SUPPORT SERVER`)
    .setDescription(`[CLICK HERE](https://discord.gg/pvXGuZz5Qa)`)
    .setColor("RANDOM")
    .setFooter(`Arya ØP`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    message.react("<a:GC_right:810000945562910761>");
  }
}