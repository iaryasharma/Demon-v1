const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "kill",
  category: "fun",
  description: "kill with gif",
  run: async (client, message, args) => {
    
    let data = await random.getAnimeImgURL("kill");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`Please talk with ${message.author.username} they are killing themselves`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};
