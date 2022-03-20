const { readdirSync } = require("fs");

const ascii = require("ascii-table");

// Create a new Ascii table
let table = new ascii("Events");
table.setHeading("events", "Load status");

module.exports = (client) => {
    // Read every commands subfolder
    readdirSync("./events/").forEach(dir => {
        // Filter so we only have .js command files
        const events = readdirSync(`./events/${dir}/`).filter(file => file.endsWith(".js"));
    
        // Loop over the commands, and add all of them to a collection
        // If there's no name found, prevent it from returning an error,
        // By using a cross in the table we made.
        for (let file of events) {
            let pull = require(`../events/${dir}/${file}`);
    
            if (pull.name) {
                client.events.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
    
            // If there's an aliases key, read the aliases.
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    // Log the table
    console.log(table.toString());
}