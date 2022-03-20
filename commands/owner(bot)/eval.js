const discord = require("discord.js"),
  disbut = require("discord-buttons");
const { prefix, owner } = require("../../config.json");

module.exports = {
  name: "eval",
  category: "moderation",
  usage: "eval",
  description: "",

  run: async (client, message, args) => {
    if (!client.config.owner.includes(message.author.id)) return;
    const next = new disbut.MessageButton()
      .setStyle("red")
      .setLabel("❎ Cancel")
      .setID("eval_cancel")
      .setDisabled(false);

    const back = new disbut.MessageButton()
      .setStyle("green")
      .setLabel("✅ Continue")
      .setID("eval_ok")
      .setDisabled(false);

    let extra = new disbut.MessageButton()
      .setStyle("blurple")
      .setLabel("⭐ Extra")
      .setID("eval_extra")
      .setDisabled(false);

    let row = new disbut.MessageActionRow()
      .addComponent(back)
      .addComponent(next)
      .addComponent(extra);

    const embed = new discord.MessageEmbed()
      .setTitle("Eval Command")
      .setColor("RED");

    message.channel
      .send(embed, {
        components: [row],
      })
      .then((m) => {
        setTimeout(function () {
          let m1 = message.channel.messages.cache.get(m.id);
          if (!m1) {
            return;
          } else if (m1) {
            next.setDisabled(true);
            back.setDisabled(true);
            extra.setDisabled(true);
            let row = new disbut.MessageActionRow()
              .addComponent(back)
              .addComponent(next)
              .addComponent(extra);
            m.edit(embed, {
              components: [row],
            });
          }
        }, 25000);
        client.on("clickButton", async (button) => {
          if (button.clicker.id !== message.author.id) return;
          if (button.message.id !== m.id) return;
          if (button.id == "eval_cancel") {
            return m.delete();
          } else if (button.id === "eval_ok") {
            button.reply.defer();
            try {
              let cmd = message.content.split(" ").slice(1).join(" ");
              const result = eval(cmd);
              embed
                .addFields({
                  name: "Input:",
                  value: `\`\`\`js\n${args}\`\`\``,
                  inline: false,
                })
                .setDescription(`**Output:**\n\`\`\`js\n${result}\`\`\``);
              back.setDisabled(true);
              row = new disbut.MessageActionRow()
                .addComponent(back)
                .addComponent(next)
                .addComponent(extra);

              await m.edit(embed, {
                components: [row],
              });
            } catch (e) {
              m.delete();
              message.lineReply("```js\n" + e + "\n```");
            }
          } else if (button.id === "eval_extra") {
            button.reply.defer();
            try {
              let cmd = message.content.replace("*eval", ""),
                result = eval(cmd);
              extra.setDisabled(true);
              row = new disbut.MessageActionRow()
                .addComponent(back)
                .addComponent(next)
                .addComponent(extra);

              await m.edit(embed, {
                components: [row],
              });
              try {
                await message.lineReply(result);
              } catch (e) {
                await message.lineReply("```js\n[object Promise]\n```");
              }
            } catch (e) {
              m.delete();
              message.lineReply("```js\n" + e + "\n```");
            }
          }
        });
      });
  },
};
