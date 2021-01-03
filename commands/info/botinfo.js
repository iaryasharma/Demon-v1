const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE SENPAI",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("BOT NAME", `Bebo`)
      .addField(
        "BOT DEVELOPER ",
        `

<@761929458503909388>`
      )
      .addField("TOTAL SERVER", `${client.guilds.cache.size}`, true)
      .addField("TOTAL CHANNAL", `${client.channels.cache.size}`)
      .addField("TOTAL USER", `${client.users.cache.size}`, true)
      .addField("BOT LIBRARY", `discord.js`)

      .setColor("RANDOM")
      .setFooter(`BOT CREDIT :- Mr. Wow`);

    message.channel.send(embed);
  }
};
