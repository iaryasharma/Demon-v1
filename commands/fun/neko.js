const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
name: "neko",
category: "fun",
usage: "neko", 
description: "Get fresh Neko image :D",
run: async (client, message, args) => {

let data = await random.getNeko()
    message.channel.send(data)


}
}