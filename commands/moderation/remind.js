const ms = require("ms");
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, ops) => {

 message.delete()
 //----------------------
 let time = new Discord.RichEmbed();
 time.setColor(0x36393f)
 time.setDescription('When shall I remind you?');
 //----------------------
 let noreminder = new Discord.RichEmbed();
 noreminder.setColor(0x36393f)
 noreminder.setDescription("What shall I remind you about?");
 //----------------------
 let remind = new Discord.RichEmbed();
 remind.setColor(0x36393f)
 remind.setDescription(`I will remind you in ${reminderTime}`);
//----------------------
  let whoban = new Discord.RichEmbed();
 whoban.setColor(0x36393f)
 whoban.setDescription(`Your reminder that you set for ${reminderTime} went off.\n"${reminder}"`);
 
    let reminderTime = args[0];
    if (!reminderTime) return message.channel.send(time);

    let reminder = args.slice(1).join(" ");
    if (!reminder) return message.channel.send(noreminder)

  

    message.channel.send(remind);


    setTimeout(function() {

        message.member.send(whoban);
    }, ms(reminderTime));

}

exports.help = {
    name: 'remind',
    description: 'Reminds desired player',
    usage: 'rremind',
    inHelp: 'yes'
  };
  
  exports.conf = {
    aliases: []
  };
  module.exports.help = {
    name: "remind"
  }