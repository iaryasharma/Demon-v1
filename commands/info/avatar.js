/*const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "info",
  description: "Get dp of any user",
  run: async (client, message, args) => {
    let target;

    if (message.mentions.users.first()) {
      target = message.mentions.users.first();
    } else if (args[0]) {
      target = message.guild.members.cache.get(args[0]).user;
    } else {
      target = message.author;
    }
    message.delete();

    let avatar = target.displayAvatarURL({ dynamic: true, size: 2048 });

    let embed = new discord.MessageEmbed();

    embed.setTitle(
      ` AVATAR of ${target.username}  `
    );
    embed.setDescription(`[Download](${avatar})`);
    embed.setImage(avatar);
    embed.setColor("#277ECD");
    embed.setFooter(`Requested by ${message.author.username}`);
    message.channel.send(embed);
  }
};*/
