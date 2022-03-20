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
      default_msg = `<a:GC_star:810009286129876992> **WELCOME ${member} TO ${member.guild}**<a:GC_star:810009286129876992> 
  
**━━━━━━━━━━━━━━━━━━━━━**

<a:GC_Pin:818795895856037898> **MAKE SURE TO READ RULES** 

<a:GC_Pin:818795895856037898> **TAKE SELF ROLES **

<a:GC_Golden_Heart:818793534533926953> **ENJOY YOUR STAY HERE**

`;

 let createdate = moment.utc(member.createdAt).format("ddd, Do MMMM YYYY");
    let m1 = db.get(`msg_${member.guild.id}`);
    if (!m1 || m1 === null) { m1 = default_msg; }
    const msg = m1
      .replace("{joined}", createdate)
      .replace("{member}", member.user)
      .replace("{member.guild}", member.guild)
      .replace("{server}", member.guild)
      .replace("{member.user.tag}", member.user.tag)
      .replace("{tag}", member.user.tag)
      .replace("{member.user.usercount}", member.user.usercount)
      .replace("{membercount}", member.user.usercount);

    let url = db.get(`url_${member.guild.id}`);
    if (url === null) url = default_url;
    let colour = db.get("welClr" + member.guild.id)
    if (!colour) {
      colour = client.embed.cm
    }
    let wembed = new discord.MessageEmbed()
      .setAuthor(member.guild)
      .setTitle("━━━━━━━━━━━━━━━━━")
      .setColor(colour)
      .setImage(url)
      .setTimestamp()
      .setDescription(msg)
      .setFooter(
        member.user.tag, member.user.displayAvatarURL({ dynamic: true })
      )

    if (ust === true) {
      wembed.addField(
        "━━━━━━━━━━━━━━━━━━━━━",
      `

<a:GC_check:810001170734120990> **MEMBER USERNAME :-** __**${member.user.tag}**__

<a:GC_check:810001170734120990> **MEMBER JOINED AT :-** __**${createdate}**__

<a:GC_check:810001170734120990> **MEMBER COUNT :-** **__${member.guild.memberCount}__**

`
      )
    }
    wembed.addField(
      "━━━━━━━━━━━━━━━━━━━━━",
      `

<a:GC_Golden_Heart:818793534533926953> **THANKS FOR JOINING ${member.guild}** <a:GC_Golden_Heart:818793534533926953>`
    );
    try {
      if (ment === true) {
        await nchx.send(
          "**<@" + member.user.id + "> Welcome To " +
          member.guild.name + "**",
          wembed
        );
      } else {
        await nchx.send(wembed);
      }
    } catch (e) {
      return client.web.send(
        "```js\n" + e.message + "\n in "
        + member.guild.name + " in non embed welcomer\n```"
      )
    }
  })
}