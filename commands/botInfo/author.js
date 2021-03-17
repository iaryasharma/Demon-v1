const discord = require("discord.js");

module.exports = {
  name: "author",
  category: "help",
  description: "KNOW ABOUT THE CREATOR OF BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`ABOUT Arya ØP`)
      .setDescription(
        `_THE CREATOR OF THE BOT Is **Arya ØP** HE IS A PROFSSIONAL SERVER DESIGNER,MANAGER_`
      )
      .setColor("#7cfff5")
      .setFooter(`BOT MADE BY Arya ØP`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
    message.react("<a:GC_right:810000945562910761>");
  }
};
