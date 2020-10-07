const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT  HELP MENU `)
      .setDescription(`
__**MODERATION COMMANDS**__ 
\`addrole,removerole,clear[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`

__**FUN COMMANDS**__ 
\`advice,suggest,ascii,dog,fact,hug,joke,kpop,math,meme,mw,say,slap,punch,cry\`

__**INFORMATION COMMANDS**__
\`avatar,botinfo,serverinfo,hastebin,imdb,membercount,weather,ping,pokemon,servericon,,whois,userinfo\`

__**MUSIC COMMANDS**__ 
\`play,search,skip,stop,pause,resume,nowplaying,queue,volume\`

__**NSFW COMMANDS**__
\`nahi hai\`

__**WELCOME COMMANDS**__ 
\`setwelcome,setmessage\`

__**SPECIAL COMMANDS**__ 
\`giveaway,math,announce,emoji,weather \`

__**CORONA COMMANDS**__
\`corona all, corona<country>\`
 
If any contact is not working contact the bot owner
`)

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#35CB31")
      .setFooter(`HELP MENU `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("🇮🇳");
  }
};
