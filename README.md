# Spark⚡️Bot Logging Library Plugins

![Spark⚡️Bot Banner](https://github.com/SparkBotDev/.github/raw/main/assets/images/readme-banner.png)

This repository contains both official and hosted plugins to integrate various logging libraries into [Spark⚡️Bot](https://github.com/SparkBotDev/SparkBot).

## Official Plugins

- [@sparkbot/logger-console](https://github.com/SparkBotDev/logging-library-plugins/tree/main/plugins/logger-console#readme) - Default logging library plugin, logs using console methods.
- [@sparkbot/logger-pino](https://github.com/SparkBotDev/logging-library-plugins/tree/main/plugins/logger-pino#readme) - Plugin for the [pino](https://getpino.io/#/) logging library.

## Plugins made by others

We would love to have plugins for other libraries created. You can either add it to this repository or create your own package, either way, please open a PR here to include it.

## Using a plugin

The readme for each plugin will have detailed instructions on its use.  In general you will need to add the plugin using `bun add` and then edit `sparkbot.config.ts` with the package name and any required options.

## Creating a plugin

Creating a logger plugin requires extending the [LoggerPlugin](https://github.com/SparkBotDev/logging-library-plugins/tree/main/plugins/logger-plugin-interface#readme) interface class and exporting with the name Logger.

```ts
export class Logger extends LoggerPlugin {}
```

The `error()`, `warn()`, `info()`, and `debug()` methods must be implemented. Your plugin should provide some mechanism that allows the developer to determine what level of logging to emit.

Looking at the [official plugins](#official-plugins) would be a good starting place for understanding how the plugins operate.
