const client = require("nekos.life");
const discord = require("discord.js");
const { Discord, richEmbed } = require("discord.js");

const neko = new client();

module.exports = {
  name: "fact",

  category: "fun",

  description: "sends a cool fact",

  usage: "[command]",

  run: async (client, message, args) => {
    //command

    async function work() {
      let owo = await neko.sfw.fact();
      const embed = new discord.MessageEmbed()
        .setTitle("Here's An Amazing Fact")
        .setDescription(owo.fact)
        .setColor("RED")
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(
          "Requested By :-" + message.author.tag,
          message.author.displayAvatarURL()
        )
        .setTimestamp((message.timestamp = Date.now()));
      
      message.channel.send(embed).catch(error => {
        console.error(error);
      });

      //message.delete();
    }

    work();
  }
};
