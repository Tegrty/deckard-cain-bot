const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'gossip',
        description: 'Dishes the latest scoop!'
    },
    {
        name: 'helltide',
        description: 'Replies with remaining time!'
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {

        console.log('Registering (/) commands.');
        await rest.put(
            Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('Successfully registered (/) commands.');

    } catch (error) {
        console.log(error);
    }
})();