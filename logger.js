var discord = require("discord.js");
var client = new discord.Client();
var fs = require("fs");
//var prefix = "*";
var { prefix, binvite, bowner } = require("./config.json");
//const prefix = require("/config.json");
var db = require("quick.db");
//var RichEmbed = new discord.MessageEmbed();

client.on("ready", async function() {
  console.log(client.user.tag + " Logger Ready");

  // setInterval(() => {
  //  client.user.setActivity(`${prefix}help | in ${client.guilds.cache.size} servers`, {
  //     type: "WATCHING"
  //   });
  //   client.user.setStatus(`idle`);
  //  }, 16000);
});

//logging

client.on("messageDelete", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }
  if (message.guild) {
    if (message.author.bot) return;
    var y = db.get("messagedelete_" + message.guild.id);
    if (y !== `enabled`) return;
    var x = db.get("msglog_" + message.guild.id);
    x = client.channels.cache.get(x);
    if (message.channel == x) return;
    var embed = new discord.MessageEmbed()

      .setColor("RANDOM")
      .setAuthor("Message Deleted", message.guild.iconURL)
      .addField("User", message.author.tag)
      .addField("Message", message.content)
      .addField("From Channel", message.channel)
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp();
    x.send(embed).catch();
  }
});

client.on("channelCreate", async function(channel, message) {
  if (!channel.guild) return;
  var y = db.get(`channelcreate_${channel.guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("chxlog_" + channel.guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Channel Created", channel.guild.iconURL)
    .addField("Channel Name", channel.name)
    .addField("Channel Id", channel.id + `\n**----------------------**`)
    //  .addField("Created By", message.author.username)
    .setTimestamp();
  x.send(embed).catch();
});

client.on("channelDelete", async function(channel) {
  if (!channel.guild) return;
  var y = db.get(`channelcreate_${channel.guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("dchxlog_" + channel.guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor("Channel Deleted", channel.guild.iconURL)
    .addField("Channel Name", channel.name)
    .addField("Channel Id", channel.id + `\n**----------------------**`)
    .setTimestamp();

  x.send(embed).catch();
});

client.on("emojiCreate", async function(emoji) {
  var y = db.get(`emojicreate_${emoji.guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("emojilog_" + emoji.guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Emoji Created", emoji.guild.iconURL)
    .addField("Emote Name", emoji.name)
    .addField("Emote", emoji + `\n**----------------------**`)
    .setTimestamp();
  x.send(embed).catch();
});

client.on("emojiDelete", async function(emoji) {
  var y = db.get(`emojidelete_${emoji.guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("delog_" + emoji.guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Emoji Deleted", emoji.guild.iconURL)
    .addField("Nmote Name", emoji.name)
    .addField("Emote Url", emoji.url + `\n**----------------------**`)
    .setTimestamp();
  x.send(embed).catch();
});
client.on("guildBanAdd", async function(guild, user) {
  var y = db.get(`guildbanadd_${guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("banlog_" + guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor("User Banned", guild.iconURL)
    .addField("Banned User", user.tag)
    .addField("User Id", user.id + `\n**----------------------**`)
    .setTimestamp();
  x.send(embed).catch();
});

client.on("guildBanRemove", async function(guild, user) {
  var y = db.get(`guildbanremove_${guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("unbanlog_" + guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor("User Unbanned", guild.iconURL)
    .addField("Unbanned User", user.tag)
    .addField("User Id", user.id + `\n**----------------------**`)

    .setTimestamp();

  x.send(embed).catch();
});

client.on("guildMemberAdd", async function(member) {
  var y = db.get(`guildmemberadd_${member.guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("join_" + member.guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor("User Join", member.guild.iconURL)
    .addField("User Tag", member.user.tag)
    .addField("User Id", member.user.id + `\n**----------------------**`)
    .setTimestamp();
  x.send(embed).catch();
});

client.on("guildMemberRemove", async function(member) {
  var y = db.get(`guildmemberremove_${member.guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("leave_" + member.guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor("User Left", member.guild.iconURL)
    .addField("User Tag", member.user.tag)
    .addField("User Id", member.user.id + `\n**----------------------**`)
    .setTimestamp();
  x.send(embed).catch();
});

client.on("messageDeleteBulk", async function(messages) {
  var y = db.get(`messagebulkdelete_${messages.random().guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("bulk_" + messages.random().guild.id);
  var x = client.channels.cache.get(x);
  if (messages.random().channel == x) return;
  await messages
    .array()
    .reverse()
    .forEach(m => {
      var x = m.createdAt.toString().split(" ");
      fs.appendFile(
        "messagebulkdelete.txt",
        `[${m.author.tag}], [#${m.channel.name}]: ["${
          m.content
        }"], created at [${x[0]} ${x[1]} ${x[2]} ${x[3]} ${x[4]}]\n\n`,
        function(err) {
          if (err) throw err;
          console.log("Saved!");
        }
      );
    });

  var embed = new discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor("Bulk Message Delete", messages.random().guild.iconURL)
    .addField("From Channel", messages.random().channel)
    .addField(
      "Messages Count",
      messages.array().length + `\n**----------------------**`
    )
    .setTimestamp();
  await x.send(embed).catch();
  await x.send(`Here is the log file for the deleted messages: \n`).catch();
  await x.send({ files: [{ attachment: "messagebulkdelete.txt" }] }).catch();
  fs.unlink("messagebulkdelete.txt", function(err) {
    if (err) throw err;
    console.log("File deleted!");
  });
});

client.on("roleCreate", async function(role) {
  var y = db.get(`rolecreate_${role.guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("rolelog_" + role.guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Role Deleted", role.guild.iconURL)
    .addField("Role Name", role.name)
    .addField("Role Id", role.id + `\n**----------------------**`)
    .setTimestamp();
  x.send(embed).catch();
});

client.on("roleDelete", async function(role) {
  var y = db.get(`roledelete_${role.guild.id}`);
  if (y !== "enabled") return;
  var x = db.get("drolelog_" + role.guild.id);
  var x = client.channels.cache.get(x);
  var embed = new discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor("Role Deleted", role.guild.iconURL)
    .addField("Role Name", role.name)
    .addField("Role Id", role.id + `\n**----------------------**`)
    .setTimestamp();
  x.send(embed).catch();
});

client.on("message", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();

  if (message.content.indexOf(prefix) !== 0) return;

  function sleep(milliseconds) {
    var start = new Date().getTime();

    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }

  if (command === "helplog") {
    if (!message.guild)
      return message.channel.send(`use this command in a server, not dm!`);

    if (
      !message.member.hasPermission(`MANAGE_CHANNELS`) ||
      !message.member.hasPermission(`MANAGE_GUILD`)
    )
      return message.channel.send(
        `sorry, you need manage channels / manage guild permission to use this!`
      );

    var embed = new discord.MessageEmbed()
      //   .setAuthor(`help`, message.guild.iconURL)
      .setTitle(`Configuration For Logging\n----------------------`)
      .setColor("RED");
    var y = await db.get(`allenabled_${message.guild.id}`);
    if (y == "enabled") {
      embed.addField("logging deleted messages [1]", "enabled");
      embed.addField("logging created roles [2]", "enabled");
      embed.addField("logging deleted roles [3]", "enabled");
      embed.addField("logging bulk message deletes [4]", "enabled");
      embed.addField("logging member leaves/user kicks [5]", "enabled");
      embed.addField("logging member joins [6]", "enabled");
      embed.addField("logging guild bans [7]", "enabled");
      embed.addField("logging guild unbans [8]", "enabled");
      embed.addField("logging emoji creations [9]", "enabled");
      embed.addField("logging emoji deletions [10]", "enabled");
      embed.addField("logging channel creations [11]", "enabled");
      embed.addField("logging channel deletions [12]", "enabled");
      embed.addField(
        `----------------------`,
        `Commands: \n\`${prefix}log\` - to see logging commands\n\`${prefix}set [number] <#channel>\` - for setting up logs channel\n\`${prefix}enable [number]\` - enable the logging for a module\n\`${prefix}enable all\` - enable all logging modules \n\`${prefix}disable [number]\` - disable a logging module \n\`${prefix}disable all\` - disable all logging modules\n\`${prefix}reset\` - refreshes the bots entire cache for the server; everything set to default, with no logging channel`
      );

      //    var x = await db.get("loggingchannel_" + message.guild.id);
      //    if (x == null)
      //       embed.addField(
      //         `there is no logging channel set up for this server. to set one up, type:`,
      //         `\`${prefix}setchannel #channel\``
      //       );
      //      if (x !== null) {
      //       var y = client.channels.cache.get(x);
      //      embed.addField(
      //          `----------------------`,
      //          `logging channel rn is ${y}. to set up another channel, type **${prefix}setchannel #channel**`
      //       );
      //     }

      embed.setFooter(
        `Any Suggestions Hit Me Up: ${client.users.cache.get(bowner).tag}  `
      );
    } else if (y == "disabled") {
      embed.addField("logging deleted messages [1]", "disabled");
      embed.addField("logging created roles [2]", "disabled");
      embed.addField("logging deleted roles [3]", "disabled");
      embed.addField("logging bulk message deletes [4]", "disabled");
      embed.addField("logging member leaves/user kicks [5]", "disabled");
      embed.addField("logging member joins [6]", "disabled");
      embed.addField("logging guild bans [7]", "disabled");
      embed.addField("logging guild unbans [8]", "disabled");
      embed.addField("logging emoji creations [9]", "disabled");
      embed.addField("logging emoji deletions [10]", "disabled");
      embed.addField("logging channel creations [11]", "disabled");
      embed.addField("logging channel deletions [12]", "disabled");
      embed.addField(
        `----------------------`,
        `Commands: \n\`${prefix}log\` - to see logging commands\n\`${prefix}set [number] <#channel>\` - for setting up logs channel\n\`${prefix}enable [number]\` - enable the logging for a module\n\`${prefix}enable all\` - enable all logging modules \n\`${prefix}disable [number]\` - disable a logging module \n\`${prefix}disable all\` - disable all logging modules\n\`${prefix}reset\` - refreshes the bots entire cache for the server; everything set to default, with no logging channel`
      );
      //      var x = await db.get("loggingchannel_" + message.guild.id);
      //      if (x == null)
      //        embed.addField(hi
      //          `there is no logging channel set up for this server. to set one up, type:`,
      ///          `\`${prefix}setchannel #channel\``
      //        )
      //      if (x !== null) {
      //       var y = client.channels.cache.get(x);
      //        embed.addField(
      //         `----------------------`,
      //         `logging channel rn is ${y}. to set up another channel, type **${prefix}setchannel #channel**`
      //        );
      //     }
    } else {
      var x = await db.get("messagedelete_" + message.guild.id);

      if (x == null || x == "disabled") {
        embed.addField("logging deleted messages [1]", "disabled");
      } else {
        embed.addField("logging deleted messages [1]", "enabled");
      }
      var x = await db.get("rolecreate_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging created roles [2]", "disabled");
      } else {
        embed.addField("logging created roles [2]", "enabled");
      }
      var x = await db.get("roledelete_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging deleted roles [3]", "disabled");
      } else {
        embed.addField("logging deleted roles [3]", "enabled");
      }
      var x = await db.get("messagebulkdelete_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging bulk message deletes [4]", "disabled");
      } else {
        embed.addField("logging bulk message deletes [4]", "enabled");
      }
      var x = await db.get("guildmemberremove_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging member leaves/user kicks [5]", "disabled");
      } else {
        embed.addField("logging member leaves/user kicks [5]", "enabled");
      }
      var x = await db.get("guildmemberadd_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging member joins [6]", "disabled");
      } else {
        embed.addField("logging member joins [6]", "enabled");
      }
      var x = await db.get("guildbanadd_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging guild bans [7]", "disabled");
      } else {
        embed.addField("logging guild bans [7]", "enabled");
      }
      var x = await db.get("guildbanremove_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging guild unbans [8]", "disabled");
      } else {
        embed.addField("logging guild unbans [8]", "enabled");
      }
      var x = await db.get("emojicreate_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging emoji creations [9]", "disabled");
      } else {
        embed.addField("logging emoji creations [9]", "enabled");
      }
      var x = await db.get("emojidelete_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging emoji deletions [10]", "disabled");
      } else {
        embed.addField("logging emoji deletions [10]", "enabled");
      }
      var x = await db.get("channelcreate_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging channel creations [11]", "disabled");
      } else {
        embed.addField("logging channel creations [11]", "enabled");
      }
      var x = await db.get("channeldelete_" + message.guild.id);
      if (x == null || x == "disabled") {
        embed.addField("logging channel deletions [12]", "disabled");
      } else {
        embed.addField("logging channel deletions [12]", "enabled");
      }
      embed.addField(
        `----------------------`,
        `Commands: \n\`${prefix}log\` - to see logging commands\n\`${prefix}enable [number]\` - enable the logging for a module\n\`${prefix}enable all\` - enable all logging modules \n\`${prefix}disable [number]\` - disable a logging module \n\`${prefix}disable all\` - disable all logging modules\n\`${prefix}reset\` - refreshes the bots entire cache for the server; everything set to default, with no logging channel`
      );
      //    var x = await db.get("loggingchannel_" + message.guild.id);
      //      if (x == null)
      //        embed.addField(
      //          `there is no logging channel set up for this server. to set one up, type:`,
      //          `\`${prefix}setchannel #channel\``
      //        );
      //     if (x !== null) {
      //        var y = client.channels.cache.get(x);
      //       embed.addField(
      //        `----------------------`,
      //         `logging channel rn is ${y}. to set up another channel, type **${prefix}setchannel #channel**`
      //       );
      //      }
    }
    embed.setFooter(
      `Any Suggestions Hit Me Up: ${client.users.cache.get(bowner).tag}  `
    );

    embed.addField(`----------------------\n`, `[INVITE](${binvite})`);
    embed.setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed);
  }

  if (command == "reset") {
    if (!message.guild)
      return message.reply("use this command in a server pls");

    if (
      !message.member.hasPermission(`MANAGE_CHANNELS`) ||
      !message.member.hasPermission(`MANAGE_GUILD`)
    )
      return message.channel.send(
        `sorry, you need manage channels / manage guild permission to use this!`
      );

    await db.delete(`loggingchannel_${message.guild.id}`);
    await db.delete(`msglog_${message.guild.id}`);
    await db.delete(`chxlog_${message.guild.id}`);
    await db.delete(`dchxlog_${message.guild.id}`);
    await db.delete(`emojilog_${message.guild.id}`);
    await db.delete(`delog_${message.guild.id}`);
    await db.delete(`banlog_${message.guild.id}`);
    await db.delete(`unbanlog_${message.guild.id}`);
    await db.delete(`join_${message.guild.id}`);
    await db.delete(`leave_${message.guild.id}`);
    await db.delete(`bulk_${message.guild.id}`);
    await db.delete(`role_${message.guild.id}`);
    await db.delete(`drole_${message.guild.id}`);
    await db.delete(`allenabled_${message.guild.id}`);
    await db.delete(`messagedelete_${message.guild.id}`);
    await db.delete("rolecreate_" + message.guild.id);
    await db.delete("roledelete_" + message.guild.id);
    await db.delete("messagebulkdelete_" + message.guild.id);
    await db.delete("guildmemberremove_" + message.guild.id);
    await db.delete("guildmemberadd_" + message.guild.id);
    await db.delete("guildbanadd_" + message.guild.id);
    await db.delete("guildbanremove_" + message.guild.id);
    await db.delete("emojicreate_" + message.guild.id);
    await db.delete("emojidelete_" + message.guild.id);
    await db.delete("channelcreate_" + message.guild.id);
    await db.delete("channeldelete_" + message.guild.id);
    message.channel.send(
      `done, cleared all cache for this server. type \`${prefix}help\` to setup again.`
    );
  }
  if (command == "disable") {
    if (!message.guild)
      return message.reply("use this command in a server pls");
    if (
      !message.member.hasPermission(`MANAGE_CHANNELS`) ||
      !message.member.hasPermission(`MANAGE_GUILD`)
    )
      return message.channel.send(
        `sorry, you need manage channels / manage guild permission to use this!`
      );
    if (!args[0])
      return message.channel.send(
        `you need to specify a number with the event u want to not log. type \`${prefix}help\``
      );

    //   var x = await db.get("loggingchannel_" + message.guild.id);
    //
    //    if (x == null || x == "none") {
    //      return message.channel.send(
    //        `you haven't set up a logging channel for this guild. type \`${prefix}help\``
    //      );
    //    }

    if (args[0] > 12 || args[0] < 1)
      return message.reply(
        `type \`${prefix}help\` and find the number with what event u want to disable logging for`
      );

    switch (args[0]) {
      case "1":
        await db.set(`messagedelete_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging for deleted messages`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "2":
        await db.set(`rolecreate_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging for created roles`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "3":
        await db.set(`roledelete_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging for deleted roles`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "4":
        await db.set(`messagebulkdelete_${message.guild.id}`, "disabled");

        message.channel.send(
          `ok, disabled the logging for message bulk deletes`
        );

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "5":
        await db.set(`guildmemberremove_${message.guild.id}`, "disabled");

        message.channel.send(
          `ok, disabled the logging member leaves/user kicks`
        );

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "6":
        await db.set(`guildmemberadd_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging for new members`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "7":
        await db.set(`guildbanadd_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging banned users`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "8":
        await db.set(`guildbanremove_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging unbanned users`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "9":
        await db.set(`emojicreate_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging for emoji creations`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "10":
        await db.set(`emojidelete_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging for emoji deletions`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "11":
        await db.set(`channelcreate_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging for channel creations`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "12":
        await db.set(`channeldelete_${message.guild.id}`, "disabled");

        message.channel.send(`ok, disabled the logging for channel deletions`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "all":
        await db.set(`allenabled_${message.guild.id}`, "disabled");

        await db.set(`messagedelete_${message.guild.id}`, "disabled");

        await db.set("rolecreate_" + message.guild.id, "disabled");

        await db.set("roledelete_" + message.guild.id, "disabled");

        await db.set("messagebulkdelete_" + message.guild.id, "disabled");

        await db.set("guildmemberremove_" + message.guild.id, "disabled");

        await db.set("guildmemberadd_" + message.guild.id, "disabled");

        await db.set("guildbanadd_" + message.guild.id, "disabled");

        await db.set("guildbanremove_" + message.guild.id, "disabled");

        await db.set("emojicreate_" + message.guild.id, "disabled");

        await db.set("emojidelete_" + message.guild.id, "disabled");

        await db.set("channelcreate_" + message.guild.id, "disabled");

        await db.set("channeldelete_" + message.guild.id, "disabled");

        message.channel.send(
          `ok disabled logging for all events in this guild`
        );
    }
  }

  if (command == "enable") {
    if (!message.guild)
      return message.reply("use this command in a server pls");

    if (
      !message.member.hasPermission(`MANAGE_CHANNELS`) ||
      !message.member.hasPermission(`MANAGE_GUILD`)
    )
      return message.channel.send(
        `sorry, you need manage channels / manage guild permission to use this!`
      );

    if (!args[0])
      return message.channel.send(
        `you need to specify a number with the event u want to log. type \`${prefix}help\``
      );

    //    var x = await db.get("loggingchannel_" + message.guild.id);

    //   if (x == null || x == "none") {
    //      return message.channel.send(
    //        `you haven't set up a logging channel for this guild. type \`${prefix}help\``
    //     );
    //    }

    if (args[0] > 12 || args[0] < 1)
      return message.reply(
        `type \`${prefix}help\` and find the number with what event u want to enable logging for`
      );

    switch (args[0]) {
      case "1":
        await db.set(`messagedelete_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging for deleted messages`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "2":
        await db.set(`rolecreate_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging for created roles`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "3":
        await db.set(`roledelete_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging for deleted roles`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "4":
        await db.set(`messagebulkdelete_${message.guild.id}`, "enabled");

        message.channel.send(
          `ok, enabled the logging for message bulk deletes`
        );

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "5":
        await db.set(`guildmemberremove_${message.guild.id}`, "enabled");

        message.channel.send(
          `ok, enabled the logging member leaves/user kicks`
        );

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "6":
        await db.set(`guildmemberadd_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging for new members`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "7":
        await db.set(`guildbanadd_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging banned users`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "8":
        await db.set(`guildbanremove_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging unbanned users`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "9":
        await db.set(`emojicreate_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging for emoji creations`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "10":
        await db.set(`emojidelete_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging for emoji deletions`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "11":
        await db.set(`channelcreate_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging for channel creations`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "12":
        await db.set(`channeldelete_${message.guild.id}`, "enabled");

        message.channel.send(`ok, enabled the logging for channel deletions`);

        await db.delete(`allenabled_${message.guild.id}`);

        break;

      case "all":
        await db.set(`allenabled_${message.guild.id}`, "enabled");

        await db.set("rolecreate_" + message.guild.id, "enabled");

        await db.set(`messagedelete_${message.guild.id}`, "enabled");

        await db.set("roledelete_" + message.guild.id, "enabled");

        await db.set("messagebulkdelete_" + message.guild.id, "enabled");

        await db.set("guildmemberremove_" + message.guild.id, "enabled");

        await db.set("guildmemberadd_" + message.guild.id, "enabled");

        await db.set("guildbanadd_" + message.guild.id, "enabled");

        await db.set("guildbanremove_" + message.guild.id, "enabled");

        await db.set("emojicreate_" + message.guild.id, "enabled");

        await db.set("emojidelete_" + message.guild.id, "enabled");

        await db.set("channelcreate_" + message.guild.id, "enabled");

        await db.set("channeldelete_" + message.guild.id, "enabled");

        message.channel.send(`ok enabled logging for all events in this guild`);
    }
  }

  if (command == "msglog") {
    if (!message.guild)
      return message.reply("use this command in a server pls");

    if (
      !message.member.hasPermission(`MANAGE_CHANNELS`) ||
      !message.member.hasPermission(`MANAGE_GUILD`)
    )
      return message.channel.send(
        `sorry, you need manage channels / manage guild permission to use this!`
      );

    if (!args[0] || args[1])
      return message.reply(
        `please specify the channel, like so: \`${prefix}setchannel #channel\``
      );

    x = message.mentions.channels.first();

    if (!x)
      return message.channel.send(
        `please specify the channel, like so: \`${prefix}setchannel #channel\``
      );

    await db.set(`loggingchannel_${message.guild.id}`, x.id);

    //   message.channel.send(`ok, logging channel for this guild set to ${x}`);
  }
});

client.on("error", e => {
  console.log(e);
});

client.login(process.env.TOKEN).catch(e => console.log(e));
