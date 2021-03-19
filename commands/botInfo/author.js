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
        `<:marvel_bot:814481094732415026> ABOUT BOT DEVELOPER <:marvel_bot:814481094732415026>`
      )
      .addField(
        "<:marvel_bot_dev:815466828028969000> TAG",
        "```" + client.users.cache.get(owner).tag + "```"
      )
      .addField("<:marvel_bot_dev:815466828028969000> Id", owner)
      //   .addField(
      //      "<:marvel_discord:814792681157820416> Discord Server",
      //      "[SUPPORT SERVER](https://discord.gg/wXemeVm)"
      //    )
      .addField(
        "<:marvel_instagram:814792972289310735> Instagram",
        "[_hyper_arya_(https://www.instagram.com/_hyper_arya_/)"
      )
      .addField("<:marvel_js:814806752184631317> Code Library", "discord.js")
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
