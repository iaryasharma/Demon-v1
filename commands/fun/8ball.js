const Discord = require("discord.js");

/*const embed = new Discord.RichEmbed();
embed.setColor(0x36393f)

 embed.setDescription(args.join(" "));


message.channel.send(embed);*/



module.exports.run = async (bot, message, args, ops) => {
      message.delete()
    var eightball = [ // sets the answers to an eightball
        "Yes",
        "No",
        "Maybe",
        "Not a chance",
        "Always",
        "Well See",
    ]
  
    let embed = new Discord.RichEmbed();
    embed.setColor(0x36393f)
  embed.setTitle(":8ball: " + args.join(" ") +" :8ball:")
     embed.setDescription(eightball[Math.floor(Math.random() * eightball.length).toString(16)]);

     let embed1 = new Discord.RichEmbed();
     embed1.setColor(0x36393f)
      embed1.setDescription("What's your question, young one?");
 
        if (args[1] != null) message.channel.send(embed); // if args[1], post random answer
        else message.channel.send(embed1); // if not, error
      
    
}
exports.help = {
    name: '8ball'
}