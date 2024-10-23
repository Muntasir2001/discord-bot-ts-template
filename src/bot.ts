// loads dotenv
require('dotenv').config();

import { Client, GatewayIntentBits, Partials } from 'discord.js';

import slashCommandsList from './slashCommands/slashCommandsList';
import interactionCreate from './listeners/interactionCreate';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildModeration,
	],
	partials: [Partials.Channel, Partials.Message, Partials.Reaction],
});

//status of the bot
client.on('ready', async () => {
	const guildId: string | any = process.env.GUILD_ID;
	const guild = client.guilds.cache.get(guildId);
	let commands;

	if (guild && guildId != undefined) {
		commands = guild.commands;
	} else {
		commands = client.application!.commands;
	}

	// load the commands in the bot
	await commands.set(slashCommandsList);

	console.log(`${client.user?.tag} has logged in BEEP BEEP 🤖`);
});

// interaction listener
interactionCreate(client);

client.login(process.env.DISCORDJS_BOT_TOKEN);
