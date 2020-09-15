const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE SENPAI",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("<a:Arrow2:748013938314313808>BOT NAME", `SENPAI OP`)
      .addField(
        "<a:Arrow2:748013938314313808>BOT DEVELOPER ",
        `
 <@745235956700807189>
 
 <@712275566421606471>`
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
