const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`HERE INVITE LINK OF BOT `)
      .setDescription(
        `[INVITE BOT](https://discord.com/oauth2/authorize?client_id=795487199197528095&scope=bot&permissions=821159039)`
      )
      .setColor("#00ff00")
      .setFooter(`Arya ØP`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
