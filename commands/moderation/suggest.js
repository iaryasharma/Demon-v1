const { MessageEmbed, Discord } = require('discord.js')

module.exports = {
  name: "suggestion",
  decreption: "suggestion",
  aliases: ["suggest"]
}

module.exports.run = async function(client, message, args) {
  
  if (!args.length) {
      return message.channel.send("Please Give the Suggestion");
    }

  let issue = args.join(" ")
  let channelForReportLogs = client.channels.cache.get("862909265773330432");
  
  let embed = new MessageEmbed()
    .setTitle("SUGGESTION")
    .setDescription(issue)
    .setColor("#ff0000")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp();
  channelForReportLogs.send(embed).then(m => {
      m.react("<a:GC_right:810000945562910761> ");
      m.react("<a:GC_wrong:810000635113635840>");
    });
  
  return message.channel.send(":white_check_mark: **The suggestion has been submitted, thank you**");
  }