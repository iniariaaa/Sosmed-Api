const fetch = require('node-fetch')
const baseURI = 'https://arugaz.my.id'

const Instagram = (url) => new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ig?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports = Instagram
