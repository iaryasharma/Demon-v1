const { prefix, owner } = require("../../config.json");
module.exports = {
    name: "guildleave",
    group: "utility",
    description: "Leaves the server",
    run: async (client, message, args) => {
        if (message.author.id !== owner) return;
        await message.channel.send(`Leaving guild...`)
      message.guild.leave();
    }
          }