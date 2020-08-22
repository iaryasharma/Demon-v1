const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "ABOUT BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("BOT NAME", `SENPAI OP#1758
TOKEN`)
      .addField(
        "BOT DEVELOPERS ",
        `
 <@745235956700807189>
 <@567704764813541376> `
      )
      .addField(
        "TOTAL SERVER",
        `${client.guilds.cache.size}`,
        true
      )
      .addField(
        "TOTAL CHANNEL",
        `${client.channels.cache.size}`
      )
      .addField(
        "TOTAL USER",
        `${client.users.cache.size}`,
        true
      )
      .addField("BOT LIBRARY", `discord.js`)

      .setColor("RANDOM")
      .setFooter(`information about bot`);

    message.channel.send(embed);
  }
};
