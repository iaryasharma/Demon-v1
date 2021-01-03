const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`HERE INVITE LINK OF BOT `)
      .setDescription(
        `[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=758368489978462&permissions=21474836398&scope=bot)`
      )
      .setColor("#00ff00")
      .setFooter(`ARYA OP`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
