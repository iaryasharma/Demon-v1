const discord = require("discord.js");
const { owner } = require("../../config.json");
module.exports = {
  name: "author",
  aliases: ["botdev", "dev"],
  category: "botinfo",
  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:Demon_2:822458701037174834> ABOUT DEVELOPER FRAG NITE <:Demon_2:822458701037174834>`
      )
      .addField(
        "<:Demon_BotDev:828622854589382656> TAG",
        "```" + client.users.cache.get(owner).tag + "```"
      )
      .addField("<:Demon_BotDev:828622854589382656> Id", owner)
    
      .addField("<:Demon_BotDev:828622854589382656> Mention", "<@919296005378281472>" )
    
      .addField("<:Demon_BotDev:828622854589382656> About",  `\`THE CREATOR OF THE BOT Is Frag Nite (ARYA) 
HE IS A PROFSSIONAL SERVER DESIGNER, MANAGER\`` )
      .addField(
        "<:Demon_Insta:829028303728803860> Instagram",
        "[Arya.s_007](https://www.instagram.com/arya.s_007/)"
      )
      .addField("<:Demon_Js:829028138045669403> Code Library", "discord.js")
      /*.setThumbnail(
          `https://media.discordapp.net/attachments/770893036556779543/823087152568860672/FragNite_2.png?width=400&height=400`
        )*/
      .setColor("#7cfff5")
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.react("815466828028969000");
    message.react("<a:GC_right:810000945562910761>")
    message.channel.send(embed);
  }
};
