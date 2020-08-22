const discord = require("discord.js");

module.exports = {
  name: "idp",
  run: async (client, message, args) => {
    
    if(!args[0]) {
      return message.channel.send("<a:dance:734720052661846017>  Please give the Room ID")
    }
    
    let pass = args.slice(1).join(" ")
    
    if(!pass) {
      return message.channel.send("<a:dance:734720052661846017>  Please give the Room Password");
    }

  let embed = new discord.MessageEmbed()
  .addField("<a:dance:734720052661846017> Room ID", "`" + args[0] + "`")
  .addField("<a:dance:734720052661846017> Password", "`" + pass + "`")
  .setColor("RANDOM")
  message.channel.send(embed)

  message.delete()
    
  }
}