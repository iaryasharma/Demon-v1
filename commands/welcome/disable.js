const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "disable",
  aliases: ["resetwelcome", "rsetwelcome"],
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    //  let channel = message.mentions.channels.first();
    //   if (!channel) {
    //      return message.channel.send("Please Mention the channel first");
    //    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have enough powers");
    }
    
    //Now we gonna use quick.db
    db.delete(`welchannel_${message.guild.id}`);
    message.channel.send(`Embed Welcomer Disabled`);
  }
};
