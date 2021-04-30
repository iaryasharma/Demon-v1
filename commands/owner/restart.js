
module.exports = {
    name: "restart",
    category: "owner",
  aliases: ["r"],
    run: async (client, message, args) => {
        if (message.author.id !== '730424922639302693') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Restarting bot...`)
      process.exit(1);
    }
          }
