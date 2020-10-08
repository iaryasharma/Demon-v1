const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE SENPAI",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("BOT NAME", ``)
      .addField(
        "BOT DEVELOPER ",
        `

<@672027578181353473>`
      )
      .addField(
        "<a:Arrow2:748013938314313808>TOTAL SERVER",
        `${client.guilds.cache.size}`,
        true
      )
      .addField(
        "<a:Arrow2:748013938314313808>TOTAL CHANNAL",
        `${client.channels.cache.size}`
      )
      .addField(
        "<a:Arrow2:748013938314313808>TOTAL USER",
        `${client.users.cache.size}`,
        true
      )
      .addField("<a:Arrow2:748013938314313808>BOT LIBRARY", `discord.js`)

      .setColor("RANDOM")
      .setFooter(`information about bot`);

    message.channel.send(embed);
  }
};
