export abstract class LoggerPlugin {
	constructor(readonly options: Record<string, unknown>) {}
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
