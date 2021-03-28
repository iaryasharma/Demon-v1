const Discord = require("discord.js");
const moment = require("moment");

exports.run = (client, message, args, ops) => {
  
message.delete();
  
const Error = new Discord.RichEmbed()
.setAuthor(`${message.author.tag} | Error`, message.author.displayAvatarURL)
.setColor(ops.color)
.setDescription(ops.desc)
.setFooter(ops.footer);

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(Error).then(m => m.delete(5000));
  
let chan = message.guild.channels.find(c => c.id == args[0]);
let channel = message.guild.channels.find(c => c.id === message.member.voiceChannel.id)
let members = message.guild.channels.get(channel.id).members;
let id = message.guild.channels.get(channel.id).members.map(u => u.id).join(", ");
// let member = message.guild.members.get(id).setVoiceChannel(chan)
let ids = message.guild.channels.get(channel.id).members.map(u => `\`${u.id}\``).join("**,** ");
let size = message.guild.channels.get(channel.id).members.size;
  
const Args = new Discord.RichEmbed()
.setAuthor(`${message.author.tag} | Bulk Move`, message.author.displayAvatarURL)
.setColor(ops.color)
.setDescription("Cbmove [ChannelID]")
.setFooter(ops.footer);
  
if(!chan) return message.channel.send(Args).then(m => m.delete(5000));
  
const Embed = new Discord.RichEmbed()
.setAuthor(`${message.author.tag} | Bulk Move`, message.author.displayAvatarURL)
.setColor(ops.color)
.setDescription(`**Moved** ${size} amount of members from the voice channel \`${message.member.voiceChannel.name}\` to the voice channel \`${chan.name}\`.`)
.setFooter(ops.footer)

message.channel.send(Embed).then(m => m.delete(5000));
  
const Logs = new Discord.RichEmbed()
.setAuthor(`${message.author.tag} | Log`, message.author.displayAvatarURL)
.setColor(ops.color)
.setDescription(`**Action┃At**\nVC Bulk Move┃${moment().format("lll", Date.now())}\n\n**Users┃ID**\n${size}┃${ids}\n\n**Moderator┃ID**\n${message.author.tag}┃${message.author.id}\n\n**Old Channel┃ID**\n${message.member.voiceChannel.name}┃${message.member.voiceChannel.id}\n\n**New Channel┃ID**\n${chan.name}┃${chan.id}`)
.setFooter(ops.footer)

let logchannel = message.guild.channels.find(c => c.name == "punishment-reports");
  
logchannel.send(Logs);
  
message.member.voiceChannel.join();

message.guild.channels.get(channel.id).members.map(u => u.setVoiceChannel(chan))
//.catch(err => console.log(err));

message.member.voiceChannel.leave();
  
}