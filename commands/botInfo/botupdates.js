const { MessageEmbed } = require('discord.js');
const discord = require("discord.js");

module.exports = {
  name: "botupdates",
  aliases: [""],
  category: "help",
  description: "BOT GET SOON UPDATES ",
    
  run: async (bot, message, args) => {
    let embed = new discord.MessageEmbed()
    .setTitle(
        `<:Demon_2:822458701037174834> LATEST BOT UPDATES <:Demon_2:822458701037174834>`)
    .addfield(
        "<:Demon_Arrow:828621113025363988> Update 1",
        `\`Due to Bot's Verification  it needs to be whitelisted in privilleged intents and this takes a lot of time due to which some of the bot commands are not working 
        they are:- 
        moderation commands: kick, ban, unban, mute, unmute, warn
        all welcome commands:- 
        Info commands:- status 
        
        these commands would be temporarily disabled until bot is whitelisted for intents\``)
    .addfield(
    "<:Demon_Arrow:828621113025363988> Update 2",
      `\`We have permanently removed music from our bot and noww we only have Gaara as our music bot\``)
    .addfield(
    "<:Demon_Arrow:828621113025363988> Invite Gaara", 
    "[Gaara](https://discord.com/oauth2/authorize?client_id=768058720621821954&permissions=70282305&scope=bot)")
    .addfield(
    "<:Demon_Arrow:828621113025363988> Update 3",
    `\`Added some featured image and info commands that can be seen by help2 command\``)
    
    .addfield("Sorry for the inconvinience caused we wil enable all the commands as the bot get's whitelisted for intents",
             
              "Regards by our developer team")
    .setThumbnail(
          `https://media.discordapp.net/attachments/770893036556779543/823087152568860672/FragNite_2.png?width=400&height=400`
        )
      .setColor("#7cfff5")
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.react("815466828028969000");
    message.react("<a:GC_right:810000945562910761>")
    message.channel.send(embed);   
  }
  
}