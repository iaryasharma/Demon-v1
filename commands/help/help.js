const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT WILL SOON NEW FEATURES `)
      .setDescription(`
        WELCOME TO PARAS BOT!
\```HELLO\```
 
`)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`PARAS DEVELOPER `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("🇮🇳");
  }
};
