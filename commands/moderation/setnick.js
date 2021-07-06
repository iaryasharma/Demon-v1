/*const { prefix } = require("../../config.json");

module.exports = {
  name: "setnick",
  aliases: ["nick"],
  description: "Sets Mentioned Nickname To Mentioned User",
  usage: `\`${prefix}setnick <User> <Nickname>\``,
  run(client, message, args) {
    if (!message.guild.me.permissions.has("MANAGE_NICKNAMES"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Manage NickNames`
      );
    if (!message.member.permissions.has("MANAGE_NICKNAMES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Manage NickNames`
      );
    const member = message.mentions.members.first();
    if (
      message.guild.me.roles.highest.position <= member.roles.highest.position
    )
      return message.reply(
        `My Role isn't High Enough to Change The Nickname! ${member}`
      );
    if (message.member.roles.highest.position <= member.roles.highest.position)
      return message.reply(
        `Your Role isn't High Enough to Change The Nickname! ${member}`
      );
    if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);
    if (!args[1]) {
      member.setNickname(member.user.username);
      message.channel.send(
        `Changed Nickname of ${member} to ${member.user.username}`
      );
    }
    message.delete();
    const nick = args.join(" ").slice(22);
    member.setNickname(nick);
    message.channel
      .send(`Changed Nickname of ${member} to ${nick}`)
      .then(msg => {
        msg.delete({ timeout: 10000 });
      });
  }
};
*/