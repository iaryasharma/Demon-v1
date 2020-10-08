const discord = require("discord.js");

module.exports = {
  name: "author",
  category: "help",
  description: "KNOW ABOUT THE MAKER OF BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`ABOUT SHADOW`)
    .setDescription(``THE CREATOR OF THE BOT Is ShaDoW
HE IS A PROFSSIONAL SERVER DESIGNER, MANAGER, BOT DEVELOPER. MAINLY HE USES JS TO CREATE BOT``)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY ShaDoW & Venom`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
     
  
  } 
}    