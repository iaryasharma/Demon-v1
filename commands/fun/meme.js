const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
  //    config: {
  name: "meme",
  category: "fun",
  noalias: "No Aliases",
  usage: " ",
  description: "Sends an epic meme",
  //       accessableby: "everyone"
  //    },
  run: async (client, message, args) => {
    const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new MessageEmbed()
      .setColor("ff0000")
      .setImage(img)
      .setTitle("RANDOM MEME!")
      .setURL(`https://reddit.com/r/${random}`)
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
