module.exports = {
    name: "policy",
    description: "Returns Random Number from Mentioned Limit",
    run(client, message, args) {
      const discord = require("discord.js");
  
      if (!message.guild.me.hasPermission("EMBED_LINKS"))
        return message.lineReplyNoMention(
          "I NEED **`EMBED_LINKS`** PERMISSION RUN THIS COMMAMD"
        );
      const embed = new discord.MessageEmbed()
        .setTitle(
          " PRIVACY POLICY "
        )
        .addField(
          "<:P_RightArrow:933034063428714556> What Data Stored",
          "1. Server id is stored for customizable prefix and channel id is stored for welcome channel.\n\n2. When the bot is removed form the server it does not delete the id's.\n\n3. Deleted messages, Edited messages are logged in log channel of server (if enabled)."
        )
        .addField(
          "<:P_RightArrow:933034063428714556> Data Security",
          "1. We do not use anyone personal data for ourselves.\n\n2. We do not share your data with 3rd party.\n\n3. We do not store anyone's data without permission.\n\n4. User can opt out if they don't want their messages logged (bot will blacklist logging for user and will not log any data of user). "
        )
        .addField(
          "<:P_RightArrow:933034063428714556> FAQ or Concerns",
          "If you have any issue regarding anything join support server"
        )
        .addField(
          "<:P_Discord:933029890272399460> Support Server",
          "[Support](https://discord.gg/zvynSK7Crk)"
        )
        .setColor("#01feae")
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(" Demon privacy Policy",
          client.user.displayAvatarURL()
        );
      message.channel.send(embed);
    }
  };
