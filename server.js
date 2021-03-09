const { prefix } = require("./config.json");
const { config } = require("dotenv");
const { Random } = require("something-random-on-discord") 

const db = require("quick.db");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});
require("./uptime.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("guildCreate", async guild => {
  let Invite = await guild.channels.cache
    .find(c => c.type === "text")
    .createInvite({
      maxAge: 0,
      maxUser: 0
    });
  const owner = client.users.cache.get(guild.ownerID);
  const joinchannel = client.channels.cache.get("812164778171564083");
  const joinembed = new discord.MessageEmbed()
    .setTitle("NEW SERVER")
    .addField("Server Name", `${guild.name}`)
    .addField("Server Owner", `${owner.username}`)
    .addField("Member Count", guild.memberCount)
    .addField("Invite Link", `[Invite](${Invite})`)
    .setColor("GREEN")
    .setFooter("Joined A New Guild")
    .setTimestamp()
    .setThumbnail(guild.iconURL());
  joinchannel.send(joinembed);
});

client.on("guildDelete", async guild => {
  const owner = client.users.cache.get(guild.ownerID);
  const lchannel = client.channels.cache.get("818749862539427901");
  const lembed = new discord.MessageEmbed()

    .setTitle("SERVER LEFT")
    .addField("Server Name", `${guild.name}`)
    .addField("Server Owner", `${owner.username}`)
    .addField("Member Count", guild.memberCount)
    .setColor("BLACK")
    .setFooter("Left A Guild")
    .setTimestamp()
    .setThumbnail(guild.iconURL());
  lchannel.send(lembed);
});

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on("ready", async () => {
  try {
    console.log(client.user.tag + " Has Logged In");

    function pickStatus() {
      let status = ["Frag Nite ØP", "!! help "];

      let Status = Math.floor(Math.random() * status.length);

      client.user.setActivity(status[Status], {
        type: "WATCHING"
      });
    }

    setInterval(pickStatus, 3500);
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`
** PREFIX FOR THE BOT IS = !! **

`);
  }
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

client.on("guildMemberAdd", async member => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  let default_url = `https://cdn.discordapp.com/attachments/696417925418057789/716197399336583178/giphy.gif`;

  let default_msg = `━━━━━━━━━━━━━━━━━━━━━━━━
  | WELCOME ${member} TO ${member.guild}
        
━━━━━━━━━━━━━━━━━━━━━━━━
 | BE SURE THAT YOU HAVE READ    
           | 
━━━━━━━━━━━━━━━━━━━━━━━━
 | username ${member.username}  
|your rank is ${member.member_count}  ━━━━━━━━━━━━━━━━━━━━━━━━
 | YOU CAN ENJOY IN  CHATTING 
━━━━━━━━━━━━━━━━━━━━━━━━
            THANKS FOR JOINING US
`;

  let m1 = db.get(`msg_${member.guild.id}`);
  if (!m1) m1 = default_msg;
  const msg = m1
    .replace("{member}", member.user)
    .replace("{member.guild}", member.guild)
    .replace("(:HEART)", `<a:GC_BLUE_heart:810001444035231775>`);

  let url = db.get(`url_${member.guild.id}`);
  if (url === null) url = default_url;

  let data = await canva.welcome(member, {
    link: "https://wallpapercave.com/wp/wp5128415.jpg"
  });

  const attachment = new discord.MessageAttachment(data, "welcome-image.png");

  let wembed = new discord.MessageEmbed()
    .setAuthor(
      member.user.username,
      member.user.avatarURL({ dynamic: true, size: 2048 })
    )
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor("RANDOM")
    .setImage()
    .setDescription(msg);

  client.channels.cache.get(chx).send(wembed);
  client.channels.cache.get(chx).send(attachment);
});

client.login(process.env.TOKEN);
