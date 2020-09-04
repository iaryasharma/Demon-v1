const superagent = require("snekfetch");
const Discord = require('discord.js')



module.exports = {
  name: "dog",
  category: "fun",
description: "Sends a random dog image",
usage: "[command]",
run: async (client, message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("<a:cooldoge:751281575198457866>")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`🤣WHAT A DOG🤣`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};