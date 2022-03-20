const discord = require("discord.js"),
  db = require("quick.db"),
  ms = require("ms"),
  { bwebsite, binvite, bserver, pprefix, bowner } = require("../config.json"),
  apiPass = db.get("apipass"),
  apiKey = db.get("apikey"),
  disbut = require("discord-buttons");

module.exports.run = async (client, message) => {
  if (message.author.bot || !message.guild) return;
  const dis = db.get("disabeled" + message.channel.id)
  let d = "**No**"
  if (dis === true) { d = "**Yes**" }
  let defprefix = pprefix;
  const nprefix = db.get(`guildPrefix_${message.guild.id}`);
  if (nprefix !== null) {
    defprefix = nprefix;
  }

  let btn1 = new disbut.MessageButton()
    .setStyle("url")
    .setLabel("|  SUPPORT")
    .setURL(bserver)
    .setEmoji(client.emoji.discord_id)
    .setDisabled(false);
  const btn2 = new disbut.MessageButton()
    .setStyle("url")
    .setLabel("|  INVITE")
    .setURL(binvite)
    .setEmoji(client.emoji.invite_id)
    .setDisabled(false);

  const btn3 = new disbut.MessageButton()
    .setStyle("url")
    .setLabel("|  WEBSITE")
    .setURL(bwebsite)
    .setEmoji(client.emoji.dm_id)
    .setDisabled(false);

  const row = new disbut.MessageActionRow()
    .addComponent(btn1)
    .addComponent(btn2)
    .addComponent(btn3);

  let msg = `@here\nThank you for choosing **MARVEL**

We hope marvel do help you with your server.
You can join the support server by taping the support button below.

You can also vote us ( https://top.gg/bot/748583869527097376/vote ) please do support our bot.

**Note : ** 
- Make sure not to delete this channel.
- You can rename the channel.
- you can categorize the channel.

Add me to other servers by tapping the invite button.

Thank you :heart:`

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    let mention = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .addField(
        "**━━━━━━━━━━━━━━━━━**\n" + client.emoji.ar + "| " + " SERVER PREFIX",
        `\`${defprefix}\``
      )
      .addField(
        client.emoji.tool + "| " + "USAGES",
        "`" +
        defprefix +
        "help` - for bots help menu \n" +
        "`" +
        defprefix +
        "support` - for bots support \n" +
        "`" +
        defprefix +
        "invite` - to invite the bot in youre server \n" +
        "`" +
        defprefix +
        "author` to get the details about bot developer \n"
      )
      .addField(
        client.emoji.ar + "| " + "Prefix",
        "`" +
        defprefix +
        "prefix <new prefix>` - to change bots prefix\n" +
        "`" +
        defprefix +
        "prefix reset` - to change bots prefix to default" +
        "\n**━━━━━━━━━━━━━━━━━**"
      )
      .addField(
        client.emoji.ar + "| " + "Channel Disabeled",
        d + "\nUse " + defprefix + " enable/disable command to change this setting"
      )
      .setImage(client.gif.mention)
      .setColor(client.embed.cm)
      .setFooter(
        `${message.author.username}`,
        message.author.displayAvatarURL({ dynamic: true })
      );

    return message.channel.send(mention, {
      components: [row],
    });
  }

  // For user without prefix
  // second owner

  const secondOwner = db.get("secondaryowner" + message.author.id)

  if (secondOwner === true) {
    try {
      if (!message.member)
        message.member = await message.guild.fetchMember(message);
      const args = message.content.slice().trim().split(/ +/g),
        cmd = args.shift().toLowerCase();
      if (cmd.length === 0) return;

      if (cmd === "setup") {
        if (
          !message.guild.me
            .permissionsIn(message.channel)
            .has("MANAGE_CHANNELS") && !message.guild.me
              .permissionsIn(message.channel)
              .has("MANAGE_ROLES")
        ) {
          return message
            .lineReply(
              client.emoji.fail +
              "| I NEED **`MANAGE_CHANNELS, MANAGE_ROLES`** PERMISSIONS FIRST TO EXECUTE THIS COMMAND!!"
            )
            .then((m) => m.delete({ timeout: 3000 }));
        }
        const setup = db.get("setup" + message.channel.guild.id),
          setchan = message.guild.channels.cache.get(setup);

        if (
          setup === null ||
          setup === undefined ||
          !setup ||
          !setchan ||
          setchan === null ||
          setchan === undefined
        ) {
          let c = await message.guild.channels
            .create("marvel-private")
            .then((channel) => {
              channel.updateOverwrite(client.user, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
              });
              channel.updateOverwrite(message.guild.roles.everyone, {
                VIEW_CHANNEL: false,
              });
              channel.send(msg, {
                components: [row],
              })
              message.lineReply(
                new discord.MessageEmbed({
                  description:
                    client.emoji.success +
                    "| <#" +
                    channel.id +
                    "> Is created and set as update channel",
                  color: client.embed.cr,
                })
              );
              db.set("setup" + message.guild.id, channel.id);
              return;
            });
        } else {
          return message.lineReply(
            new discord.MessageEmbed({
              description:
                client.emoji.fail +
                "| <#" +
                setchan.id +
                "> Is already set as update channel in this guild make sure to give me permissions in that channel",
              color: client.embed.cf,
            })
          );
        }
      }

      let command = client.commands.get(cmd);
      if (!command) command = client.commands.get(client.aliases.get(cmd));
      if (command) {
        let r = false;
        const modOnly = db.get("modOnly" + message.guild.id);
        if (!bowner.includes(message.member.id)) {
          if (modOnly === true) {
            if (
              !message.member.permissionsIn(message.channel).has("ADMINISTRATOR")
            )
              return message
                .lineReply(
                  client.emoji.fail + "| Bot is mod only in this guild"
                )
                .then((m) => m.delete({ timeout: 3000 }));
          }
          command.userPermissions.forEach((permission) => {
            if (r === true) return;
            if (
              !message.member.permissionsIn(message.channel).has(permission)
            ) {
              r = true;
              return message.lineReply(
                client.emoji.fail +
                "| YOU NEED **`" +
                permission +
                "`** PERMISSION FIRST TO EXECUTE THIS COMMAND!!"
              ).then((m) => m.delete({ timeout: 3000 }));
            }
          });
        }
        command.botPermissions.forEach((permission) => {
          if (r === true) return;
          if (
            !message.guild.me.permissionsIn(message.channel).has(permission)
          ) {
            r = true;
            return message.lineReply(
              client.emoji.fail +
              "| I NEED **`" +
              permission +
              "`** PERMISSION FIRST TO EXECUTE THIS COMMAND!!"
            ).then((m) => m.delete({ timeout: 3000 }));
          }
        });
        if (r === false) {
          try {
            command.run(client, message, args)
          } catch (e) {
            console.log(e)
            client.web.send(
              "```js\n" + e.message + "```\n```" + command.name + "```"
            );
          }
        }
      }
    } catch (e) {
      console.log(e);
      client.web.send("```js\n" + e.message + "```");
    }
  }

  // For user with prefix  
  // normal users

  if (message.content.startsWith(defprefix)) {
    try {
      const modOnly = db.get("modOnly" + message.guild.id);
      if (!message.member)
        message.member = await message.guild.fetchMember(message);
      const args = message.content.slice(defprefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
      if (cmd.length === 0) return;
      if (cmd === "setup") {
        if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")
        ) {
          return message
            .lineReply(
              client.emoji.fail +
              "| YOU NEED **`ADMINISTRATOR`** PERMISSION FIRST TO EXECUTE THIS COMMAND!!"
            )
            .then((m) => m.delete({ timeout: 3000 }));
        }
        if (
          !message.guild.me
            .permissionsIn(message.channel)
            .has("MANAGE_CHANNELS") && !message.guild.me
              .permissionsIn(message.channel)
              .has("MANAGE_ROLES")
        ) {
          return message
            .lineReply(
              client.emoji.fail +
              "| I NEED **`MANAGE_CHANNELS`** PERMISSION FIRST TO EXECUTE THIS COMMAND!!"
            )
            .then((m) => m.delete({ timeout: 3000 }));
        }
        const setup = db.get("setup" + message.channel.guild.id),
          setchan = message.guild.channels.cache.get(setup);

        if (
          setup === null ||
          setup === undefined ||
          !setup ||
          !setchan ||
          setchan === null ||
          setchan === undefined
        ) {
          let c = await message.guild.channels
            .create("marvel-private")
            .then((channel) => {
              channel.updateOverwrite(client.user, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
              });
              channel.updateOverwrite(message.guild.roles.everyone, {
                VIEW_CHANNEL: false,
              });
              channel.send(msg, {
                components: [row],
              })
              message.lineReply(
                new discord.MessageEmbed({
                  description:
                    client.emoji.success +
                    "| <#" +
                    channel.id +
                    "> Is created and set as update channel",
                  color: client.embed.cr,
                })
              );
              db.set("setup" + message.guild.id, channel.id);
              return;
            });
        } else {
          return message.lineReply(
            new discord.MessageEmbed({
              description:
                client.emoji.fail + "| <#" + setchan.id +
                "> Is already set as update channel in this" +
                " guild make sure to give me permissions in that channel",
              color: client.embed.cf,
            })
          );
        }
      }
      let command = client.commands.get(cmd);
      if (!command) command = client.commands.get(client.aliases.get(cmd));
      if (command) {
        const setup = db.get("setup" + message.channel.guild.id);

        const setchan = message.guild.channels.cache.get(setup);
        if (
          setup === null ||
          setup === undefined ||
          !setup ||
          !setchan ||
          setchan === null ||
          setchan === undefined
        ) {
          return message.lineReply(
            new discord.MessageEmbed({
              description:
                client.emoji.fail + "| Please run `" +
                defprefix + "setup` command first!\nI'll create a channel "
                + "for updates make sure your security bot don't kick me!",
              color: client.embed.cf,
            })
          );
        }

        if (dis === true) {
          return message.react(client.emoji.fail)
        }

        const talkedRecently = db;
        const wait = db.get(`cooldown_${message.guild.id + message.author.id}`);
        let cooldown = 5000;

        if (wait !== null && cooldown - (Date.now() - wait) > 0) {
          let timeObj = ms(cooldown - (Date.now() - wait));
          return message
            .lineReply(
              "**Wait __`" + timeObj + "`__ Before Using My Commands Again**"
            )
            .then((m) => m.delete({ timeout: 5000 }));
        }
        let r = false;
        if (!bowner.includes(message.member.id)) {
          if (modOnly === true) {
            if (
              !message.member.permissionsIn(message.channel).has("ADMINISTRATOR")
            )
              return message
                .lineReply(
                  client.emoji.fail + "| Bot is mod only in this guild"
                )
                .then((m) => m.delete({ timeout: 3000 }));
          }

          command.userPermissions.forEach((permission) => {
            if (r === true) return;
            if (
              !message.member.permissionsIn(message.channel).has(permission)
            ) {
              r = true;
              return message.lineReply(
                client.emoji.fail +
                "| YOU NEED **`" +
                permission +
                "`** PERMISSION FIRST TO EXECUTE THIS COMMAND!!"
              ).then((m) => m.delete({ timeout: 3000 }));
            }
          });
        }
        command.botPermissions.forEach((permission) => {
          if (r === true) return;
          if (
            !message.guild.me.permissionsIn(message.channel).has(permission)
          ) {
            r = true;
            return message.lineReply(
              client.emoji.fail +
              "| I NEED **`" +
              permission +
              "`** PERMISSION FIRST TO EXECUTE THIS COMMAND!!"
            ).then((m) => m.delete({ timeout: 3000 }));
          }
        });
        if (r === false) {
          try {
            command.run(client, message, args) &&
              talkedRecently.set(
                `cooldown_${message.guild.id + message.author.id}`,
                Date.now()
              );
            setTimeout(() => {
              talkedRecently.delete(
                `cooldown_${message.guild.id + message.author.id}`
              );
            }, cooldown);
          } catch (e) {
            console.log(e)
            client.web.send(
              "```js\n" + e.message + "```\n```" + command.name + "```"
            );
          }
        }
      }
    } catch (e) {
      console.log(e);
      client.web.send("```js\n" + e.message + "```");
    }
  }

  // announcement system starts here
  // for marvel private channels across the servers

  if (message.channel.id === client.config.announce) {
    if (!client.config.bowner.includes(message.author.id)) {
      return;
    }
    const ok = new disbut.MessageButton()
      .setStyle("green")
      .setEmoji(client.emoji.tick_id)
      .setID("okay")
      .setDisabled(false);

    const cancel = new disbut.MessageButton()
      .setStyle("red")
      .setEmoji(client.emoji.cross_id)
      .setID("cancel")
      .setDisabled(false);

    const row = new disbut.MessageActionRow()
      .addComponent(ok)
      .addComponent(cancel);

    message.channel
      .send(message.content, {
        components: [row],
      })
      .then((m) => {
        client.on("clickButton", async (button) => {
          try {
            if (button.clicker.id !== message.author.id) return;
            if (button.message.id !== m.id) return;
            if (button.id == "cancel") {
              return m.delete();
            } else if (button.id === "okay") {
              m.delete();
              client.guilds.cache.forEach((guild) => {
                const setup = db.get("setup" + guild.id)
                if (!setup || setup === null) return
                const setchan = guild.channels.cache.get(setup);
                try {
                  setchan.send(message.content)
                  console.log(guild.name + ' Sent')
                } catch (e) {
                  return db.delete("setup" + guild.id)
                }
              });
            } else {
              return;
            }
          } catch (e) {
            console.log(e);
          }
        });
      });
  }
};
