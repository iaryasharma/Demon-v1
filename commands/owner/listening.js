const { prefix, owner } = require("../../config.json");
module.exports = {
  name: "listening",

  description: "",

  async run(client, message, args) {
        if (message.author.id !== owner) return;

    const activity = args.join(" ");

    client.user.setActivity(activity, {
      type: "LISTENING"
    });
    message.delete();

    await message.channel
      .send(`Set Activity LISTENING to ${activity}`)

      .then(msg => {
        msg.delete({ timeout: 10000 });
      });
  }
};
