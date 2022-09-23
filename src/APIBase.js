const cryptoJS = require('crypto-js');
const { removeEmptyValue, buildQueryString, createRequest, defaultLogger } = require('./helpers/utils');

class APIBase {
	constructor(options) {
		const { apiKey, apiSecret, baseURL, passphrase, logger } = options;

		this.apiKey = apiKey;
		this.apiSecret = apiSecret;
		this.baseURL = baseURL;
		this.passphrase = passphrase;
		this.logger = logger || defaultLogger;
	}

	publicRequest(method, path, params = {}) {
		params = removeEmptyValue(params);
		params = buildQueryString(params);
		if (params !== '') {
			path = `${path}?${params}`;
		}
		return createRequest({
			method: method,
			baseURL: this.baseURL,
			url: path,
			apiKey: this.apiKey
		});
	}

	signRequest(method, path, params = {}) {
		params = removeEmptyValue(params);
		const timestamp = new Date().toISOString();
		const queryString = timestamp + method + path;
		const signature = cryptoJS.enc.Base64.stringify(cryptoJS.HmacSHA256(queryString, this.apiSecret));
		return createRequest({
			method: method,
			baseURL: this.baseURL,
			url: `${this.baseURL}${path}`,
			apiKey: this.apiKey,
			sign: signature,
			timestamp: timestamp,
			passphrase: this.passphrase,
		});
	}
}

module.exports = APIBase;
