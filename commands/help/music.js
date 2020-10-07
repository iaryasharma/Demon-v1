const discord = require("discord.js");

module.exports = {
  name: "music",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT WILL SOON NEW FEATURES `)
      .setDescription(
        `
__**MUSIC COMMAND**__
\`P!play\` :- give name of song or link
\`P!search\` :- give title of song
\`P!skip\`:- skip the song
\`P!stop\` :- stop the song
\`P!pause\`:- pause the songo\P!resume\`:- resume the song
<`P!nowplaying\` :-  now playing songs
<`P!queue\` :- give list of queue songs
<`P!volume\` :- set volume 0 to 100

[Support Server]() 
`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`PARAS DEVELOPER `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

  }
};
