const db = require("quick.db"),
  discord = require("discord.js"),
  moment = require("moment"),
  ms = require("ms")

module.exports = function(client, options) {
  const description = {
    name: "embed-welcomer",
    filename: "embedwel.js",
    version: "1.0.0",
  };
  console.log(
    ` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`
  );
  client.on("guildMemberAdd", async (member) => {
    let chx = db.get(`welchannel_${member.guild.id}`),
      ment = db.get("mention" + member.guild.id),
      ust = db.get("userinfo" + member.guild.id)

    if (chx === null) {
      return;
    }
    let nchx = member.guild.channels.cache.get(chx),
      default_url = client.gif.wel,
      default_msg = 
  
**━━━━━━━━━━━━━━━━━━━━━**

<a:GC_Pin:818795895856037898> **MAKE SURE TO READ RULES** 

<a:GC_Pin:818795895856037898> **TAKE SELF ROLES **

<a:GC_Golden_Heart:818793534533926953> **ENJOY YOUR STAY HERE**

`;

  let m1 = db.get(`msg_${member.guild.id}`);
  if (!m1) m1 = default_msg;
  const msg = m1
    .replace("{member}", member.user)
    .replace("{member.guild}", member.guild)
    .replace("{member.user.tag}", member.user.tag)
    .replace("{member.user.usercount}", member.user.usercount);

  // let data = await canva.welcome(member, {
  //   link: "https://wallpapercave.com/wp/wp5128415.jpg"
  // });

  let url = db.get(`url_${member.guild.id}`);
  if (url === null) url = default_url;
  let createdate = moment.utc(member.createdAt).format("ddd, Do MMMM YYYY");

  // let link = db.get(`link_${member.guild.id}`);
  //if (link === null) link = link;

  //const attachment = new discord.MessageAttachment(data, "welcome-image.png");

  let wembed = new discord.MessageEmbed()
    .setAuthor(member.guild)
    .setTitle("━━━━━━━━━━━━━━━━━━━━━")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor("#ff0073")
    .setImage(url)
    .setTimestamp()
    .setDescription(msg)
    .setFooter(member.guild, member.guild.iconURL())
    .addField(
      "━━━━━━━━━━━━━━━━━━━━━",
      `

<a:GC_check:810001170734120990> **MEMBER USERNAME :-** __**${member.user.tag}**__

<a:GC_check:810001170734120990> **MEMBER JOINED AT :-** __**${createdate}**__

<a:GC_check:810001170734120990> **MEMBER COUNT :-** **__${member.guild.memberCount}__**

`
    )
    .addField(
      "━━━━━━━━━━━━━━━━━━━━━",
      `

<a:GC_Golden_Heart:818793534533926953> **THANKS FOR JOINING ${member.guild}** <a:GC_Golden_Heart:818793534533926953>`
    );

  client.channels.cache.get(chx).send(wembed);
  //  client.channels.cache.get(chx).send(attachment);
  });