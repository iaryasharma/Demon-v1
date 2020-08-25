const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE SENPAI",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("<a:1_:729258591420153856>BOT NAME", `SENPAI OP`)
      .addField(
        "<a:1_:729258591420153856>BOT DEVELOPER ",
        `
 <@745235956700807189> `
      )
      .addField(
        "<a:1_:729258591420153856>TOTAL SERVER",
        `${client.guilds.cache.size}`,
        true
      )
      .addField(
        "<a:1_:729258591420153856>TOTAL CHANNAL",
        `${client.channels.cache.size}`
      )
      .addField(
        "<a:1_:729258591420153856>TOTAL USER",
        `${client.users.cache.size}`,
        true
      )
      .addField("<a:1_:729258591420153856>BOT LIBRARY", `discord.js`)

      .setColor("RANDOM")
      .setFooter(`information about bot`);

    message.channel.send(embed);
  }
};
