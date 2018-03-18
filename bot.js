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
    message.delete();
    switch (command) {
        case "ping" :
            message.channel.send('Pong!');
        break;
        case "cookies" :
            var n = args[0];
            var s = ''
            for (var iter = 0; iter < n; iter++) {
                s += ':cookie:'
            }
            message.channel.send(s);
        break;
        case "say" :
            let text = args.slice(0).join(" ");
            message.delete();
            message.channel.send(text);
        break;
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
