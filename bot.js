const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;
var dicoMode = false;
var chat = false;

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
            case "play" :
                message.channel.send("Jeu lancé");
                switch (args[0]){
                    case "chat":
                        if (chat) {
                            message.channel.send("Jeu du chat stoppé");
                            chat = false;
                            message.guild.roles.find("name","Chat").delete(); 
                        }
                        else {
                            chat = true;
                            message.channel.send("Jeu du chat lancé");
                            message.guild.createRole({
                                name: 'Chat',
                                color: 'RED',
                                });
                            message.channel.send("Role créé");
                            message.guild.members.random().addrole(message.guild.roles.find("name", "Chat"));
                            message.channel.send("Chat désigné");
                        }
                    break;
                }
            break;
            case "chat" :
                let chat = message.mentions.members.first();
            break;
            case "aide" :
                message.author.send("test");
            break;
            case "dicomode" :
                if (dicoMode) {
                    message.channel.send("DicoMode désactivé");
                    dicoMode = false;
                }
                else {
                    message.channel.send("DicoMode activé");
                    dicoMode = true;
                }
            break;
        }
    }    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
