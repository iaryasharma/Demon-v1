const { MessageEmbed } = require("discord.js");
const Random = require("srod-v2");

module.exports = {
  //    config: {
  name: "joke",
  category: "fun",
  noalias: [""],
  description: "Sending random joke",
  usage: "[text]",
  //      accessableby: "everyone"
  //    },
  run: async (client, message, args) => {
    let Joke = await Random.GetJoke("ff0000");
    message.channel.send(Joke);
  }
};