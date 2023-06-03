/* eslint-disable no-console */
const pkg = require('../package.json');
const { addresses } = require('./network');

module.exports = (mode) => {
  let job;
  if (mode.WEBPACK_BUILD) job = 'Bundling and building your code';
  if (mode.WEBPACK_SERVE) job = 'Starting DEV server';
  console.clear();
  console.info('');
  console.info(`\x1b[31m\x1b[43m *** Welcome to ${pkg.appName} Project (react-app-webpack) *** \x1b[0m`);
  console.info('');
  console.info(`\x1b[32m ${pkg.appName} (Webpack Config)  v ${pkg.webpackConfigVersion}  Environment: ${process.env.NODE_ENV}\x1b[0m`);
  console.info(`\x1b[33m ${pkg.appName} (React)           v ${pkg.version}   Environment: ${mode.env}\x1b[0m`);
  console.info('');
  console.info(`\x1b[44m ${job} \x1b[0m`);
  if (mode.WEBPACK_SERVE) {
    console.info(`\x1b[35m Local:                  ${mode.type}://localhost:${mode.port}\x1b[0m`);
    console.info(`\x1b[35m On your local network:  ${mode.type}://${addresses[0]}:${mode.port}\x1b[0m`);
  }
  console.info('');
  console.info('\x1b[36m Please wait ...\x1b[0m');
  console.info('');
};
