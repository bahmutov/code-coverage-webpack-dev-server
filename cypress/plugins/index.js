const webpack = require('@cypress/webpack-preprocessor')
module.exports = (on, config) => {
  const options = {
    // use the same Webpack options to bundle spec files as your app does "normally"
    // which should instrument the spec files in this project
    webpackOptions: require('../../webpack.config.babel'),
    watchOptions: {},
  }
  on('file:preprocessor', webpack(options))
  // code coverage plugin sends collected results
  // using its own cy.tasks calls
  on('task', require('@cypress/code-coverage/task'))
}
