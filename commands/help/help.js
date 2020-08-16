const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`PARAS BOT  HELP MENU`)
      .setDescription(`
> __**MODERATION COMMANDS**__
\`addrole,removerole,cleaer[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`
> __**FUN COMMANDS**__
\`advice,suggest,ascii,cat,cry,dog,fact,hug,joke,kiss,kpop,math,meme,mw,neko,pat,punch,slap\`
> __**INFORMATION COMMANDS**__
\`avatar,botinfo,serverinfo,hastebin,imdb,membercount,ping,pokemon,servericon,,whois,userinfo\`
> __
> __**NSFW COMMANDS**__
\`ass.bdsm,cum,doujin,femdom,hentai,maid,nmw,nsfw,orgy,panty\`
 
`)

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`PARAS DEVELOPER `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("🇮🇳");
  }
};
