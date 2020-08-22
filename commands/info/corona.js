const discord = require("discord.js")
const { NovelCovid} = require("novelcovid") 
const track = new NovelCovid();

module.exports = {
  name: "corona",
  category: "info",
  description: "Get the Stats of Corona",
  usage: "corona all or corona <country>",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) =>{
    if(!args.lenght){
      return message.channel.send("please give a country")
    }
    if(args.join(" ") === "all"){
      
    }
    
  }
}