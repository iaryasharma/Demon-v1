//const { default_prefix, token } = require('../config.json');
const Discord = require('discord.js');
  module.exports = {
 name: 'setavatar',
    category: "owner",
  description: 'Sets new avatar for bot.',
    enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
    run: async  (client, message, args) => {
    if (message.author.id !== '730424922639302693') 
    return message.reply('You haven\'t enough permission.');
    const sayMessage = args.join(` `);
    client.user.setAvatar(sayMessage);
  const avatarEmbedOther = new Discord.RichEmbed()
  .setTitle(`New avatar`)
  .setURL(sayMessage)
  .setImage(sayMessage)
  message.channel.sendEmbed(avatarEmbedOther);
  return;
      
  //}

//exports.perms = {
  
},

//exports.help = {
 
usage: 'setavatar <new avatar url>' 
}
 //   }