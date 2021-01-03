const Discord = require("discord.js");
module.exports = {
  name: "tell",
  desciption: "say command",
  category: "fun",
  usage: "emb <message>",
  async run(client, message, args) {
    const sayMessage = args.join(" ");
    message.delete().catch(err => console.log(err));

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(sayMessage)
      .setTimestamp();
    try {
      message.channel.send(embed);
    } catch {
      message.reply("Something Went Wrong");
    }
  }
};
