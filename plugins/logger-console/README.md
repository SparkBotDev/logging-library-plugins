# Spark⚡️Bot: Logger Plugin - Console

@sparkbot/logger-console is the default [Spark⚡️Bot](https://github.com/SparkBotDev/SparkBot#readme) logging library plugin.  It logs to the various built in console methods.

## Usage

@sparkbot/plugins-console is implemented in the main code base as the default logger plugin. If needed it can be re-installed and configured by following these steps:

1) Add the package to your project with `bun add @sparkbot/logger-console`
1) Update `sparkbot.config.ts` as follows.

```ts
loggingLib: {
	prod: {
		name: '@sparkbot/logger-console',
		options: { loggingLevel: LoggerLevel.info },
	},
	dev: {
		name: '@sparkbot/logger-console',
		options: { loggingLevel: LoggerLevel.debug },
	},
},
```
