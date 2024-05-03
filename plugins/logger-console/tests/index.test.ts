/* eslint-disable @typescript-eslint/no-empty-function */
import { describe, it, expect, spyOn, afterEach, jest } from 'bun:test';
import ConsoleLogger from '../index.js';

const mockError = spyOn(console, 'error').mockImplementation(() => {});
const mockWarn = spyOn(console, 'warn').mockImplementation(() => {});
const mockInfo = spyOn(console, 'info').mockImplementation(() => {});
const mockDebug = spyOn(console, 'debug').mockImplementation(() => {});

afterEach(() => {
	jest.clearAllMocks();
});

describe('Console logger plugin', () => {
	const logger = new ConsoleLogger({ loggingLevel: 0 });

	it('logs error', () => {
		logger.error('error');
		expect(mockError).toHaveBeenCalled();
	});

	it('logs warn', () => {
		logger.warn('error');
		expect(mockWarn).toHaveBeenCalled();
	});

	it('logs info', () => {
		logger.info('error');
		expect(mockInfo).toHaveBeenCalled();
	});

	it('logs debug', () => {
		logger.debug('error');
		expect(mockDebug).toHaveBeenCalled();
	});

	it('logs per loggingLevel', () => {
		const logger = new ConsoleLogger({ loggingLevel: 2 });
		logger.error('error');
		logger.warn('error');
		logger.info('error');
		logger.debug('error');
		expect(mockError).toHaveBeenCalled();
		expect(mockWarn).toHaveBeenCalled();
		expect(mockInfo).not.toHaveBeenCalled();
		expect(mockDebug).not.toHaveBeenCalled();
	});
});
