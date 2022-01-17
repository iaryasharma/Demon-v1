const Discord = require('discord.js');
const { owners } = require("../../config.json")
const { prefix, owner } = require("../../config.json");

module.exports = {
  name: "reboot",
    category: "owner",
  aliases: ["reb"],
    run: async (client, message, args) => {
        if (message.author.id !== owner) return;
      else {
    const msg = await message.channel.send("<a:GC_online1:810010059446812683> Loading...");
msg.edit("I rebooted Check the log to see if I\'m active! <a:GC_right:810000945562910761> ");
// you can do whatever you want with the msg variable; it returns the normal message object.
//if (message.content === 'fp$react-custom') {       //   if (message.content === '!react-custom')
         
          //  message.channel.send('I\'m rebooting. Check the log to see if I\'m active.');
  // message.channel.send(" <a:loading:781998413167460382> Loading...").then((sentMessage) => sentMessage.edit("I rebooted Check the log to see if I\'m active! <a:checkmarkanimated:781998352732258324> "))
   
 
            setTimeout(() => {
            
              process.exit();
            }, 250);
        }
    },
    aliases: ['restart'],
    description: 'Reboot the bot to update files',
}