const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT  HELP MENU `)
      .setDescription(`
__**MODERATION COMMANDS**__ <a:Hype_180_b:763742611856031766>
\`addrole,removerole,clear[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`

__**FUN COMMANDS**__ <a:ATx104:755990338182840482>
\`advice,suggest,ascii,dog,fact,hug,joke,kpop,math,meme,mw,slap,punch,cry\`

__**INFORMATION COMMANDS**__ <a:loading:763744205733888001>
\`avatar,botinfo,serverinfo,hastebin,imdb,membercount,weather,ping,pokemon,servericon,,whois,userinfo\`

__**MUSIC COMMANDS**__ <a:wink_pikachu:763744284762439690>
\`play,search,skip,stop,pause,resume,nowplaying,queue,volume\`

__**NSFW COMMANDS**__ ❌
\`nahi hai\`

__**WELCOME COMMANDS**__ 💬
\`setwelcome,setmessage\`

__**SPECIAL COMMANDS**__ <a:reddot:763744173773553664>
\`giveaway,math,announce,emoji,weather \`

__**CORONA COMMANDS**__ ⚠️
\`corona all, corona<country>\`
 
If any contact is not working contact the bot owner
`)

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#35CB31")
      .setFooter(`HELP MENU `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("💬");
  }
};
