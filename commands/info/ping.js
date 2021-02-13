const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setDescription(`**<a:GC_arrowY:810015608011620402> Pong -  ${client.ws.ping}ms**`)
      .setColor("7cfff5")
      .setFooter(`Requested by ${message.author.username}`);

    message.channel.send(embed);
    message.react("<a:GC_right:810000945562910761>")
  }
};
