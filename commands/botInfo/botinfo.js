const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

module.exports = {
    name: "botinfo",
    category: "info",
  description: "Sends detailed info about the client",
  usage: "[command]",
  run: async (client, message, args) => {
  //command
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const botinfo = new Discord.MessageEmbed()
          .setAuthor("client.user.username")
          .setTitle("__**Stats:**__")
          .setColor("#7cfff5")
          .addField("⏳ Mem Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``, true)
          .addField("⌚️ Uptime ", `\`${duration}\``, true)
          .addField("<:GC_Servers:818346467327868949> Servers", `\`${client.guilds.cache.size}\``, true)
          .addField("📁 Channels ", `\`${client.channels.cache.size}\``, true)
          .addField("👾 Discord.js", `v${version}`, true)
          .addField("<:GC_Bot:818337997179191327> Node", `\`${process.version}\``, true)
          .addField("<:GC_CPU:818341919137464330> CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField("<:GC_Bot:818337997179191327> CPU usage", `\`${percent.toFixed(2)}%\``, true)
          .addField("<:GC_Bot:818337997179191327> Arch", `\`${os.arch()}\``, true)
          .addField("<:GC_Computer:810137312646004736> Platform", `\`\`${os.platform()}\`\``, true)
          .addField("API Latency", `\`${(client.ws.ping)}ms\``)  
          .addField("**Developer**", "**ARYA** | <@730424922639302693>")
      message.channel.send(botinfo)
    message.react("<a:GC_right:810000945562910761>")
  });
  }
  };

