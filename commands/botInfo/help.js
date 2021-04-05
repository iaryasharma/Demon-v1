const discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: [""],
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`<:Demon_2:822458701037174834> BOT  HELP MENU <:Demon_2:822458701037174834>`)
      .setDescription( `
<:Demon_Moderation:828621978558529586> __**MODERATION COMMANDS**__ 
\`addrole(give role to member), removerole(remove role from member), createrole(crole), createchannel(cchannel), addnote<note>, notes, clearnotes, addemoji, enlarge, whois, say, announce, clear(purge), ban, kick, voicekick, mute, unmute, slowmode, warn, warnings\`

<:Demon_Admin:828622876789702656> __**ADMINISTRATOR COMMANDS**__
\`mmode<on/off>, Privatechannel<channel name> \`

<:Demon_Manager:828622080621805578> __**MANAGER COMMANDS**__
\`hide<channel name>, unhide<channel name>, lock<channel name>, unlock<channel name> \`

<:Demon_Fun:828621911701323816> __**FUN COMMANDS**__ 
\`advice, anime, ascii, cat, cry, dog, fact, hug, joke, kiss, dicksize(pp), howgay, meme, pat, punch, slap\`

<:Demon_Welcome:828622867796328470> __**WELCOME COMMANDS**__  
\`setwelcome <#channel>, setwmessage, rsetwmessage(resets welcome message), wexample(welcome example)\`

<:Demon_Image:828622138260979802> __**UTILITY COMMANDS**__ 
\`giveaway, math, weather, amongus, idp, avatar, serverinfo, imdb, membercount, pokemon, servericon\`

<:Demon_Others:828622145483178034> __**CORONA COMMANDS**__ 
\`corona all, corona<country>\`
 
<:Demon_Music1:828621262627799060> __**MUSIC COMMANDS**__
\`music(for all music commands), play, leave, loop, lyrics, pause, resume, queue, skip, skipto <number>, volume <amount>\`

<:Demon_Discord:828622083675914261> __**BOT INFO**__
\`botinfo,support,invite,author,ping\`
`)
    
 .addField(
        "<:Demon_2:822458701037174834> Dashboard",
        "[Dashboard](https://demon-dashboard.glitch.me)")
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#ff0000")
      .setFooter(`HELP MENU`)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("<a:GC_right:810000945562910761>");
  }
};
