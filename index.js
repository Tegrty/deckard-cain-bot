const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const { startTimer, tenMinuteWarning } = require('./timer.js');
const { selectRandomQuote, quotes } = require('./quotes.js');


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

// Send message when tenMinuteWarning is true

tenMinuteWarning.on('change', function(tenMinuteWarningValue)  {
  if (tenMinuteWarningValue.value === true) {
    client.on('ready', () => {
    const channelID = process.env.CHANNEL_ID;
    const channel = client.channels.cache.get(channelID);
    channel.send('10 minutes left!🚀🚀🚀🚀🚀🚀🚀🚀🚀');
    });
    // channel.send('10 minutes left!');
    console.log('10 minutes left!🚀🚀🚀🚀🚀🚀🚀🚀🚀');
  }
});

  





// Send message when bot comes online
client.on('ready', () => {
  const channelID = process.env.CHANNEL_ID;
  const channel = client.channels.cache.get(channelID);
  channel.send('I have awoken! 📕 Stay a while and listen!');
});

client.on('interactionCreate', (interaction) => {
  const selectedQuote = selectRandomQuote(quotes);
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'gossip') {
    interaction.reply(selectedQuote);
  }
});

// Empty response data variable for /helltide command. This will be updated in startTimer()
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
