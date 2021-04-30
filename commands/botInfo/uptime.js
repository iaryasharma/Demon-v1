const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "uptime",
    aliases: [],
    category: "Fun",
    group: "bot",
    description: "Shows Kei/s uptime",
    usage: "uptime",
    run: async (client, message, args) => {
        
    const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
    const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
    const embed = new MessageEmbed()
      .setTitle('Kei\'s Uptime')
      .setThumbnail('https://cdn.discordapp.com/avatars/795487199197528095/daacd6130496c158e861b4d6fa117a8f.png?size=4096')
      .setDescription(`\`\`\`\n${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``)
      .addField('Date Launched', date) 
      .setFooter(`Uptime | \©️${new Date().getFullYear()} Kei`)
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};