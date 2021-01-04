const message = '+afk doing homework';
const reason = message.split('+afk ')[1];
console.log(reason);

module.exports = {
  name: "afk",
  category: "fun",
  description: "Sets user afk",
  run: async ('message', (message) => {

 // checks if the message author is afk

 if (db.has(message.author.id + '.afk')) {

  message.channel.send(`Welcome back ${message.author} I removed your AFK.`);

  db.delete(message.author.id + '.afk');

  db.delete(message.author.id + '.messageafk');

 }

 if (message.content.startsWith('+afk')) {

  message.channel.send(

   'Aight, I have set your AFK. I will send a message to the users who mention you..'

  );

  // then here you use the database :

  db.set(message.author.id + '.afk', 'true');

  db.set(

   message.author.id + '.messageafk',

   message.content.split(' ').slice(2)

  );

 }

 if (message.content.includes('+afk off')) {

  db.delete(message.author.id + '.afk');

  db.delete(message.author.id + '.messageafk');

 }

});