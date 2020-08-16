const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "dashboard",
  description: "INVITE PARAS BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(
        `<a:cs:731484346124468236>__**PARAS BOT'S DASHBOARD**__<a:cs:731484346124468236>`
      )
      .setDescription(`\```HI\```
`)
      .setColor("RANDOM")
      .setFooter(`PARAS BOT`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};