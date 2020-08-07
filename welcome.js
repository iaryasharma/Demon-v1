const Discord = require("discord.js");
const client = new Discord.Client();
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
 
client.once("ready", () => {
  console.log("Ready!");
});
 
 
client.on('guildMemberAdd', async member => {

 
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 

 
client.login(process.env.token);