const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "kill",
  category: "fun",
  description: "kill with gif",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    
    let data = await random.getAnimeImgURL("kill");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} killed ${target.user.username}`)
 
    message.channel.send(embed);
  }
};
