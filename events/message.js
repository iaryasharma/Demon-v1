const discord = require("discord.js"),
  db = require("quick.db"),
  ms = require("ms"),
  { bwebsite, binvite, bserver, pprefix, bowner } = require("../config.json"),
  apiPass = db.get("apipass"),
  apiKey = db.get("apikey"),
  disbut = require("discord-buttons"),
  Timeout = new discord.Collection();

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

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
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
  const btn4 = new disbut.MessageButton()
    .setStyle("url")
    .setLabel("|  VOTE")
    .setURL(client.config.bvote)
    .setEmoji(client.emoji.discord_id)
    .setDisabled(false);

  const row = new disbut.MessageActionRow()
    .addComponent(btn1)
    .addComponent(btn2)
    .addComponent(btn3)
    .addComponent(btn4);
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
        "vote` - to vote for the bot\n"
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

      let command = client.commands.get(cmd);
      if (!command) command = client.commands.get(client.aliases.get(cmd));
      if (command) {
        /*  const heis = client.guilds.cache.get("739419850614767707");
          let inside = heis.members.cache.get(message.author.id);
          if (!inside) {
            inside = await heis.fetchMember(message.author.id)
          }
          if (!inside) {
            let join = new discord.MessageEmbed({
              description:
                "You need to join my support server first.\n" +
                "In order to use no prefix",
              color: client.color.cf
            })
            const np = new disbut.MessageButton()
              .setStyle("url")
              .setLabel("|  SERVER")
              .setURL(client.config.bserver)
              .setEmoji(client.emoji.discord_id)
              .setDisabled(false)
            const row = new disbut.MessageActionRow()
              .addComponent(np);
            return message.channel
              .send(join, {
                components: [row],
              });
          }*/
        if (command.vote === true) {
          let vote = new discord.MessageEmbed({
            description: "You need to vote first to use this command.",
            color: client.color.cf
          })
          const vb = new disbut.MessageButton()
            .setStyle("url")
            .setLabel("|  VOTE")
            .setURL(client.config.bvote)
            .setEmoji(client.emoji.discord_id)
            .setDisabled(false)
          const row = new disbut.MessageActionRow()
            .addComponent(vb);
          let pre = db.get("voted" + message.author.id);
          if (pre !== true) return message.channel
            .send(vote, {
              components: [row],
            });
          const trt = db.get("vote-time_" + message.author.id);
          var milliseconds = trt;
          var millisecondsInDay = 8.64e7;
          var futureDate = new Date(milliseconds + 1 * millisecondsInDay);
          var tit = Date.now();
          if (futureDate - tit <= 0) {
            return (
              message.channel
                .send(vote, {
                  components: [row],
                }) &&
              db.delete("votes" + message.author.id) &&
              db.delete("vote-time_" + message.author.id)
            );
          }
        }
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
  const demonMention = new RegExp(`^<@!?${client.user.id}> `),
    demon = message.content.match(demonMention) ? message.content.match(demonMention)[0] : defprefix;

  if (message.content.startsWith(demon)) {
    try {
      const modOnly = db.get("modOnly" + message.guild.id);
      if (!message.member)
        message.member = await message.guild.fetchMember(message);
      const args = message.content.slice(demon.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
      if (cmd.length === 0) return;
      let command = client.commands.get(cmd);
      if (!command) command = client.commands.get(client.aliases.get(cmd));
      if (command) {

        if (command.setup === true) {
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
              Timeout.set(`cooldown${message.author.id}`, Date.now() + cooldown);
            setTimeout(() => {
              Timeout.delete(`cooldown${message.author.id}`);
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
  // for demon private channels across the servers

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