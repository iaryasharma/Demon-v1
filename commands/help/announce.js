const Discord = require("discord.js");
const { prefix } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

//const { prefix } = require("../config.json");

module.exports = {
  name: "announce",
  aliases: ["a", "announce"],
  category: "embed",
  usage: "`announce <#channel> then wait..`",
  description: "Embeds Your Given Message",

  run: async (client, message, args) => {
    if (!message.guild.me.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Embed Links`
      );

    if (!message.member.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Embed Links`
      );

    let chan =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);

    if (!chan)
      return message.channel.send(
        "**Usage:** `" +
          prefix +
          "announce #channel or " +
          prefix +
          "a #channel then follow the procedure`"
      );

    let embed = new Discord.MessageEmbed();

    message

      .reply("Set the title of Your Embed Message? if none then type `none`")

      .then(m => m.delete({ timeout: 30000 }));

    let title = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,

      {
        max: 1,

        time: 30000
      }
    );

    if (title.size) {
      if (title.first().content !== "none") {
        if (title.first().length > 256)
          return message

            .reply("Title Can Not Exceed 2048 characters.")

            .then(m => m.delete({ timeout: 5000 }));

        embed.setTitle(title.first().content);
      }
    }

    message

      .reply("Set description of Your embed Message? if none then type `none`")

      .then(m => m.delete({ timeout: 30000 }));

    let description = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,

      {
        max: 1,

        time: 30000
      }
    );

    if (description.size) {
      if (description.first().content !== "none") {
        if (description.first().length > 2048)
          return message

            .reply("Description Can Not Exceed 2048 Characters.")

            .then(m => m.delete({ timeout: 5000 }));

        embed.setDescription(description.first().content);
      }
    }

    message

      .reply(
        "Set Image You Want To Add In Embed?(Send Link Only) if none then type `none`"
      )

      .then(m => m.delete({ timeout: 30000 }));

    let image = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,

      {
        max: 1,

        time: 30000
      }
    );

    if (image.size) {
      if (image.first().content !== "none") {
        if (!/\.(jpe?g|png|gif)$/i.test(image.first().content)) {
          return message

            .reply("that was not a valid URL.")

            .then(m => m.delete({ timeout: 5000 }));
        }

        embed.setImage(image.first().content);
      }
    }

    message

      .reply(
        "Set Thumbnail You Want To Add In Embed?(Send Link Of Image) if none then type `none`"
      )

      .then(m => m.delete({ timeout: 30000 }));

    let thumb = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,

      {
        max: 1,

        time: 30000
      }
    );

    if (image.size) {
      if (image.first().content !== "none") {
        if (!/\.(jpe?g|png|gif)$/i.test(image.first().content)) {
          return message

            .reply("that was not a valid URL.")

            .then(m => m.delete({ timeout: 5000 }));
        }

        embed.setThumbnail(thumb.first().content);
      }
    }

    message;

    message

      .reply(
        "Set the Color of the Embed Message? HEX CODE (Example:`#000000`) Or coulour name Be like `RED, BLUE` All in Caps."
      )

      .then(m => m.delete({ timeout: 30000 }));

    let color = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,

      {
        max: 1,

        time: 30000
      }
    );

    embed.setColor(color.first().content);

    message

      .reply("Set The Footer of Your Embed Message? if none then type `none`")

      .then(m => m.delete({ timeout: 30000 }));

    let footer = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,

      {
        max: 1,

        time: 30000
      }
    );

    if (footer.size) {
      if (footer.first().content !== "none") {
        if (footer.first().length > 2048)
          return message

            .reply("Footer can not exceed 2048 characters.")

            .then(m => m.delete({ timeout: 5000 }));

        embed.setFooter(footer.first().content);
      }
    }

    chan.send(embed);
  }
};
