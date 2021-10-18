const { prefix, owner } = require("../../config.json");
module.exports = {
    name: "guildleave",
    group: "utility",
    description: "Leaves the server",
    run: async (client, message, args) => {
        if (message.author.id !== '852612839629127711') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Rleaving guild...`)
      message.guild.leave();
    }
          }