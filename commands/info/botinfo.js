const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE PARAS BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("<a:1_:729258591420153856>BOT NAME", `  SENPAI OP`)
      .addField(
        "<a:1_:729258591420153856>BOT DEVELOPER ",
        `
<a:bluetick:742575729438490625> <@745235956700807189>
<a:bluetick:742575729438490625> <@567704764813541376> `
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
 