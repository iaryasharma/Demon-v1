const Discord = require("discord.js");
const client = new Discord.Client();
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
 
 
client.on("ready", () => {
  console.log("ready to test")
})
 
client.on("message", async message => {
  if(message.content === "P!rank") {
    
   let data = await canva.rankcard(
     {
       link: "https://media.discordapp.net/attachments/722022250139615263/741230597866782740/background.jpg",
       name: message.author.username,
       discriminator: message.author.discriminator,
       level: 10,
       rank: 6,
       currentXP: 679,
       fullXP: 1000,
       avatar: message.author.displayAvatarURL({ format: "png"})
     
     })
 
 
    
     const attachment = new Discord.MessageAttachment(
     data,
      "welcome-image.png"
    );
 
    message.channel.send(
      ``,
      attachment
    );   
    
    
    
  }
})
 
client.login(process.env.token)