import { CommandInteraction, Client, ApplicationCommandType } from 'discord.js';

import { Command } from '../Command';

const hello: Command = {
	name: 'hello',
	description: 'say hello',
	type: ApplicationCommandType.ChatInput,
	run: async (client: Client, interaction: CommandInteraction) => {
		try {
			return await interaction.reply({ content: 'Hello :)' });
		} catch (err) {
			console.log(err);
		}
	},
};

export default hello;
