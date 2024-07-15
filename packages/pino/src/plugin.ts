import { Logger } from '@sparkbot/plugin-logger';
import { pino, type LoggerOptions, type TransportTargetOptions } from 'pino';

export class LoggerPlugin extends Logger {
	private readonly logger: pino.Logger;

	constructor(
		override readonly options: { transports: TransportTargetOptions[] },
	) {
		super(options);
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

export default LoggerPlugin;
