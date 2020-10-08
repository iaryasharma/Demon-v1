const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE SENPAI",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("BOT NAME", `ACE TERMINATOR`)
      .addField(
        "BOT DEVELOPER ",
        `

<@672027578181353473>`
      )
      .addField("TOTAL SERVER", `${client.guilds.cache.size}`, true)
      .addField("TOTAL CHANNAL", `${client.channels.cache.size}`)
      .addField("TOTAL USER", `${client.users.cache.size}`, true)
      .addField("BOT LIBRARY", `discord.js`)

      .setColor("RANDOM")
      .setFooter(`BOT CREDIT :- Shadow & Venom`);

    message.channel.send(embed);
  }
};
