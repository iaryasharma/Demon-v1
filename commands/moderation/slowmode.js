const { prefix } = require("../../config.json");
const Discord = require("discord.js");

module.exports = {
  name: "slowmode",
  aliases: ["smode"],
  description: "Lets you set slowmode on the channel.",

  args: true,

  usage: `\`$prefix}slowmode <time>s/min/h\``,

  async run(client, message, args) {
    const amount = parseInt(args[0]);

    if (message.member.hasPermission("MANAGE_CHANNEL"))
      if (isNaN(amount))
        return message.channel.send(
          "**Usage:**` " + prefix + "slowmode <time>s/min/h`"
        );

    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);

      if (amount > 1) {
        message.channel.send("slowmode is now " + amount + " seconds");

        return;
      } else {
        message.channel.send("slowmode is now " + amount + " second");

        return;
      }
    }

    if (args[0] === amount + "min") {
      message.channel.setRateLimitPerUser(amount * 60);

      if (amount > 1) {
        message.channel.send("slowmode is now " + amount + " minutes");

        return;
      } else {
        message.channel.send("slowmode is now " + amount + " minute");

        return;
      }
    }

    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);

      if (amount > 1) {
        message.channel.send("slowmode is now " + amount + " hours");

        return;
      } else {
        message.channel.send("slowmode is now " + amount + " hour");

        return;
      }
    } else {
      message.channel.send(
        "**Usage:**  `" + prefix + "slowmode <time>s/min/h`"
      );
    }
  }
};
