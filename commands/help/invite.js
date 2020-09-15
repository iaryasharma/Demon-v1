const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE SENPAI",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`<a:Verified:748016470197534840>HERE INVITE LINK OF BOT<a:Verified:748016470197534840>`)
    .setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=746361678840725644&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`Senpai OP`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}