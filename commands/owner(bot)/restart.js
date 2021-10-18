const { owners } = require("../../config.json")

module.exports = {
    name: "restart",
    category: "owner",
  aliases: ["r"],
    run: async (client, message, args) => {
        if (message.author.id !== '852612839629127711') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Restarting bot...`)
      process.exit(1);
    }
          }
