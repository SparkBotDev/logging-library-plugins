import { type LoggerPlugin } from '@sparkbot/logger-plugin-interface';
import { pino, type LoggerOptions, type TransportTargetOptions } from 'pino';

export class Logger implements LoggerPlugin {
	private readonly logger;

	constructor(readonly options: { transports: TransportTargetOptions[] }) {
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
