const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch (command) {
        case "ping" :
            message.channel.send('Pong!');
        break;
        case "cookies" :
            let n = args[0]
            message.channel.send(':cookie' * n);
        break;
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
