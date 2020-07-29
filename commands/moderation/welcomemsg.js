  
const db = require("quick.db")
const { msg } = require("../../server.js")

module.exports = {
  name: "setwelcomemsg",
  aliases: ["setwmessage", "setwmsg", "setmessage"],
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have enough powers")
    }
    
      if(!args[0]) {
      return message.channel.send("Please give the message to set")
    }
    
    if(args[0]).length > 2000) {
      return mesaage.channle.send("Welcome message can't exceed 200")
    }
    
    db.set(`msg_${message.guild.id}`, args[0])
  await message.channel.send(`Welcome message seted to ${args[0]}`)
    
  }
}