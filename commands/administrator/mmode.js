const Discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
  name: "mmode",
  aliases: ["mm"],
  description: "Enables/Disables Maintenance Mode in the Server",
  usage: `\`${prefix}mmode <on/off>\``,
  async run(client, message, args) {
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Manage Channels`
      );
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Administrator`
      );
    if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);
    let filter;
    switch (args[0].toLowerCase()) {
      case `on`:
        message.react("✅").then(() => message.react("❌"));
        filter = (reaction, user) => {
          return (
            ["✅", "❌"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          );
        };
        message
          .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
          .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === "✅") {
              message.guild.channels.cache.forEach(ch => {
                ch.updateOverwrite(ch.guild.roles.everyone, {
                  VIEW_CHANNEL: false
                });
              });
              message.channel
                .send(`Maintenance Mode ON`)
                .then(
                  message.guild.channels.create("maintenance-mode-chat", {
                    type: "text",
                    position: 0,
                    permissionOverwrites: [
                      {
                        id: message.guild.id,
                        allow: [
                          "SEND_MESSAGES",
                          "VIEW_CHANNEL",
                          "READ_MESSAGE_HISTORY"
                        ]
                      }
                    ]
                  })
                )
                .then(
                  message.guild.channels.create("MAINTENANCE VOICE ZONE", {
                    type: "voice",
                    position: 1,
                    permissionOverwrites: [
                      {
                        id: message.guild.id,
                        allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"]
                      }
                    ]
                  })
                );
            } else {
              message.channel.send("Command Cancelled");
            }
          })
          .catch(collected => {
            message.reply("Command Timed Out");
          });
        break;

      case `off`:
        if (!message.member.permissions.has("ADMINISTRATOR"))
          return message.channel.send(
            `You Don't Have Permission To Use This Command! Administrator`
          );
        message.react("✅").then(() => message.react("❌"));
        filter = (reaction, user) => {
          return (
            ["✅", "❌"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          );
        };
        message
          .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
          .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === "✅") {
              message.guild.channels.cache.forEach(ch => {
                ch.updateOverwrite(ch.guild.roles.everyone, {
                  VIEW_CHANNEL: true
                });
              });
              message.channel.send(`Maintenance Mode OFF`);
            } else {
              message.channel.send("Command Cancelled");
            }
          })
          .catch(collected => {
            message.reply("Command Timed Out");
          });
        break;
    }
  }
};
