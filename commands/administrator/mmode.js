const disbut = require("discord-buttons"),
  discord = require("discord.js");

module.exports = {
  name: "maintenance",
  aliases: ["mm", "mmode"],
  desciption: "enables and disables maintenance mode in the server",
  category: "MODERATION",
  usage: "maintenance <on | off> [@role]",
  userPermissions: ["ADMINISTRATOR"],
  botPermissions: ["EMBED_LINKS", "MANAGE_GUILD", "MANAGE_CHANNELS", "MANAGE_ROLES"],

  async run(client, message, args) {
    if (!client.config.bowner.includes(message.author.id)) {
      if (message.member !== message.guild.owner) {
        if (
          message.member.roles.highest.position <=
          message.guild.me.roles.highest.position
        )
          return message.reply(
            new discord.MessageEmbed({
              color: client.embed.cf,
              description:
                client.emoji.fail + "| Your Role isn't High Enough"
            })
          );
      }
    }
    if (!args[0]) {
      return message.lineReply(
        new discord.MessageEmbed({
          color: client.embed.cf,
          description: "mmode <on | off>"
        })
      );
    }

    let item

    if (args[1]) {
      item = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
      if (!item) return message.lineReply(
        new discord.MessageEmbed({
          color: client.embed.cf,
          description: "Unable to find the role with id " + args[1]
        })
      )
    } else {
      item = message.guild.roles.everyone
    }

    const mode = new discord.MessageEmbed({
      color: client.embed.cm,
      description: "Ar you sure you want to\n**TOGGLE MAINTENANCE MODE**"
    })

    const ok = new disbut.MessageButton()
      .setStyle("green")
      .setEmoji(client.emoji.tick_id)
      .setID("mmode_ok" + args[0])
      .setDisabled(false);

    const cancel = new disbut.MessageButton()
      .setStyle("red")
      .setEmoji(client.emoji.cross_id)
      .setID("mmode_cancel" + args[0])
      .setDisabled(false);

    const row = new disbut.MessageActionRow()
      .addComponent(ok)
      .addComponent(cancel)

    let filter;
    switch (args[0].toLowerCase()) {
      case `on`:
        message.channel
          .send(mode, {
            components: [row],
          })
          .then((m) => {
            client.on("clickButton", async (button) => {
              try {
                if (button.message.id !== m.id) return;
                if (button.clicker.id !== message.author.id) return;
                button.reply.defer()
                if (button.id === "mmode_ok" + args[0]) {
                  m.delete()
                  message.guild.channels.cache.forEach((ch) => {
                    ch.updateOverwrite(item, {
                      VIEW_CHANNEL: false,
                    });
                  });
                  message.channel
                    .send(
                      new discord.MessageEmbed({
                        description: client.emoji.success + `| Maintenance Mode ON`, color: client.embed.cr
                      })
                    ).then(
                      message.guild.channels.create("maintenance-chat-marvel", {
                        type: "text",
                        position: 0,
                        permissionOverwrites: [
                          {
                            id: message.guild.id,
                            allow: [
                              "SEND_MESSAGES",
                              "VIEW_CHANNEL",
                              "READ_MESSAGE_HISTORY",
                            ],
                          },
                        ],
                      })
                    )
                    .then(
                      message.guild.channels.create("MAINTENANCE VOICE MARVEL", {
                        type: "voice",
                        position: 1,
                        permissionOverwrites: [
                          {
                            id: message.guild.id,
                            allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
                          },
                        ],
                      })
                    );

                } else if (button.id === "mmode_cancel" + args[0]) {
                  m.delete()
                } else {
                  return;
                }
              } catch (e) {
                return console.log(e)
              }
            })
          })

        break;
      case `off`:
        message.channel
          .send(mode, {
            components: [row],
          })
          .then((m) => {
            client.on("clickButton", async (button) => {
              try {
                if (button.message.id !== m.id) return;
                if (button.clicker.id !== message.author.id) return;
                button.reply.defer()
                if (button.id === "mmode_ok" + args[0]) {
                  m.delete()
                  message.guild.channels.cache.forEach((ch) => {
                    ch.updateOverwrite(item, {
                      VIEW_CHANNEL: true,
                    });
                  });
                  message.channel.send(
                    new discord.MessageEmbed({
                      description: client.emoji.success + `| Maintenance Mode OFF`, color: client.embed.cr
                    })
                  )
                } else if (button.id === "mmode_cancel" + args[0]) {
                  m.delete()
                } else {
                  return;
                }
              } catch (e) {
                return console.log(e)
              }
            })
          })
        break
    }

  },
};
