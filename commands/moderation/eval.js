const Discord = require('discord.js');

module.exports = {

  name: "eval",

  category: "moderation",

  discription: "code evaluation command",

  usage: "<prefix>eval code",

  run: async (client, message, args) => {   

  let embed = new Discord.MessageEmbed()

    .setColor(0x00ffff);

  

  let owners = process.env.OWNER.split(',');

  

  if (!owners.includes(message.author.id))  {

    embed

      .setTitle("Permission Denied")

      .setDescription("You do not have permission to use this command. It's for owners only.");

    

    return message.channel.send(embed);

  }

  

  let code = args.join(" ");

      

  async function evaluate(code) {

  	try { 		  const evaled = eval(code);

    	const clean = await client.clean(evaled);

    	embed

        .setTitle("Output")

  		  .setDescription("```js\n" + clean.substr(0, 2000) + "```")

      	.addField("Code", "```js\n" + code.substr(0, 1000) + "```");

    	message.channel.send(embed);

  	} catch (err) {

      embed

        .setTitle("Error")

      	.setDescription("```xl\n" + (await client.clean(err)).substr(0, 2000) + "```")

      message.channel.send(embed);

  	}

  }

      

  evaluate(code);
    }
};