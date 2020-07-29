const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, You do not have perms to ban someone`
      );
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `**${message.author}**, I am do not have perms to ban someone`
      );
    }

    const target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(
        `**${message.author}**, Please mention the person who you want to ban.`
      );
    }

    if(!target.banable) {
      return message.reply(`I cannot ban them as they have admin/mod powers.`)
    }

    if (!args[1]) {
      return message.channel.send(
        `**${message.author}**, Please Give Reason To ban Member`
      );
    }

    let reason = args.slice(1).join(" ");

    let embed1 = new discord.MessageEmbed()
      .setTitle(`Banned from ${message.guild}`)
      .setDescription(`Reason for which you were banned is \**${reason}\**`)
    
      .setColor("RANDOM")
      .setFooter(`Banned by ${message.author.username}`)
      .setTimestamp(message.timestamp = Date.now())

    target.send(embed1);

    let embed = new discord.MessageEmbed()
      .setDescription(`<a:verifynew:733244253215653931> | **Banned** **${target}** for \**${reason}\**`)
      .setColor("RANDOM")
      .setFooter(`Banned by ${message.author.username}`)
      .setTimestamp(message.timestamp = Date.now())

    await message.channel.send(embed);
    target.ban(args[1]);
  }
};
