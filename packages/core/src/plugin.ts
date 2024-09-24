import { pino, type LoggerOptions, type TransportTargetOptions } from 'pino';
import { LoggerPlugin } from './interface.ts';

type Level = 'error' | 'warn' | 'info' | 'debug' | 'silent';
class PinoPlugin extends LoggerPlugin {
	private readonly logger: pino.Logger;

	constructor(
		override readonly options: {
			loggingLevel: Level;
			transports: TransportTargetOptions[];
		},
	) {
		super(options);
		const transport = pino.transport({
			targets: options.transports,
		}) as LoggerOptions;
		this.logger = pino(transport);
		this.logger.level = options.loggingLevel;
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

export default PinoPlugin;
