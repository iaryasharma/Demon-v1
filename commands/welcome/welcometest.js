const discord = require("discord.js");
const { prefix } = require("../../config.json");
const db = require("quick.db");

module.exports = {
  name: "welcomeexample",

  aliases: ["wexample"],

  category: "moderation",

  description: "Test the welcome",

  run: async (client, message, args) => {
    let member = message.mentions.users.first() || message.author;

    let default_url = `https://cdn.discordapp.com/attachments/758912722821185557/814740225732640778/tenor.gif`; //default msg mtt change krna yeh hyper ke liye lagaye hai ek baar custom msg shi ho gaya toh isko bhi shi kr denge

    let default_msg = `
    You Can Change This By Using \n\n${prefix}setwelcomemessage <msg> or ${prefix}setwmsg <msg> \n\nUse ${prefix}setwimg <url> to change default image \n\nall other things except these cannot be changed.
`;

    let msg = db.get(`msg_${member.guild}`);

    if (msg === null) msg = default_msg;

    let url = db.get(`url_${member.guild}`);

    if (url === null) url = default_url;

    let embed = new discord.MessageEmbed()

      .setAuthor(
        message.author.username,
        message.author.avatarURL({ dynamic: true, size: 2048 })
      )

      //    .setThumbnail(
      //      message.author.displayAvatarURL({ dynamic: true, size: 2048 })
      //   )

      .setColor("RANDOM")
      .addField(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",

        `

<a:GC_check:810001170734120990> **MEMBER USERNAME :-** __**${message.author.tag}**__

<a:GC_check:810001170734120990> **MEMBER COUNT :-** **__${message.guild.memberCount}__**

`
      )

      .addField(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",

        `

<a:GC_Golden_Heart:818793534533926953> **THANKS FOR JOINING ${message.guild}** <a:GC_Golden_Heart:818793534533926953>`
      )

      .setAuthor(message.guild)
      .setTitle("━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
      // .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setImage(url)
      .setTimestamp()
      .setDescription(msg)
      .setFooter(message.author.tag, message.author.displayAvatarURL());

    message.channel.send(embed);
  }
};
