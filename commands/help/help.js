const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`<a:mb:731368836846321694> SENPAI BOT  HELP MENU <a:mb:731368836846321694>`)
      .setDescription(`
> __**MODERATION COMMANDS**__
\`addrole,removerole,cleaer[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`

> __**FUN COMMANDS**__
\`advice,suggest,ascii,cat,cry,dog,fact,hug,joke,kiss,kpop,math,meme,mw,neko,pat,punch,slap\`

> __**INFORMATION COMMANDS**__
\`avatar,botinfo,serverinfo,hastebin,imdb,membercount,ping,pokemon,servericon,,whois,userinfo\`

> __**MUSIC COMMANDS**__
\`play,search,skip,stop,pause,resume,nowplaying,queue,volume\`

> __**NSFW COMMANDS**__
\`nahi hai\`

> __**WELCOME COMMANDS**__
\`setwelcome,setmessage\`

> __**SPECIAL COMMANDS**__
\`giveaway,math,announce,emoji,\`
 
NEW COMMAND SOON LIKE RANK SYSTEM,RADIO,GLOBAL CHAT,SOME COMMANDS ARE NOT WORKING 
`)

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#35CB31")
      .setFooter(`SENPAI BOT `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("🇮🇳");
  }
};
