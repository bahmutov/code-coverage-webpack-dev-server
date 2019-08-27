# code-coverage-webpack-dev-server [![renovate-app badge][renovate-badge]][renovate-app] [![CircleCI](https://circleci.com/gh/bahmutov/code-coverage-webpack-dev-server.svg?style=svg)](https://circleci.com/gh/bahmutov/code-coverage-webpack-dev-server)
> Example of Cypress.io code coverage collected from webpack dev server

Webpack dev server setup following blog post [Webpack with Babel 7 Project Setup](https://dev.to/shoupn/webpack-with-babel-7-project-setup-2hin).

## Install and start

```shell
npm ci
npm start
```

Open `localhost:8080`

## Code instrumentation

Only enabled in `NODE_ENV=test` environment via [`env` option](https://new.babeljs.io/docs/en/next/babelrc.html#env-environment-option) in [.babelrc](.babelrc) file. This file is used to transpile source code because of [webpack.config.babel.js](webpack.config.babel.js)

To serve the app using [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with instrumented app and open Cypress use:

```shell
npm run dev
```

Notice the `window.__coverage__` object in the application iframe:

![Test and coverage](images/test-and-coverage.png)

To run headless end-to-end tests and have coverage use:

```shell
npm run e2e
```

In both cases, the coverage HTML report will be saved, open it with

```shell
open coverage/index.html
```

![Coverage HTML report](images/coverage-report.png)

## NPM scripts

See [package.json](package.json) for all NPM scripts.

## More information

- Read Cypress [code coverage guide](https://on.cypress.io/code-coverage)

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
