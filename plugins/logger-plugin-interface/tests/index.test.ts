import process from 'node:process';
import { describe, expect, it } from 'bun:test';
import { Client } from 'discord.js';
import { LoggerPlugin } from '../index.ts';

class TestLogger extends LoggerPlugin {
	error(exception: Error | string) {
		console.log(exception);
	}

	warn(exception: Error | string) {
		console.log(exception);
	}

	info(exception: Error | string) {
		console.log(exception);
	}

	debug(exception: Error | string) {
		console.log(exception);
	}
}

const testClient = new Client({ intents: 1 });
const testLogger = new TestLogger(testClient, {});

describe('logger-plugin-interface', () => {
	expect(testLogger).toBeInstanceOf(LoggerPlugin);
	it('registers with client error handlers', () => {
		expect(testClient.rawListeners('debug')).toBeArrayOfSize(1);
		expect(testClient.rawListeners('error')).toBeArrayOfSize(1);
		expect(testClient.rawListeners('warn')).toBeArrayOfSize(1);
	});
	it('registers with unhandled handlers', () => {
		expect(process.rawListeners('uncaughtException')).toBeArrayOfSize(1);
		expect(process.rawListeners('unhandledRejection')).toBeArrayOfSize(1);
	});
});
