const { prefix } = require("../../config.json");

module.exports = {
  name: "create-chanel",
  aliases: ["cchannel", "cch", "createchannel"],
  description: "Creates A Private Channel",
  usage: `\`${prefix}cchannel <Name>\``,
  run(client, message, args) {
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Manage Channels`
      );
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Administrator`
      );
    if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);
    const channelName = args[0];
    message.guild.channels.create(channelName, {
      type: "text",
      position: 0,
      permissionOverwrites: [
        {
          id: message.guild.id
          //    deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        }
      ]
    });
  }
};
