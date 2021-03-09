const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  //   config: {
  name: "end",
  description: "Ending giveaway",
  accessableby: "Administrator",
  category: "giveaway",
  aliases: ["giveaway-end"],
  usage: "<giveawaymessageid>",
  // },
  run: async (client, message, args) => {
    if (
      !message.member.hasPermission("MANAGE_MESSAGES") &&
      !message.member.roles.cache.some(r => r.name === "Giveaways")
    ) {
      return message.channel.send(
        "<a:GC_wrong:810000635113635840> You need to have the manage messages permissions to reroll giveaways."
      );
    }

    // If no message ID or giveaway name is specified
    if (!args[0]) {
      return message.channel.send(
        "<a:GC_wrong:810000635113635840> You have to specify a valid message ID!"
      );
    }

    // try to found the giveaway with prize then with ID
    let giveaway =
      // Search with giveaway prize
      client.giveawaysManager.giveaways.find(g => g.prize === args.join(" ")) ||
      // Search with giveaway ID
      client.giveawaysManager.giveaways.find(g => g.messageID === args[0]);

    // If no giveaway was found
    if (!giveaway) {
      return message.channel.send(
        "<a:GC_wrong:810000635113635840> Unable to find a giveaway for `" +
          args.join(" ") +
          "`."
      );
    }

    // Edit the giveaway
    client.giveawaysManager
      .edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
      })
      // Success message
      .then(() => {
        // Success message
        message.channel.send(
          "<a:GC_welcome:810118157967949895> Giveaway will end in less than " +
            client.giveawaysManager.options.updateCountdownEvery / 1000 +
            " seconds..."
        );
      })
      .catch(e => {
        if (
          e.startsWith(
            `Giveaway with message ID ${giveaway.messageID} is already ended.`
          )
        ) {
          message.channel.send(
            "<a:GC_wrong:810000635113635840> This giveaway is already ended!"
          );
        } else {
          console.error(e);
          message.channel.send(
            "<a:GC_wrong:810000635113635840> An error occured..."
          );
        }
      });
  }
};
