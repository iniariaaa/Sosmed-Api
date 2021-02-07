const fetch = require('node-fetch')
const baseURI = 'https://api.arugaz.my.id'

module.exports.Instagram = function Instagram(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ig?url=' + query)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
