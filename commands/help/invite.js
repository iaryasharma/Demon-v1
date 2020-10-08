const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=763854612561526834&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`ShaDoW Op`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}