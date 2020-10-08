const Discord = require("discord.js");

module.exports = {
  name: "tell",

  desciption: "say command",

  category: "fun",

  usage: "tell #channel <message>",

  async run(client, message, args) {
    const sayMessage = args.join(" ");

    const textChannel = message.mentions.channels.first();

    message.delete().catch(err => console.log(err));

    const embed = new Discord.MessageEmbed()

      .setColor("RANDOM")

      .setDescription(sayMessage)

      .setTimestamp();

    try {
      message.textMessage.channel.send(embed);
    } catch {
      message.reply("Something Went Wrong");
    }
  }
};
