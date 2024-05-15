import { type Client } from 'discord.js';
import { LoggerLevel, LoggerPlugin } from '@sparkbot/logger-plugin-interface';

export class Logger extends LoggerPlugin {
	constructor(
		client: Client,
		override readonly options: { loggingLevel: LoggerLevel },
	) {
		super(client, options);
	}

	error(exception: Error | string) {
		if (this.options.loggingLevel <= LoggerLevel.error)
			console.error(exception);
	}

	warn(exception: Error | string) {
		if (this.options.loggingLevel <= LoggerLevel.warn) console.warn(exception);
	}

	info(exception: Error | string) {
		if (this.options.loggingLevel <= LoggerLevel.info) console.info(exception);
	}

	debug(exception: Error | string) {
		if (this.options.loggingLevel <= LoggerLevel.debug)
			console.debug(exception);
	}
}
