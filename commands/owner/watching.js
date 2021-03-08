const { prefix, owner } = require("../../config.json");
module.exports = {
  name: "watching",
  description: "",
  async run(client, message, args) {
    if (message.author.id !== owner) return;
    const activity = args.join(" ");
    client.user.setActivity(activity, {
      type: "WATCHING"
    });
    message.delete();
    await message.channel
      .send(`Set Activity WATCHING ${activity}`)
      .then(msg => {
        msg.delete({ timeout: 10000 });
      });
  }
};