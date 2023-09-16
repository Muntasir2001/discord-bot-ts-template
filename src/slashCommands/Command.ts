import {
	CommandInteraction,
	ChatInputApplicationCommandData,
	Client,
} from 'discord.js';

export interface Command extends ChatInputApplicationCommandData {
	run: (Client: Client, interaction: CommandInteraction) => void;
}
