const { MessageEmbed } = require('discord.js');
const discord = require("discord.js");

module.exports = {
  name: "botupdates",
  aliases: [""],
  category: "help",
  description: "BOT GET SOON UPDATES ",
    
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
    .setTitle(
        `<:TDemon:829773215638749245>  LATEST BOT UPDATES <:TDemon:829773215638749245> `)
    .addField(
        "<:Demon_Arrow:828621113025363988> Update 1",
        `\`Due to Bot's Verification  it needs to be whitelisted in privilleged intents and this takes a lot of time due to which some of the bot commands are not working they are:- 

moderation commands: kick, ban, unban, mute, unmute, warn
all welcome commands
Info commands:- status
these commands would be temporarily disabled until bot is whitelisted for intents\``)
    .addField(
    "<:Demon_Arrow:828621113025363988> Update 2",
      `\`We have permanently removed music from our bot and noww we only have Gaara as our music bot\``)
    .addField(
    "<:Demon_Arrow:828621113025363988> Invite Gaara", 
    "[Gaara Invite](https://discord.com/oauth2/authorize?client_id=768058720621821954&permissions=70282305&scope=bot)")
    .addField(
    "<:Demon_Arrow:828621113025363988> Update 3",
    `\`Added some featured image and info commands that can be seen by help2 command\``)
    
    .addField("Sorry for the inconvinience caused we wil enable all the commands as the bot get's whitelisted for intents",
             
              "Regards by our developer team")
    .setThumbnail(client.user.displayAvatarURL())
      .setColor("#7cfff5")
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.react("815466828028969000");
    message.react(":GC_right:")
    message.channel.send(embed);   
  }
  
}