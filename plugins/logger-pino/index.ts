import { LoggerPlugin } from '@sparkbot/logger-plugin-interface';
import { pino, type LoggerOptions, type TransportTargetOptions } from 'pino';
import { type Client } from 'discord.js';

export class Logger extends LoggerPlugin {
	private readonly logger: pino.Logger;

	constructor(
		client: Client,
		override readonly options: { transports: TransportTargetOptions[] },
	) {
		super(client, options);
		const transport = pino.transport({
			targets: options.transports,
		}) as LoggerOptions;
		this.logger = pino(transport);
		this.logger.level = 'debug';
	}

	error(exception: Error | string) {
		this.logger.error(exception);
	}

	warn(exception: Error | string) {
		this.logger.warn(exception);
	}

	info(exception: Error | string) {
		this.logger.info(exception);
	}

	debug(exception: Error | string) {
		this.logger.debug(exception);
	}
}
