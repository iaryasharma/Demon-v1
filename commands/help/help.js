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
PARAS BOT'S PREFIX IS :- P!
<a:links:731369152404520996>[INVITE LINK](https://discord.com/api/oauth2/authorize?client_id=712302003665240106&permissions=8&scope=bot) || <a:links:731369152404520996>[SUPPORT SERVER](https://discord.gg/B7aEqBw)
<a:cc_flame:731435785617670208>**MODERATION FEATURES**<a:cc_flame:731435785617670208> 
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