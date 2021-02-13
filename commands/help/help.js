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
<a:GC_Mod:810120702966759454> __**MODERATION COMMANDS**__ 
\`addrole,removerole,emoji,whois,announce,clear[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`

<a:GC_Fun:810120996953522177> __**FUN COMMANDS**__ 
\`advice,anime,ascii,cat,cry,dog,fact,hug,joke,kiss,kpop,math,meme,mw,neko,pat,punch,say,slap,tell\`

<a:GC_welcome:810118157967949895> __**WELCOME COMMANDS**__  
\`setwelcome,setmessage\`

<a:GC_crown:810111773108862987> __**UTILITY COMMANDS**__ 
\`giveaway,math,weather,amongus,idp,avatar,serverinfo,hastebin,imdb,membercount,weather,ping,pokemon,servericon\`

<a:GC_Alert:810118383454257152> __**CORONA COMMANDS**__ 
\`corona all, corona<country>\`
 
<a:GC_Music:810003729553555486> __**MUSIC COMMANDS**__
\`music,play,leave,loop,lyrics,pause,resume,queue,skip,skipto <number>,volume <amount>\`

<a:GC_Discord:810133251767009320> __**BOT INFO**__
\`botinfo,support,invite,author\`
`
      )

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#7cfff5")
      .setFooter(`HELP MENU`)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("764200316156510218");
  }
};
