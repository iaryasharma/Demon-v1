const { prefix } = require("../../config.json");

module.exports = {
  name: "lock",
  description: "Locks the Mentioned Channels for everyone",
  usage: `\`${prefix}lock <Channel(s)>\``,
  async run(client, message, args) {
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Manage Channels`
      );
    if (!message.member.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Manage Channels`
      );
    if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);
    if (!message.mentions.channels.first())
      return message.channel.send("Mention Valid Channel");

    await message.mentions.channels.forEach(async channel => {
      await channel.updateOverwrite(channel.guild.roles.everyone, {
        SEND_MESSAGES: false
      });
      message.channel.send(`<#${channel.id}> Has Been Locked.`);
    });
  }
};
