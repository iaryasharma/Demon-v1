  
const db = require("quick.db")
const { url } = require("../../server.js")

module.exports = {
  name: "setwelcomeimg",
  aliases: ["setwimage", "setwimg", "setwelcomeimage"],
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed or do not have permission to change prefix")
    }
    
    if(!args[0]) {
      return message.channel.send("Please give the prefix that you want to set")
    } 
    
    if(args[1]) {
      return message.channel.send("You can not set prefix a double argument")
    }
    
    if(args.join("") === url) {
      db.delete(`url_${message.guild.id}`)
     return await message.channel.send("Reseted Welcome Image ✅")
    }
    
    db.set(`url_${message.guild.id}`, args[0])
  await message.channel.send(`Welcome image seted to ${args[0]}`)
    
  }
}