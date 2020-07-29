const { MessageEmbed, version: djsversion } = require("discord.js");
const { version } = require("../../package.json");
const { utc } = require("moment");
const os = require("os");
const ms = require("ms");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "Get the info of the bot",
  run: (client, message, args) => {
    
    let aicon = message.author.avatarURL({ size: 2048 });

    let avatar = client.user.avatarURL({ size: 2048 });

    let embed = new MessageEmbed()

      .setAuthor(client.user.tag, avatar)
      .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
      .setDescription(
        `
**❯ Name:** ${client.user}

**❯ Owner:** ʜყ℘г ❘❘ GØD ™ٴ#6177

**❯ Creation Date:** ${utc(client.user.createdTimestamp).format('ddd, Do MMMM YYYY')}

**❯ Commands:** ${client.commands.size} commands

**❯ Servers:** ${client.guilds.cache.size} servers

**❯ Users:** ${client.users.cache.size} users

**❯ Version:** v${version}

**❯ Platform:** ${process.platform}

**❯ Node.js:** ${process.version}

**❯ Discord.js:** v${djsversion}`
      )
      .setFooter(`Asked by ${message.author.username}`, aicon)
      .setTimestamp();

    message.channel.send(embed);
  }
};
