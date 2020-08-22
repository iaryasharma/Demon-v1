const discord = require("discord.js");

module.exports = {
  name: "author",
  category: "help",
  description: "KNOW ABOUT THE MAKER OF BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`ABOUT KANEKI`)
    .setDescription(`HI ＩＣＸ ॥乛KΛПΣKIᴰᴱᶻ ⏦#6063 IS THE CREATOR OF THE BOT 
HE IS A PROFSSIONAL SERVER DESIGNER, MANAGER, BOT DEVELOPER. MAINLY HE USES JS TO CREATE BOT IF YOU WANT TO CONTACT HIM SEND A FRIEND REQUEST ON ＩＣＸ ॥乛KΛПΣKIᴰᴱᶻ ⏦#6063`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY KANEKI`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
     
  
  } 
}    