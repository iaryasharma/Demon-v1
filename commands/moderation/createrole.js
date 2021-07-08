const Discord = require("discord.js");
const toHex = require("colornames");
const { prefix } = require("../../config.json");

module.exports = {
  name: "createrole",
  aliases: ["cr", "createrole", "crole"],
  description: "Creates A New Role in the Server",
  usage: `\`${prefix}createrole rainbow <role>\``,
  async run(client, message, args) {
    if (!message.guild.me.permissions.has("MANAGE_ROLES"))
      return message.reply(
        `I Don't Have Permission To Use This Command! Manage Roles`
      );
    if (!message.member.permissions.has("MANAGE_ROLES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Manage Roles`
      );

    const name = args.slice(1).join(" ");
    if (!args[0] || !args[1])
      return message.channel.send(`Usage: ${this.usage}`);
    if (name.length > 100) {
      return message.channel.send(
        "Your role can't be more than 100 characters long"
      );
    }
    message.guild.roles.create({
      data: {
        name: name,
        color: toHex(args[0])
      }
    });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        `${message.author.username} - (${message.author.id})`,
        message.author.displayAvatarURL()
      )
      .setColor("RANDOM").setDescription(`
Role:  ${name}
Role Color:  ${args[0]}
By:  ${message.member}
      `);
    message.channel.send(embed);
  }
};
