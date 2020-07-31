const discord = require("discord.js");
const { default_prefix } = require("./config.json");
const { config } = require("dotenv");
const db = require("quick.db");
const constant = require("discord.js/src/util/Constants.js");
constant.DefaultOptions.ws.properties.$browser = "Discord Android";
const client = new discord.Client({
  disableEveryone: true
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  function randomStatus() {
    let status = [
      `@${client.user.tag} help with ʜყ℘г ❘❘ GØD™ٴ`,
      `@${client.user.tag} help for ${client.users.cache.size} users`,
      `@${client.user.tag} help on ${client.guilds.cache.size} servers`,
      `@${client.user.tag} help in ${client.channels.cache.size} channels`
    ];
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], { type: "WATCHING" });
  }
  setInterval(randomStatus, 20000);

  console.log(`${client.user.username} is now ready`);
});

client.on("message", async message => {
  const Indian = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(Indian)) {
    let embed = new discord.MessageEmbed()
      .setDescription(
        `
⣿⣿⣿⣿⣿⣍⠀⠉⠻⠟⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠓⠀⠀⢒⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿
⣿⡿⠋⠋⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⢿⣿⣿⡿⣿⣿⡟⠋⠀⢀⣩
⣿⣿⡄⠀⠀⠀⠀⠀      ⠀⠀⠀⠀⠈⠉⠛⢷⣭⠉⠁⠀⠀⣿⣿
⣇⣀.             JAI HIND                ⠘⣿⣿⣿   ⣶⣿
⣿⣄⠀⣰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⢀⣠⣿⣿⣿⣾⣿⣿⣿
⣿⣿⣿⣿⠀⠀⠀⠀  ⠀⠀⠀⠀⠀⢀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀   ⠀⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⣠⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠀⠀   ⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣇⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡆⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`
      )
      .setColor("RANDOM");

    message.channel.send(embed);
  }

   let prefix = db.get(`prefix_${message.guild}`)
  if(prefix === null) prefix = default_prefix;
  
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)help$`);
  if (message.content.match(prefixMention)) {
    let embed = new discord.MessageEmbed()
      .setTitle(`Command list of **${client.user.username}**`)
      .setDescription(
        `
My prefix is \`${prefix}\`

> __**MODERATION**__
> <a:thisr:728929598544543825> \`prefix\`:- Change the prefix of **${client.user.username}** for the server
> <a:thisr:728929598544543825> \`welcome\`:- Welcomes the user in your server
> <a:thisr:728929598544543825> \`mute\`:- Mute any user
> <a:thisr:728929598544543825> \`unmute\`:- Unmute any user muted by **${client.user.username}**
> <a:thisr:728929598544543825> \`kick\`:- Kick any member of the server
> <a:thisr:728929598544543825> \`ban\`:- Ban any member of the server
> 
> __**INFO**__
> <a:thisr:728929598544543825> \`ping\`:- Check your ping
> <a:thisr:728929598544543825> \`id\`:- Get id of any member of the ${message.guild}
> <a:thisr:728929598544543825> \`serverid\`:- Get the id of ${message.guild}
> <a:thisr:728929598544543825> \`anime\`:- Get information of any cartoon character/show
> <a:thisr:728929598544543825> \`pokemon\`:- Get information of any pokemon
> <a:thisr:728929598544543825> \`imdb\`:- Get information of any movie or web series
> <a:thisr:728929598544543825> \`weather\`:- Get the weather report of anywhere
> <a:thisr:728929598544543825> \`invite\`:- Get the invite link of the bot
> 
> [Invite Link](https://discord.com/api/oauth2/authorize?client_id=732252376517574746&permissions=8&scope=bot) | [Support Server](https://discord.gg/7BVTsHG)`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`ɃЯV丶Professorᴰᴱᶻ ⏦ and team`)
      .setTimestamp((message.timestamp = Date.now()));

    await message.author.send(embed);

    message.reply(`I have send you my command list in DM`);
  }

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

client.models = { user: require('./database/models/user.js') }
require('./database/connect.js')

client.on("guildMemberAdd", (member) => {
  let chx = db.get(`welchannel_${member.guild.id}`);
  
  if(chx === null) {
    return;
  }
  
  let default_url = `https://cdn.discordapp.com/attachments/696417925418057789/716197399336583178/giphy.gif`//default msg mtt change krna yeh hyper ke liye lagaye hai ek baar custom msg shi ho gaya toh isko bhi shi kr denge
  
  let default_msg = `
𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎
                               <a:hyper_W:721376031767920651><a:hyper_E:717220813828259870><a:hyper_L:717220922662322227><a:hyper_C:717220750729412638><a:hyper_O:717220550774358149><a:hyper_M:717220462282670130><a:hyper_E:717220813828259870>
𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎
CHECK THE SERVER RULES IN <#711852403137314846>

IF YOU WANT TO JOIN OUR CLAN YOU CAN APPLY IN <#731578491094433812>

TAKE YOUR FAV ROLES FROM <#711852438927441920>

CHILL AND ENJOY IN OUR <#737298789131485278>
𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎
USER :- ${member.user}
SERVER :- ${member.guild.name}
𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎`
  
  let msg = db.get(`msg_${member.guild.id}`)
  if(msg === null)msg = default_msg
  
  let url = db.get(`url_${member.guild.id}`)
  if(url === null) url = default_url;

  let wembed = new discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.avatarURL({dynamic: true, size: 2048}))
  .setColor("RANDOM")
  .setImage(url)
  .setDescription(msg);
  
  client.channels.cache.get(chx).send(wembed)
})


client.login(process.env.token);