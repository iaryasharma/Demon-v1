const { prefix, owner } = require("../../config.json");

module.exports = {
  name: "voicekick",
  aliases: ["vkick", "vckick", "voicekick"],
  description: "Kicks Mentioned User From Voice Channel",
  usage: `\`${prefix}voicekick <User>\``,
  execute(bot, message, args) {
    if (!message.guild.me.permissions.has("MOVE_MEMBERS"))
      return message.channel.send(
        "I Don't Have Permission To Use This Command! Move Members"
      );
    if (!message.member.permissions.has("MOVE_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Move Members`
      );
    const target =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!target) return message.channel.send(`Usage: ${this.usage}`);

    let { channel } = message.mentions.members.first().voice;
    if (!channel)
      return message.channel.send(`User Is Not In Any Voice Channel!`);
    if (target.id === `${owner}`)
      return message.channel.send(`I Cannot Voicekick My Owner!`);
    target.voice.kick();

    message.channel.send(`User Has Been Kicked From Voice Channel!`);
  }
};