/**
 * Defines the interface of a logging library plugin.
 */
export interface ILogger {
	error: (exception: Error | string) => void;
	warn: (exception: Error | string) => void;
	info: (exception: Error | string) => void;
	debug: (exception: Error | string) => void;
}

/**
 * Abstract class that a secrets plugin must extend.
 */
export abstract class Logger implements ILogger {
	constructor(protected options: object = {}) {}

	abstract error(exception: Error | string): void;
	abstract warn(exception: Error | string): void;
	abstract info(exception: Error | string): void;
	abstract debug(exception: Error | string): void;
}
