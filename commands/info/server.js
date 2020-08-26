const discord = require("discord.js");

module.exports = {
  name: "serverinfo",
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
<a:Arrow2:748013938314313808>**OWNER**
${message.guild.owner.user.tag}

<a:Arrow2:748013938314313808>**SERVER ID**
${message.guild.id}

<a:Arrow2:748013938314313808>**REGION**
${message.guild.region}

<a:Arrow2:748013938314313808>**TOTAL MEMBERS  **
${message.guild.memberCount}

<a:Arrow2:748013938314313808>**TOTAL CHANNELS **
 ${message.guild.channels.cache.size}

<a:Arrow2:748013938314313808>**TOTAL ROLES**
${message.guild.roles.cache.size}

<a:Arrow2:748013938314313808>**TOTAL EMOJI **
${message.guild.emojis.cache.size}

<a:Arrow2:748013938314313808>**SERVER CREATED AT**
${message.guild.createdAt}

<a:Arrow2:748013938314313808>**SERVER BOOST**
${message.guild.premiumSubscriptionCount} <a:mars_nitroCrystal:746676320049692692>

<a:Arrow2:748013938314313808>**BOOST LEVEL**
${boostlevel} <a:mars_nitroCrystal:746676320049692692>

<a:Arrow2:748013938314313808>**Security** 
${message.guild.verificationLevel}
`)
      .setThumbnail(message.guild.iconURL())
      .setImage(message.guild.iconURL({dynamic: true, size: 1024}))
      .setColor("RANDOM")
      .setFooter(message.guild)

    message.channel.send(embed);
  }
};