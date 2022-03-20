const { prefix, owner } = require("../../config.json");
module.exports = {
    name: "guildleave",
    group: "utility",
    description: "Leaves the server",
    run: async (client, message, args) => {
        if (!client.config.owner.includes(message.author.id)) return;
        await message.channel.send(`Leaving guild...`)
      message.guild.leave();
    }
          }