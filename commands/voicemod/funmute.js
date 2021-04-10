const discord = require("discord.js");

module.exports = {
   name: "funmute",
   aliases: ['fum','foceunmute'],
   description: "Mutes everyone mic",
   run: async(client, message, args) => {
   var a = message.id;
  if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply("You do not have the permission to do that!");
  if (!message.member.voice.channel) return message.reply("You are not in a voice channel!");
  var user = message.mentions.members.first();

  if (!user) return message.reply("Whom do you wanna unmute?");
  let channel = message.member.voice.channel;
  var found = 0;
  for (let memberi of channel.members) {
    if (memberi[1] == user) {
      found++;
    }
  }
  if (found == 1) {
    await user.voice.setMute(false);
    message.channel.send(`<:Demon_VcUnmute:829767930451329085> ${user} unmuted ${message.author} mic`);
    message.channel.messages.fetch(a).then(msg => msg.delete({ timeout: 1000 }));
  }
  else {
    message.channel.send("You are not in the same channel!!");
    message.channel.messages.fetch(a).then(msg => msg.delete({ timeout: 1000 }));
  }
}
}
