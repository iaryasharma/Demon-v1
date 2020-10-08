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
\`play\` :- give name of song or link
\`search\` :- give title of song
\`skip\`:- skip the song
\`stop\` :- stop the song
\`pause\`:- pause the song
\`resume\`:- resume the song
\`nowplaying\` :-  now playing songs
\`queue\` :- give list of queue songs
\`volume\` :- set volume 0 to 100

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
