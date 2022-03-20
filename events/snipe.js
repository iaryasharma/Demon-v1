module.exports = function(client, options) {
  const description = {
    name: "snipe",
    filename: "snipe.js",
    version: "1.2.0",
  };
  client.snipes = new Map();
  console.log(
    ` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`
  );

  client.on("messageDelete", async (message) => {
    try {
      client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.tag,
        image: message.attachments.first()
          ? message.attachments.first().proxyURL
          : null,
      });

    } catch (e) {
      console.log(e)
    }
  })

}