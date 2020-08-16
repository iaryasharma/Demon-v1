const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "dashboard",
  description: "INVITE PARAS BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(
        `<a:cs:731484346124468236>__**PARAS BOT'S DASHBOARD**__<a:cs:731484346124468236>`
      )
      .setDescription(
        `
**MODERATION FEATURES**
\`warn,mute,softban,ban,kick,clear,lockdown,addrole,removerole\`

<a:cc_flame:731435785617670208>**UTILITY FEATURES**<a:cc_flame:731435785617670208>
\`avatar,serverinfo,botinfo,ping,stats,uptime,wiki,weather,date\`

<a:cc_flame:731435785617670208>**FUN FEATURES**<a:cc_flame:731435785617670208>
\`fact,meme,cat,dog,seal,pepe,alpaca,hug,highfive,holdhand,kill\`

<a:cc_flame:731435785617670208>**GAMING FEATURES **<a:cc_flame:731435785617670208>
\`8ball,complication,love,reverse,roast,rps,joke,cnjoke\`

<a:cc_flame:731435785617670208>**MUSIC FEATURES **<a:cc_flame:731435785617670208>
\`play,search,skip,stop,pause,resume,nowplaying,queue,volume\`

**SPECIAL FEATURES**
\`GIVEAWAY \`


`
      )
      .setColor("RANDOM")
      .setFooter(`DASHBOARD OF PARAS BOT`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};