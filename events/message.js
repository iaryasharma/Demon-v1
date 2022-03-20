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
          const heis = client.guilds.cache.get("739419850614767707");
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
          }
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