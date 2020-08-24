const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("> :PurpleFire:BOT NAME:PurpleFire:", `Zeyrox`)
      .addField(
        "> :PurpleFire:BOT DEVELOPER:PurpleFire: ",
        `
 <@551675716635328512> `
      )
      .addField(
        "> :PurpleFire:TOTAL SERVER:PurpleFire:",
       `${client.guilds.cache.size}`,
        true
      )
      .addField(
         "> :PurpleFire:TOTAL CHANNAL:PurpleFire:",
        `${client.channels.cache.size}`
      )
      .addField(
        "> :PurpleFire:TOTAL USER:PurpleFire:",
        `${client.users.cache.size}`,
        true
      )
      .addField("> :PurpleFire:BOT LIBRARY:PurpleFire:", `discord.js`)

      .setColor("#00FFFF")
      .setFooter(`information about bot`);

    message.channel.send(embed);
  }
};