import { Client, Interaction } from 'discord.js';

import slashCommandHandler from '../slashCommands/index';

export default (client: Client): void => {
	client.on('interactionCreate', async (interaction: Interaction) => {
		if (interaction.isCommand() || interaction.isContextMenuCommand()) {
			await slashCommandHandler(client, interaction);
		}
	});
};
