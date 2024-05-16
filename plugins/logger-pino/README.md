# Spark⚡️Bot: Logger Plugin - pino

@sparkbot/logger-pino implements the [pino](https://getpino.io/#/) logging library.

## Usage

@sparkbot/plugins-pino

1. Add the package to your project with `bun add @sparkbot/logger-pino`
1. Update `sparkbot.config.ts` as follows. You will need to configure at least one transport, the first sample uses pino-pretty the second example uses pino-pretty and pino-discord-webhook. Please see the [pino transport documentation](https://github.com/pinojs/pino/blob/main/docs/transports.md#pino-logfmt) for more information.

> [!NOTE]
> You will need to add the pino-pretty and pino-discord-webhook packages to use these transports.

```ts
loggingLib: {
	name: '@sparkbot/logger-pino',
		options: {
		transports: [
			{
				target: 'pino-pretty',
				options: {
					colorize: true,
				},
				level: 'debug',
			},
		],
	},
},
```

```ts
loggingLib: {
	name: '@sparkbot/logger-pino',
		options: {
		transports: [
			{
				target: 'pino-pretty',
				options: {
					colorize: true,
				},
				level: 'debug',
			},
			{
				target: 'pino-discord-webhook',
				options: {
					webhookURL: URL Here but should be a *secret*,
				},
				level: 'warn',
			},
		],
	},
},
```
