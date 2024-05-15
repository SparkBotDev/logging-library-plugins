import process from 'node:process';
import { Events, type Client } from 'discord.js';

declare module 'discord.js' {
	interface Client {
		logger: LoggerPlugin;
	}
}
export abstract class LoggerPlugin {
	constructor(
		client: Client,
		readonly options: Record<string, unknown>,
	) {
		// Register logger to handle client logging events
		client.on(Events.Debug, (message) => {
			client.logger.debug(message);
		});
		client.on(Events.Warn, (message) => {
			client.logger.warn(message);
		});
		client.on(Events.Error, (message) => {
			client.logger.error(message);
		});

		// Register logger to log unhandled exceptions
		process.on('uncaughtException', (error) => {
			client.logger.error(new Error('Uncaught Exception:', { cause: error }));
			process.exit(1);
		});
		process.on('unhandledRejection', (error) => {
			client.logger.error(
				new Error('Unhandled promise rejection:', { cause: error }),
			);
			process.exit(1);
		});
	}

	abstract error(exception: Error | string): void;
	abstract warn(exception: Error | string): void;
	abstract info(exception: Error | string): void;
	abstract debug(exception: Error | string): void;
}

export enum LoggerLevel {
	debug,
	info,
	warn,
	error,
	none,
}
