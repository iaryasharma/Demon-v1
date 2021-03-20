const { MessageFlags } = require("discord.js");

module.exports = {
    name: "say",
    category: "fun",
    desciption: "say command",
    usage: "say <message>",

    async run (client, message, args) {
      if (!message.guild.me.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        "I Don't Have Permission To Use This Command! Manage Messages"
      );
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Manage Messages`
      );
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}