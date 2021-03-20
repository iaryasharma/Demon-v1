const { prefix } = require("../../config.json");

module.exports = {
  name: "unhide",
  description: "Unhides The Mentioned Channels for everyone",
  usage: `\`${prefix}unhide <Channel(s)>\``,
  async run(client, message, args) {
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Manage Channels`
      );
    if (!message.member.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Manage Channels`
      );
    if (args[0] !== "all") {
      if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);
      if (!message.mentions.channels.first())
        return message.channel.send("Mention Valid Channel");

      await message.mentions.channels.forEach(async channel => {
        await channel.updateOverwrite(channel.guild.roles.everyone, {
          VIEW_CHANNEL: true
        });
        message.channel.send(`<#${channel.id}> Has Been Unhidden.`);
      });
    }
  }
};
