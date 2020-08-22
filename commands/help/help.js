const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`SENPAI HELP MENU`)
      .setDescription(`
> __**MODERATION COMMANDS**__
\`addrole,removerole,clear[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`
> __**FUN COMMANDS**__
\`advice,suggest,ascii,cat,cry,dog,fact,hug,joke,kiss,kpop,math,meme,mw,neko,pat,punch,slap\`
> __**INFORMATION COMMANDS**__
\`avatar,botinfo,serverinfo,hastebin,imdb,author,membercount,ping,pokemon,servericon,,whois,userinfo\`
> __**MUSIC COMMANDS**__
\`play,search,skip,stop,pause,resume,nowplaying,queue,volume\`
> __**NSFW COMMANDS**__
\`JYADA CHARVI CHADI HAI\`
> __**WELCOME COMMANDS**__
\`setwelcome,setmessage\`
> __**SPECIAL COMMANDS**__
\`giveaway,math,announce,emoji,\`
 
NEW COMMAND SOON LIKE RANK SYSTEM,RADIO,GLOBAL CHAT
`)

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#35CB31")
      .setFooter(`SENPAI BOT `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("🇮🇳");
  }
};
