const discord = require("discord.js");

module.exports = {
  name: "idp",
  run: async (client, message, args) => {
    
    if(!args[1]) {
      return message.channel.send("Please give the Room ID")
    }
    
    if(!args[2]) {
      return message.channel.send("Please give the Room Password");
    }

  let embed = new discord.MessageEmbed()
  .addFeild("Room ID", "`" + args[1] + "`")
  .addFeild("Password", "`" + args[2] + "`")
  .setColor("RANDOM")
  message.channel.send(embed)

  message.delete()
    
  }
};
 