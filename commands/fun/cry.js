const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
name: "nekocry",
category: "fun",
usage: "nekocry", 
description: "Get fresh Neko cry image :D",
run: async (client, message, args) => {

let data = await random.getAnimeImgURL("cry")
    message.channel.send(data)


}
}