const discord = require("discord.js");

module.exports = {
  name: "author",
  category: "help",
  description: "KNOW ABOUT THE CREATOR OF BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`ABOUT ARYA`)
      .setDescription(
        `_THE CREATOR OF THE BOT Is **ARYA**
HE IS A PROFSSIONAL SERVER DESIGNER,
MANAGER_`
      )
      .setColor("RANDOM")
      .setFooter(`BOT MADE BY ARYA`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
