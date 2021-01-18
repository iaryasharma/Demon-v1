const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "welcometest",
  aliases: ["wtest"],
  category: "moderation",
  description: "Test the welcome",
  run: async (client, message, args) => {
    let member = message.mentions.users.first() || message.author;

    let default_url = `https://cdn.discordapp.com/attachments/696417925418057789/716197399336583178/giphy.gif`; //default msg mtt change krna yeh hyper ke liye lagaye hai ek baar custom msg shi ho gaya toh isko bhi shi kr denge

    let default_msg = `

𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎
USER :- ${member}
SERVER :- ${member.guild}
𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎`;

    let msg = db.get(`msg_${member.guild}`);
    if (msg === null) msg = default_msg;

    let url = db.get(`url_${member.guild}`);
    if (url === null) url = default_url;

    let embed = new discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setImage(url)
      .setDescription(msg);

    message.channel.send(embed);
  }
};
