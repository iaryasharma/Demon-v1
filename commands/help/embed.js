const Discord = require("discord.js");

module.exports = {
  name: "emb",

  aliases: ["embed"],

  desciption: "say command",

  category: "embed",

  usage: "emb <message>",

  async run(client, message, args) {
    const sayMessage = args.join(" ");

    message.delete().catch(err => console.log(err));

    const embed = new Discord.MessageEmbed()

      .setColor("RED")

      .setDescription(sayMessage)

      .setTimestamp();

    try {
      message.channel.send(embed);
    } catch {
      message.reply("Something Went Wrong");
    }
  }
};
