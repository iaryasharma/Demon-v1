const discord = require("discord.js")

module.exports = {
  name: "help",
  description: "Get the command list of the bot",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setAuthor(`Command list of ${client.user.username}`, `${client.user.avatarURL()}`)
      .setDescription(
        `

> __**MODERATION**__
> <a:thisr:728929598544543825> \`prefix\`:- Change the prefix of **${client.user.username}** for the server
> <a:thisr:728929598544543825> \`welcome\`:- Welcomes the user in your server
> <a:thisr:728929598544543825> \`mute\`:- Mute any user
> <a:thisr:728929598544543825> \`unmute\`:- Unmute any user muted by **${client.user.username}**
> <a:thisr:728929598544543825> \`kick\`:- Kick any member of the server
> <a:thisr:728929598544543825> \`ban\`:- Ban any member of the server
> 
> __**INFO**__
> <a:thisr:728929598544543825> \`ping\`:- Check your ping
> <a:thisr:728929598544543825> \`id\`:- Get id of any member of the ${message.guild}
> <a:thisr:728929598544543825> \`serverid\`:- Get the id of ${message.guild}
> <a:thisr:728929598544543825> \`anime\`:- Get information of any cartoon character/show
> <a:thisr:728929598544543825> \`pokemon\`:- Get information of any pokemon
> <a:thisr:728929598544543825> \`imdb\`:- Get information of any movie or web series
> <a:thisr:728929598544543825> \`weather\`:- Get the weather report of anywhere
> <a:thisr:728929598544543825> \`invite\`:- Get the invite link of the bot
> 
> [Invite Link](https://discord.com/api/oauth2/authorize?client_id=732252376517574746&permissions=8&scope=bot) | [Support Server](https://discord.gg/7BVTsHG)`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`Asked by ${message.author.username}`, `${message.author.avatarURL({dynamic: true, size: 2048})}`)
      .setTimestamp()
    
    message.channel.send(embed)
  }
}