const BrokerSpot = require('../../src/brokerSpot');
const creds = require('../../creds.json');

const client = new BrokerSpot(creds.apiKey, creds.SecretKey, creds.passphrase);

client.brokerInfo({}).then((response) => client.logger.log(response.data)).catch((err) => client.logger.error(error));