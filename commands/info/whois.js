const { MessageEmbed } = require("discord.js")
const moment = require("moment")

module.exports = {
  name: "whois",
  aliases: ["userinfo"],
  category: "info",
  description: "Get info of any user",
  run: async (client, message, args) => {
    
    let target
    
    if(message.mentions.users.first()) {
      target = message.mentions.users.first();
    } else if(args[0]) {
        target = message.guild.members.cache.get(args[0]).user;
      } else {
        target = message.author
      }
    
    if (target.presence.status === "dnd") target.presence.status = "Do Not Disturb <:GC_dnd:809988528905650176>";
    if (target.presence.status === "idle") target.presence.status = "Idle <:GC_idle:809987685216550943>";
    if (target.presence.status === "online") target.presence.status = "Online <:GC_online:809987738761297920>";
    if (target.presence.status === "offline") target.presence.status = "Offline <:GC_offline:809988078067253280>";
    
    function game() {
      let game;
      if (target.presence.activities.length >= 1) game = `${target.presence.activities[0].type} ${target.presence.activities[0].name}`;
      else if (target.presence.activities.length < 1) game = "None";
      return game;
    }
    
    let x = Date.now() - target.createdAt;
    let y = Date.now() - message.guild.members.cache.get(target.id).joinedAt;
    let created = Math.floor(x / 86400000);
    let joined = Math.floor(y / 86400000);
    
    const member = message.guild.member(target);
    let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
    let status = target.presence.status;
    let avatar = target.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    let createdate = moment.utc(target.createdAt).format("ddd, Do MMMM YYYY");
    let joindate = moment.utc(target.joinedAt).format("ddd, Do MMMM YYYY");
    let flags = target.flags.toArray();
    if(target.flags.toArray() < 1) flags = "None";
    
    const embed = new MessageEmbed()
    .setAuthor(target.tag, avatar)
    .setThumbnail(avatar)
    .setDescription(
      `
**<a:GC_arrow:810003254485450802> Name:** ${target.username}

**<a:GC_arrow:810003254485450802> ID:** ${target.id}

**<a:GC_arrow:810003254485450802> Nickname:** ${nickname}

**<a:GC_arrow:810003254485450802> Account Creation:** ${createdate} | ${created} day(s) ago

**<a:GC_arrow:810003254485450802> Server Joined At:** ${joindate} | ${joined} day(s) ago

**<a:GC_arrow:810003254485450802> Status:** ${status}

**<a:GC_arrow:810003254485450802> Game:** ${game()}

**<a:GC_arrow:810003254485450802> Badges:** ${flags}

**<a:GC_arrow:810003254485450802> Roles:** <@&${member._roles.join('> <@&')}>`)
    .setColor("RANDOM")
    .setFooter(`Asked by ${message.author.username}`, aicon  )
    .setTimestamp()
    
    message.channel.send(embed)
    
  }
}