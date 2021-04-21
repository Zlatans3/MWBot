import dotenv from 'dotenv'; 
import { Client } from 'discord.js';
dotenv.config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const client = new Client();


//client.login("ODM0NDUzMjkxNTA0ODk0MDI4.YIBHMA.eehvJhIYBMt_p__WVixP22tHyow");
client.login(DISCORD_TOKEN);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});