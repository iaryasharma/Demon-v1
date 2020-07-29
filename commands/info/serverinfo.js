const { MessageEmbed } = require("discord.js");
const { utc } = require("moment");

module.exports = {
  name: "serverinfo",
  aliases: ["guildinfo"],
  category: "info",
  description: "Get info of the server",
  run: async (client, message, args) => {
    
    if (message.guild.premiumTier === "Level 0") message.guild.premiumTier = "<:Level0:734479590852132905> 0"
    if (message.guild.premiumTier === "Level 1") message.guild.premiumTier = "<:713173920475381830:734479841629437982> 1"
    if (message.guild.premiumTier === "Level 2") message.guild.premiumTier = "<:713173919418548257:734479792052764774> 2"
    if (message.guild.premiumTier === "Level 3") message.guild.premiumTier = "<:BoostLevel3:734479712029769849> 3"
    
    if (message.guild.region === "india") message.guild.region = "🇮🇳 India"
    if (message.guild.region === "brazil") message.guild.region = "🇧🇷 Brazil"
    if (message.guild.region === "japan") message.guild.region = "🇯🇵 Japan"
    if (message.guild.region === "russia") message.guild.region = "🇷🇺 Russia"
    if (message.guild.region === "europe") message.guild.region = "🇪🇺 Europe"
    if (message.guild.region === "sydney") message.guild.region = "🇦🇺 Sydney"
    if (message.guild.region === "singapore") message.guild.region = "🇸🇬 Singapore"
    if (message.guild.region === "hongkong") message.guild.region = "🇭🇰 Hong Kong"
    if (message.guild.region === "southafrica") message.guild.region = "🇿🇦 South Africa"
    if (message.guild.region === "us-east") message.guild.region = "🇺🇸 US East"
    if (message.guild.region === "us-west") message.guild.region = "🇺🇸 US West"
    if (message.guild.region === "us-central") message.guild.region = "🇺🇸US Central"
    if (message.guild.region === "us-south") message.guild.region = "🇺🇸 US South"
    
    let boostlevel = message.guild.premiumTier
    
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    let sicon = message.guild.iconURL({ dynamic: true, size: 2048 });

    let embed = new MessageEmbed()
      .setAuthor(message.guild, sicon)
      .setThumbnail(message.guild.iconURL({ dynamic: true, size: 2048 }))
      .setDescription(
        `
**❯ Server Name:** ${message.guild}

**❯ Server ID:** ${message.guild.id}

**❯ Owner:** ${message.guild.owner}

**❯ Region:** ${message.guild.region}

**❯ Creation Date:** ${utc(message.guild.createdTimestamp).format("ddd, Do MMMM YYYY")}

**❯ Server Boosts:** ${message.guild.premiumSubscriptionCount}

**❯ Boost Level:** ${boostlevel}

**❯ Member Count:** ${message.guild.memberCount}

**❯ Text Channels:** ${message.guild.channels.cache.filter(ch => ch.type === "text").size}

**❯ Voice Channels:** ${message.guild.channels.cache.filter(ch => ch.type === "voice").size}

**❯ Roles Count:** ${message.guild.roles.cache.size}

**❯ Emoji Count:** ${message.guild.emojis.cache.size}

**❯ Security:** ${message.guild.verificationLevel}`)
      .setColor("RANDOM")
      .setFooter(`Asked by ${message.author.username}`, aicon)
      .setTimestamp();

    message.channel.send(embed);
  }
};
