const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`<a:mb:731368836846321694> SENPAI BOT  HELP MENU `)
      .setDescription(`
<a:arrowright:746687100178661396> __**MODERATION COMMANDS**__ 
\`addrole,removerole,cleaer[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`

<a:arrowright:746687100178661396> __**FUN COMMANDS**__ 
\`advice,suggest,ascii,cat,cry,dog,fact,hug,joke,kiss,kpop,math,meme,mw,neko,pat,punch,slap\`

<a:arrowright:746687100178661396> __**INFORMATION COMMANDS**__ 
\`avatar,botinfo,serverinfo,hastebin,imdb,membercount,ping,pokemon,servericon,,whois,userinfo\`

<a:arrowright:746687100178661396> __**MUSIC COMMANDS**__ 
\`play,search,skip,stop,pause,resume,nowplaying,queue,volume\`

<a:arrowright:746687100178661396> __**NSFW COMMANDS**__ 
\`nahi hai\`

<a:arrowright:746687100178661396> __**WELCOME COMMANDS**__ 
\`setwelcome,setmessage\`

<a:arrowright:746687100178661396> __**SPECIAL COMMANDS**__ 
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
