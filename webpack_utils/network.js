/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const os = require('os');

const interfaces = os.networkInterfaces();
const addresses = [];

for (const k in interfaces) {
  for (const k2 in interfaces[k]) {
    const address = interfaces[k][k2];
    if (address.family === 'IPv4' && !address.internal) {
      addresses.push(address.address);
    }
  }
}

module.exports = {
  addresses
};
