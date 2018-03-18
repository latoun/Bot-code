const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDI0OTA1NjIxMjI2MTI3MzYx.DZBzJg.5YyowU0MZLfRwtaQZoJmdNsDhwU');
