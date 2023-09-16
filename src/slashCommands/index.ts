import fs from 'fs';

import { CommandInteraction, Client } from 'discord.js';

import slashCommandsList from './slashCommandsList';

export default async (
	client: Client,
	interaction: CommandInteraction,
): Promise<void> => {
	try {
		const slashCommand = slashCommandsList.find(
			(c) => c.name === interaction.commandName,
		);

		if (!slashCommand) {
			await interaction.reply({
				content: 'An error has occured [slash commands]',
			});

			return;
		}

		slashCommand.run(client, interaction);
	} catch (err) {
		console.log(err);
	}
};
