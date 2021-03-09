const { MessageEmbed } = require("discord.js");
const { prefix, owner } = require("../../config.json");

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention A User!`);
      
    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `Please Create Mute Role | Role Name : Muted`
      );
    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`You Can't Mute Owner Of Server`);
    if (Member.id === `${owner}`)
      return message.channel.send(`You Can't Mute Owner Of BOT!`);

    if (Member.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Muted!`);
    }

    let Reason = args.slice(1).join(" ");
var serverIcon = message.guild.iconURL();
    let Embed = new MessageEmbed()
      .setColor("#ff0000")
      .setTitle(`Member Muted!`)
      .addField(`Moderator`, `<@${message.author.id}>`)
      .addField(`Muted Member`, `<@${Member.user.id}>`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setThumbnail (serverIcon)
      .setFooter(`In server ${message.guild.name}`)
      .setTimestamp();

    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }

    //End
  }
};