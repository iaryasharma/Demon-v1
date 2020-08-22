const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE SENPAI BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE IS THE INVITE LINK OF THE SENPAI BOT`)
    .setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=746361678840725644&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY KANEKI`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
     
  
  }
}     