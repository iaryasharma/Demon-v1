const { owners } = require("../../config.json")
const { prefix, owner } = require("../../config.json");

module.exports = {
  name: 'reload',
  aliases: [],
  ownerOnly: true,
  group: 'owner',
  description: 'Reloads a command',
  parameters: [ 'command name/alias' ],
  examples: [ 'reload anime' ],
  run: (client, message, [command] ) => {
    
     if (message.author.id !== owner) return;

    if (!command){
      return message.channel.send('Please enter a command name');
    };

    const { status, err, info } = client.commands.reload(command);

    if (status === 'FAILED'){
      return message.channel.send( err.stack,{ code: 'xl'});
    };

    return message.channel.send(`Successfully reloaded command **${command}**`);
  }
};
