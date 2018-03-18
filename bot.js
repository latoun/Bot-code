const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
