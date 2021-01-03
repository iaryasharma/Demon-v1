const discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: [""],
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT  HELP MENU `)
      .setDescription(
        `
__**MODERATION COMMANDS**__ 🔧
\`addrole,removerole,clear[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`

__**FUN COMMANDS**__ 🙃
\`advice,anime,asci,cat,cry,joke,kpop,math,meme,mw,slap,punch,cry\`

__**INFORMATION COMMANDS**__ 💬
\`avatar,botinfo,serverinfo,hastebin,imdb,membercount,weather,ping,pokemon,servericon,,whois,userinfo\`

__**NSFW COMMANDS**__ ❌
\`no nsfw in the bot\`

__**WELCOME COMMANDS**__ 🎉
\`setwelcome,setmessage\`

__**SPECIAL COMMANDS**__ 👑
\`giveaway,math,announce,emoji,weather \`

__**CORONA COMMANDS**__ ⚠️
\`corona all, corona<country>\`
 
If any contact is not working contact the bot owner
`
      )

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#35CB31")
      .setFooter(`HELP MENU `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("764200316156510218");
  }
};
