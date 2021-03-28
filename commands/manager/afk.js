const { db } = require("quick.db");
const { Discord } = require("discord.js");
const { config } = require("../../config.json")
const { prefix } = require("../../config.json")
 
exports.run = function(client, message, args) {

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Specify a Reason to Be Afk. \ n \ n Example Usage: $ {prefix} afk <reason>`)
  if(!REASON) return message.channel.send(embed)
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_process _ $ (USER.id) `, Date.now ());
  const afk = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Başarıyla ${REASON} Sebebiyle \`Afk\` Moduna Başarıyla Girildi.`)
  message.channel.send(afk)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'afk komutu',
  usage: 'afk'
};