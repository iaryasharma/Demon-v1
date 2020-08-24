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
        "> <a:firepurple:747318123643928677>BOT DEVELOPER<a:firepurple:747318123643928677> ",
        `
 <@747319827856621648>`
      )
      .addField(
        "> <a:firepurple:747318123643928677> TOTAL SERVER <a:firepurple:747318123643928677>",
       `${client.guilds.cache.size}`,
        true
      )
      .addField(
         "<a:firepurple:747318123643928677>TOTAL CHANNEL <a:firepurple:747318123643928677>",
        `${client.channels.cache.size}`
      )
      .addField(
        "> <a:firepurple:747318123643928677> TOTAL USER <a:firepurple:747318123643928677>",
        `${client.users.cache.size}`,
        true
      )
      .addField("> <a:firepurple:747318123643928677> BOT LIBRARY: <a:firepurple:747318123643928677>", `discord.js`)

      .setColor("#00FFFF")
      .setFooter(`information about bot`);

    message.channel.send(embed);
  }
};