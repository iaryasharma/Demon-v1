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
\`advice,anime,ascii,cat,cry,dm,dog,fact,hug,joke,kiss,kpop,math,meme,mw,neko,pat,punch,say,slap,tell\`

__**INFORMATION COMMANDS**__ 💬
\`avatar,botinfo,serverinfo,hastebin,imdb,membercount,weather,ping,pokemon,servericon,,whois\`

__**HELP COMMANDS**__ ℹ️
\`announce,author,emoji,idp,invite,music,support\`

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
