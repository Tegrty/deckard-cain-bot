const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const { startTimer, timerFunction } = require('./timer.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// write a message every time the bot is ready
client.on('ready', () => {
  console.log('📕 Stay a while and listen');
});

// Console log messages in the server
client.on('messageCreate', (message) => {
  console.log(message.content);
});

// Send message when bot comes online
client.on('ready', () => {
  const channelID = '1115635855202209842';
  const channel = client.channels.cache.get(channelID);
  channel.send('I have awoken! 📕 Stay a while and listen!');
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    interaction.reply('pong');
  }
});

// Empty response data variable for /helltide command. This will be updated in timerFunction()
const responseData = {};

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'helltide') {
    interaction.reply(responseData);
  }
});

// Start the timer
startTimer(responseData);

client.login(process.env.TOKEN);
