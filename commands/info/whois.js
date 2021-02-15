const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const Badges = require('./badges');

module.exports = {
  name: "whois",
  aliases: ["userinfo"],
  category: "info",
  description: "Get info of any user",
  run: async (client, message, args) => {
    let target;
    let Flags;

		let flags;

		if (!user) {

			throw new Error('No user is provided.');

		}

		if (user.flags === null) {

			throw new Error('The provided user doesn\'t have any Discord Badge.');

		} else {

			Flags = user.flags.toArray();

			flags = Flags.filter(b => !!Badges[b]).map(m => Badges[m]);

			if (user.avatar && user.avatar.startsWith('a_')) {

				flags.push(Badges['DISCORD_NITRO']);

			}

			return flags;

		}

	
    if (message.mentions.users.first()) {
      target = message.mentions.users.first();
    } else if (args[0]) {
      target = message.guild.members.cache.get(args[0]).user;
    } else {
      target = message.author;
    }

    if (target.presence.status === "dnd")
      target.presence.status = "Do Not Disturb <a:GC_dnd1:810010114379481128>";
    if (target.presence.status === "idle")
      target.presence.status = "Idle <a:GC_idle1:810010145622982656>";
    if (target.presence.status === "online")
      target.presence.status = "Online <a:GC_online1:810010059446812683>";
    if (target.presence.status === "offline")
      target.presence.status = "Offline <a:GC_offline1:810010019084107787>";
    if (target.flags.toArray === "HOUSE_BRILLIANCE")
      target.flags.toArray = "Brilliance <:brilliance:810581344077348915>";

    function game() {
      let game;
      if (target.presence.activities.length >= 1)
        game = `${target.presence.activities[0].type} ${target.presence.activities[0].name}`;
      else if (target.presence.activities.length < 1) game = "None";
      return game;
    }

    let x = Date.now() - target.createdAt;
    let y = Date.now() - message.guild.members.cache.get(target.id).joinedAt;
    let created = Math.floor(x / 86400000);
    let joined = Math.floor(y / 86400000);

    const member = message.guild.member(target);
    let nickname =
      member.nickname !== undefined && member.nickname !== null
        ? member.nickname
        : "None";
    let status = target.presence.status;
    let avatar = target.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    let createdate = moment.utc(target.createdAt).format("ddd, Do MMMM YYYY");
    let joindate = moment.utc(target.joinedAt).format("ddd, Do MMMM YYYY");
    Flags = user.flags.toArray();

			flags = Flags.filter(b => !!Badges[b]).map(m => Badges[m]);

			if (user.avatar && user.avatar.startsWith('a_')) {

				flags.push(Badges['DISCORD_NITRO']);

			}

			return flags;

    const embed = new MessageEmbed()
      .setAuthor(target.tag, avatar)
      .setThumbnail(avatar)
      .setDescription(
        `
**<a:GC_check:810001170734120990> Name:** ${target.username}

**<a:GC_check:810001170734120990> ID:** ${target.id}

**<a:GC_check:810001170734120990> Nickname:** ${nickname}

**<a:GC_check:810001170734120990> Account Creation:** ${createdate} | ${created} day(s) ago

**<a:GC_check:810001170734120990> Server Joined At:** ${joindate} | ${joined} day(s) ago

**<a:GC_check:810001170734120990> Status:** ${status}

**<a:GC_check:810001170734120990> Game:** ${game()}

**<a:GC_check:810001170734120990> Badges:** ${flags}

**<a:GC_check:810001170734120990> Roles:** <@&${member._roles.join("> <@&")}>`
      )
      .setColor("RANDOM")
      .setFooter(`Asked by ${message.author.username}`, aicon)
      .setTimestamp();

    message.channel.send(embed);
  }
};
