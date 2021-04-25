const discord = require("discord.js");
const config = require("../../config.json");
const db = require("quick.db");

module.exports = {
  name: "snipe",
  description: "Snipe last deleted command",
  usage: " ",
  category: "info",
  accessableby: "everyone",
  aliases: [""],

  async run(client, message, args) {
    //      let prefix = await db.fetch(`prefix_${message.guild.id}`)
    //     if(prefix == null) {
    //     prefix = config.DEFAULT_PREFIX

    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.channel.send("there is no deleted messages");
    const embed = new discord.MessageEmbed()

      .setTitle("SNIPE")
      .addField(
        `Deleted Message:`,
        `
      ${msg.author} => ${msg.content}`
      )
      .setColor("RED")
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter(
        "Resuested By : " + message.author.username,
        message.author.displayAvatarURL()
      );

    if (msg.image) embed.setImage(msg.image);

    message.channel.send(embed);
  }
};
