const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT <a:Hype_180_b:763742611856031766>`)
    .setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=744196176504684554&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`ShaDoW Op`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}