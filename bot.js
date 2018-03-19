const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    let role = message.guild.roles.find("name", "Chat");
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        for(var iter = 0; iter < args/length; iter++){
            s = arge[iter].split("")
            if (s.shift().toLowerCase() == 'd' && s.shift().toLowerCase() == 'i') {
                message.channel.send(s.join(""));
            }
        }
    }
    else {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
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
            case "chat" :
                let chat = message.mentions.members.first();
            }
        }    
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
