const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;
var dicoMode = false;
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) {
        const args = message.content.trim().split(/ +/g);
        for(var iter = 0; iter < args.length; iter++){
            if (args[iter].toLowerCase().startsWith("di") && dicoMode) {
                message.channel.send(args[iter].slice(2));
            }
            if (args[iter].toLowerCase().startsWith("cri") && dicoMode) {
                message.channel.send(args[iter].slice(3).toUpperCase());
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
            case "dicomode" :
                if (dicomode) {
                    message.channel.send("DicoMode désactivé");
                    dicomode = false;
                }
                else {
                    message.channel.send("DicoMode activé");
                    dicomode = true;
                }
            break;
        }
    }    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
