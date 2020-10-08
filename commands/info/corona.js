const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
  name: "corona",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please give the name of country")
    }
    
    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases
      
      let embed = new discord.MessageEmbed()
      .setTitle(`__Global Cases__`)
      .setColor("#ff2050")
      .setDescription(`<:coronavirus:746680804683546675>Sometimes cases number may differ from small amount.<:coronavirus:746680804683546675>`)
      .addField("Total Cases", corona.cases, true )
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
      
      
      
    } else {
      let corona = await track.countries(args.join(" ")) //change it to countries
      
      let embed = new discord.MessageEmbed()
      .setTitle(`__${corona.country}__`)
      .setColor("#ff2050")
      .setDescription(`Sometimes cases number may differ from small amount.`)
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
      
      
    }
    
    
  }
}