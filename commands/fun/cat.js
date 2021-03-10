const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
  name: "cat",
  category: "FUN",
description: "Sends a random image of a cat",
usage: "[command]",
run: async (client, message, args, level) => {
//command
superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Cute Kitty")
  .setImage(response.body.url)
  .setColor(`ff0000`)
  .setFooter(`Bot developed by - Mr. Wow`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
  message.react("<a:GC_right:810000945562910761>");
})
}
};