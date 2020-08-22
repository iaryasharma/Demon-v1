const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`PARAS BOT  HELP MENU`)
      .setDescription(`
<a:drl:730449009902223402> __**MODERATION COMMANDS**__<a:drl:730449009902223402>
\`addrole,removerole,cleaer[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`
                                                    <a:drl:730449009902223402> __**FUN COMMANDS**__<a:drl:730449009902223402>
                                                                      \`advice,suggest,ascii,cat,cry,dog,fact,hug,joke,kiss,kpop,math,meme,mw,neko,pat,punch,slap\`
<a:drl:730449009902223402> __**INFORMATION COMMANDS**__<a:drl:730449009902223402>
\`avatar,botinfo,serverinfo,hastebin,imdb,membercount,ping,pokemon,servericon,,whois,userinfo\`
> __**MUSIC COMMANDS**__
\`play,search,skip,stop,pause,resume,nowplaying,queue,volume\`

> __**WELCOME COMMANDS**__
\`setwelcome,setmessage\`
> __**SPECIAL COMMANDS**__
\`giveaway,math,announce,emoji,\`
 
NEW COMMAND SOON LIKE RANK SYSTEM,RADIO,GLOBAL CHAT
`)

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#35CB31")
      .setFooter(`PARAS BOT `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("🇮🇳");
  }
};
