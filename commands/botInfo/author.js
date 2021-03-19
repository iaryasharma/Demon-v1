const discord = require("discord.js");
const { owner } = require("../../config.json");
module.exports = {
  name: "author",
  aliases: ["botdev", "dev"],
  category: "help",
  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:Demon_2:822458701037174834> ABOUT BOT DEVELOPER <:Demon_2:822458701037174834>`
      )
      .addField(
        "<:GC_Botdev:822463194286784562> TAG",
        "```" + client.users.cache.get(owner).tag + "```"
      )
      .addField("<:GC_Botdev:822463194286784562> Id", owner)
    
      .addField("<:GC_Botdev:822463194286784562> Mention", "<@730424922639302693>" )
    
      .addField("<:GC_Botdev:822463194286784562> About",  `_THE CREATOR OF THE BOT Is **Frag Nite(ARYA)** 
      HE IS A PROFSSIONAL SERVER DESIGNER,MANAGER_` )
      //   .addField(
      //      "<:marvel_discord:814792681157820416> Discord Server",
      //      "[SUPPORT SERVER](https://discord.gg/wXemeVm)"
      //    )
      .addField(
        "<:GC_insta:822462878849826856> Instagram",
        "[_hyper_arya_](https://www.instagram.com/_hyper_arya_/)"
      )
      .addField("<:GC_Js:822461547850629151> Code Library", "discord.js")
      //   .setThumbnail(
      //      "https://cdn.discordapp.com/avatars/672027578181353473/33f98d80d3825b6cdea4ffa66259bc5b.png?size=1024"
      //     )
      //     .setImage(
      //       "https://cdn.discordapp.com/attachments/799624878109622312/814801800531542036/20210226_154023.jpg"
      //     )
    
      .setColor("RED")
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.react("815466828028969000");

    message.channel.send(embed);
  }
};
