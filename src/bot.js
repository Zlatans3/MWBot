import dotenv from 'dotenv';
import { Client } from 'discord.js';
dotenv.config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

const client = new Client();



client.login(DISCORD_TOKEN);
client.on('ready', () => 
{
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg =>
{
  if(msg.author.id == "834453291504894028") return;
  console.log(DISCORD_CHANNEL_ID);
  if (msg.channel.id == DISCORD_CHANNEL_ID)
  {
    if (msg.content === 'ping') 
    {
      msg.reply('Pong!!');
    }
    if (msg.content == 'er jeg en bot'){
      if (!msg.author.bot){
        msg.reply("Du er ikke en bot")
      }
      else{
        msg.reply('du er en bot')
      }
    }
  }
});
