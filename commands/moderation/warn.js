const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { prefix, owner } = require("../../config.json");

module.exports = {
  name: "warn",
  aliases: "warn",
  description: "Warn A User!",
  usage: "Warn <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`You Can't Warn Server Owner!`);
    
    if (Member.id === `${owner}`)
      return message.channel.send(`You Can't Warn Bot Owner!`);

    let Reason = args.slice(1).join(" ");

    client.db.add(`Warnings_${message.guild.id}_${Member.user.id}`, 1);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle(`Member Warned!`)
      .addField(`Moderator`, `${message.author.tag} <@${message.author.id}>`)
      .addField(`Warned Member`, `${Member.user.tag} <@${Member.user.id}>`)
      .addField(`Now Member Warnings`, Warnings)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
    

    message.channel.send(embed);

    //End
  }
};
