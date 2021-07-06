/*const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "warnings",
  aliases: ["warnings"],
  description: "Show User Warnings!",
  usage: "Warnings <Mention User>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );
    
    var serverIcon = message.guild.iconURL();
    let embed = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle(`Member Warnings!`)
      .setDescription(`${Member.user.username} Has ${Warnings || "0"} Warnings!`)
      .setThumbnail (serverIcon)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};*/