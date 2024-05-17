import { describe, expect, it } from 'bun:test';
import { Client } from 'discord.js';
import { LoggerPlugin } from '@sparkbot/logger-plugin-interface';
import { Logger } from '../index.ts';

const testClient = new Client({ intents: 1 });
const testLogger = new Logger(testClient, {
	transports: [
		{
			target: 'console',
			options: { destination: 1 },
		},
	],
});
describe('logger-pino plugin', () => {
	it('exports a class named Logger', () => {
		expect(Logger).toBeDefined();
	});
	it('extends LoggerPlugin', () => {
		expect(testLogger).toBeInstanceOf(LoggerPlugin);
	});
	it('logs Errors or strings', () => {
		expect(() => {
			testLogger.error('test');
		}).not.toThrowError();
		expect(() => {
			testLogger.error(new Error('test'));
		}).not.toThrowError();
	});
});
