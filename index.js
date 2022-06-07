const {Client, Intents} = require('discord.js');
var express = require('express');
var app = express();

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const replay = ['Twoja Stara', "Ale kto pytał?", "xD", "Nikt nie pytał", "Twoja stara to pokemon", "Twoja stara jeździ windą po lesie", "Twoja stara myje okna w kopalni", "Jesteś opływowy jak tramwaj", "Jak by poruwnać test iq kamienia i twój to kamień by wygrał"]
client.once('ready', c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
client.on('messageCreate', (message) => {
    if (!message.author.bot) {
        let x = Math.floor(Math.random() * 11);
        if (x === 10) {
            let replayIndex = Math.floor(Math.random() * replay.length);
            message.reply(replay[replayIndex])
            console.log("Napisałem do "+message.author.username+" "+replay[replayIndex])
        } else {
            console.log("Działa, ale nie teraz "+message.author.username)
        }


    }
});

client.login("");