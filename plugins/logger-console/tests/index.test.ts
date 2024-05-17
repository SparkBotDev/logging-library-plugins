/* eslint-disable @typescript-eslint/no-empty-function */
import { afterEach, describe, expect, it, jest, spyOn } from 'bun:test';
import { Client } from 'discord.js';
import { LoggerLevel, LoggerPlugin } from '@sparkbot/logger-plugin-interface';
import { Logger } from '../index.ts';

const errorSpy = spyOn(console, 'error').mockImplementation(() => {});
const warnSpy = spyOn(console, 'warn').mockImplementation(() => {});
const infoSpy = spyOn(console, 'info').mockImplementation(() => {});
const debugSpy = spyOn(console, 'debug').mockImplementation(() => {});

const testClient = new Client({ intents: 1 });
const testLogger = new Logger(testClient, { loggingLevel: LoggerLevel.debug });
describe('logger-console plugin', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

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
	it('logs errors to error console', () => {
		testLogger.error('test');
		expect(errorSpy).toBeCalledTimes(1);
	});
	it('logs warning to warning console', () => {
		testLogger.warn('test');
		expect(warnSpy).toBeCalledTimes(1);
	});
	it('logs info to info console', () => {
		testLogger.info('test');
		expect(infoSpy).toBeCalledTimes(1);
	});
	it('logs debug to debug console', () => {
		testLogger.debug('test');
		expect(debugSpy).toBeCalledTimes(1);
	});
	describe('provides a logging level mechanism', () => {
		it('respects error level', () => {
			const testLogger = new Logger(testClient, {
				loggingLevel: LoggerLevel.error,
			});
			testLogger.error('test');
			testLogger.warn('test');
			testLogger.info('test');
			testLogger.debug('test');

			expect(errorSpy).toBeCalledTimes(1);
			expect(warnSpy).toBeCalledTimes(0);
			expect(infoSpy).toBeCalledTimes(0);
			expect(debugSpy).toBeCalledTimes(0);
		});
		it('respects warn level', () => {
			const testLogger = new Logger(testClient, {
				loggingLevel: LoggerLevel.warn,
			});
			testLogger.error('test');
			testLogger.warn('test');
			testLogger.info('test');
			testLogger.debug('test');

			expect(errorSpy).toBeCalledTimes(1);
			expect(warnSpy).toBeCalledTimes(1);
			expect(infoSpy).toBeCalledTimes(0);
			expect(debugSpy).toBeCalledTimes(0);
		});
		it('respects info level', () => {
			const testLogger = new Logger(testClient, {
				loggingLevel: LoggerLevel.info,
			});
			testLogger.error('test');
			testLogger.warn('test');
			testLogger.info('test');
			testLogger.debug('test');

			expect(errorSpy).toBeCalledTimes(1);
			expect(warnSpy).toBeCalledTimes(1);
			expect(infoSpy).toBeCalledTimes(1);
			expect(debugSpy).toBeCalledTimes(0);
		});
		it('respects debug level', () => {
			const testLogger = new Logger(testClient, {
				loggingLevel: LoggerLevel.debug,
			});
			testLogger.error('test');
			testLogger.warn('test');
			testLogger.info('test');
			testLogger.debug('test');

			expect(errorSpy).toBeCalledTimes(1);
			expect(warnSpy).toBeCalledTimes(1);
			expect(infoSpy).toBeCalledTimes(1);
			expect(debugSpy).toBeCalledTimes(1);
		});
	});
});
