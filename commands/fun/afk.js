const message = '+afk doing homework';
const reason = message.split('+afk ')[1];
console.log(reason);

module.exports = {
  name: "advice",
  category: "fun",
  description: "Get some advice",
  run: async (client, message, args) => {

if (message.content.startsWith('+afk')) {
      message.channel.send('Aight, I have set your AFK. I will send a message to the users who mention you..')
// then here you use the database :
db.set(message.author.id + '.afk','true')
db.set(message.author.id + '.messageafk', message.content.split(' ').slice(2))
    }
    if (message.content.includes('+afk off')) {
db.delete(message.author.id + '.afk')
db.delete(message.author.id + '.messageafk')
    }
});