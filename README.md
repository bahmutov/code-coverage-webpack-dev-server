# code-coverage-webpack-dev-server
> Example of Cypress.io code coverage collected from webpack dev server

Webpack dev server setup following blog post [Webpack with Babel 7 Project Setup](https://dev.to/shoupn/webpack-with-babel-7-project-setup-2hin).

## Install and start

```shell
npm ci
npm start
```

Open `localhost:8080`

## Code instrumentation

Only enabled in `NODE_ENV=test` environment via [`env` option](https://new.babeljs.io/docs/en/next/babelrc.html#env-environment-option) in [.babelrc](.babelrc) file.
