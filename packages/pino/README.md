# Spark⚡️Bot - Pino logging library plugin

<div align="center">
    <a href="https://bun.sh"><img alt="Runs on Bun" src="https://img.shields.io/badge/Runs%20on%20Bun-%23E37AB4?style=flat&logo=bun&logoColor=%23F9F1E1&logoSize=auto&labelColor=%232F2F2F" height=30></a>&nbsp;
    <a href="https://discord.js.org"><img alt=" Built with discord.js" src="https://github.com/SparkBotDev/.github/raw/main/assets/images/discordjs-badge.svg" height=30></a>&nbsp;
    <a href="https://valibot.dev"><img alt="Validates with Valibot" src="https://github.com/SparkBotDev/.github/raw/main/assets/images/valibot-badge.svg" height=30></a>&nbsp;
    <a href="https://github.com/xojs/xo"><img alt="XO code style" src="https://shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray" height=30></a>&nbsp;
</div>
<div align="center">
    <img src="https://github.com/SparkBotDev/.github/raw/main/assets/images/readme-banner.png" alt="">
</div>

@sparkbot/plugin-logger-pino implements the [pino](https://getpino.io/#/) logging library for [Spark⚡️Bot](https://github.com/SparkBotDev/SparkBot) project.

<div align="center">
    <a href="https://discord.gg/J3FYK8VmrA"><img alt="Get help on Discord" src="https://img.shields.io/discord/1250847505566929037?logo=discord&logoColor=white&label=Get%20Help&labelColor=%235761E1&color=%2350545B" height=30></a>
</div>

## Usage

1. Add the package to your project with `bun add @sparkbot/plugin-logger-pino`
1. Update `sparkbot.config.ts`. You will need to configure at least one transport.Please see the [pino transport documentation](https://github.com/pinojs/pino/blob/main/docs/transports.md#pino-logfmt) for more information.

The below example uses the pino-pretty and pino-discord-webhook transports. You will need to add these packages if you want to use them.

@sparkbot/plugin-logger is already included in the Spark⚡️Bot codebase, and the package should not be removed as it contains necessary interfaces for all other plugins to operate.

To configure your Spark⚡️Bot to use @sparkbot/plugin-logger you need to update `sparkbot.config.ts`, the level you set for logging level is the lowest type you want.

```ts
loggingLibraryPlugin: {
	prod: {
		module: '@sparkbot/plugin-logger-pino',
		options: {
			transports: [
				{
					target: 'pino-pretty',
					options: {
						colorize: true,
					},
					level: 'warn',
				},
				{
					target: 'pino-discord-webhook',
					options: {
						webhookURL: URL Here but should be a *secret*,
					},
					level: 'error',
				},
			],
		},
	},
	dev: {
		module: '@sparkbot/plugin-logger-pino',
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
},
```
