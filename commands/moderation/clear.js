module.exports = {
  name: "purge",

  aliases: ["clear", "clean", "purge"],

  description: "Deletes Given Number Of Messages",

  async run(client, message, args) {
    if (!message.guild.me.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Manage Messages`
      );

    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Manage Messages`
      );

    try {
      if (message.mentions.users.size > 0) {
        let amountToDelete = args[1];

        if (!args[1]) amountToDelete = 50;

        console.log(amountToDelete);

        if (parseInt(amountToDelete) > 100)
          return message.channel.send(
            "Invalid arguments, integer may not exceed `100`."
          );

        let userMessages = await message.channel.messages.fetch({
          limit: parseInt(amountToDelete)
        });

        let userFilter = userMessages.filter(
          obj => obj.author.id === message.mentions.users.first().id
        );

        message.channel.bulkDelete(userFilter);

        message.channel.send("done.").then(m => m.delete({ timeout: 3000 }));

        return;
      }

      if (args[0] === "bots") {
        let awaitBotMessages = await message.channel.messages.fetch({
          limit: 100
        });

        let botFilter = awaitBotMessages.filter(obj => obj.author.bot);

        message.channel.bulkDelete(botFilter);

        message.channel.send("done.").then(m => m.delete({ timeout: 5000 }));

        return;
      }

      if (args[0] === "images") {
        let awaitImageMessages = await message.channel.messages.fetch({
          limit: 100
        });

        let imageFilter = awaitImageMessages.filter(
          obj => obj.attachments.size > 0
        );

        message.channel.bulkDelete(imageFilter);

        message.channel.send("done.").then(m => m.delete({ timeout: 5000 }));

        return;
      }

      if (args[0] === "all") {
        let messages = 0;

        let i = true;

        while (i) {
          let deleteAble = await message.channel.messages.fetch({ limit: 100 });

          if (deleteAble.size < 100) {
            await message.channel.bulkDelete(deleteAble);

            messages += deleteAble.size;

            i = false;

            message.channel.send("Deleted " + messages + " messages.");

            messages = 0;

            return;
            
          }

          await message.channel.bulkDelete(deleteAble);

          messages += deleteAble.size;
          
        }
      } else if (typeof parseInt(args[0]) == "number") {
        if (parseInt(args[0]) > 100)
          return message.channel.send(
            `must be a valid integer below or exact 100, otherwise use !purge all.`
          );

        let messages = await message.channel.messages.fetch({
          limit: parseInt(args[0])
         });

        message.channel.bulkDelete(messages).then(m => {
          message.channel.send("Deleted **" + m.size + "** messages.").then(m =>
            setTimeout(() => {
              m.delete();
            }, 4000)
          );
        });
      }
      message.delete();
    } catch (error) {
      message.channel.send(`${error}`);
    }
  }
};
