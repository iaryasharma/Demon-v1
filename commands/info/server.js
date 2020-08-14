const discord = require("discord.js");

module.exports = {
  name: "s",
  category: "info",
  description: "Get the info of any server",
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
    
    let embed = new discord.MessageEmbed()
      .setTitle(message.guild)
      .setDescription(
        `
<a:1_:729258591420153856>**OWNER**
${message.guild.owner.user.tag}

<a:1_:729258591420153856>**SERVER ID**
${message.guild.id}

<a:1_:729258591420153856>**REGION**
${message.guild.region}

<a:1_:729258591420153856>**TOTAL MEMBERS  **
${message.guild.memberCount}

<a:1_:729258591420153856>**TOTAL CHANNELS **
${message.guild.channels.cache.size}

<a:1_:729258591420153856>**TOTAL ROLES**
${message.guild.roles.cache.size}

<a:1_:729258591420153856>**TOTAL EMOJI **
${message.guild.emojis.cache.size}

<a:1_:729258591420153856>**SERVER CREATED AT**
${message.guild.createdAt}

<a:1_:729258591420153856>**SERVER BOOST**
${message.guild.premiumSubscriptionCount} <:nitroboost:743905977996410901>

<a:1_:729258591420153856>**BOOST LEVEL**
${boostlevel} <:boost:743907434770202656>

<a:1_:729258591420153856>**Security** 
${message.guild.verificationLevel}
`)
      .setThumbnail(message.guild.iconURL())
      .setImage(message.guild.iconURL({dynamic: true, size: 1024}))
      .setColor("RANDOM")
      .setFooter(message.guild)

    message.channel.send(embed);
  }
};