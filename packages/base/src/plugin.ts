import { Logger } from './interface.ts';

export enum LoggingLevel {
	'debug',
	'info',
	'warn',
	'error',
	'none',
}

export class LoggerPlugin extends Logger {
	constructor(protected override options: { loggingLevel: LoggingLevel }) {
		super(options);
	}

	error(exception: Error | string) {
		if (this.options.loggingLevel <= LoggingLevel.error)
			console.error(exception);
	}

	warn(exception: Error | string) {
		if (this.options.loggingLevel <= LoggingLevel.warn) console.warn(exception);
	}

	info(exception: Error | string) {
		if (this.options.loggingLevel <= LoggingLevel.info) console.info(exception);
	}

	debug(exception: Error | string) {
		if (this.options.loggingLevel <= LoggingLevel.debug)
			console.debug(exception);
	}
}

export default LoggerPlugin;
