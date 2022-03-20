const { owners } = require("../../config.json")
const { prefix, owner } = require("../../config.json");

module.exports = {
    name: "restart",
    category: "owner",
  aliases: ["r"],
    run: async (client, message, args) => {
        if (!client.config.owner.includes(message.author.id)) return
        await message.channel.send(`Restarting bot...`)
      process.exit(1);
    }
          }
