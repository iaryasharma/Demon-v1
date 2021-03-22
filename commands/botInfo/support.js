const discord = require("discord.js");
module.exports = {
  name: "support",
  category: "botinfo",
  description: "SUPPORT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`SUPPORT SERVER`)
    .setDescription(`[SUPPORT SERVER](https://discord.gg/u9gfupyu2v)`)
    .setColor("#7cfff5")
    .setFooter("Requested By :-" + message.author.tag,
        message.author.displayAvatarURL())
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
    message.react("<a:GC_right:810000945562910761>");
  }
}