const discord = require("discord.js");

module.exports = {
  name: "amongus",
  run: async (client, message, args) => {
    
    if(!args[0]) {
      return message.channel.send("🌏 Please Provide Server")
    }
    
    let pass = args.slice(1).join(" ")
    
    if(!pass) {
      return message.channel.send("🚩 Please Provide Game Code");
    }

  let embed = new discord.MessageEmbed()
  .addField("🌏 Server", "`" + args[0] + "`")
  .addField("🚩 Code", "`" + pass + "`")
  .setColor("RANDOM")
  message.channel.send(embed)

  message.delete()
    
  }
} 