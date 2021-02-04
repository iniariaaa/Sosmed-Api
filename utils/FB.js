const fbdl = require("fbdl-core");

const FB = (url) => new Promise((resolve, reject) => {
	if(!url || url == undefined) return reject("Bejat");
	fbdl.getInfo(url)
	.then(res => {
		resolve({
			hd: res.streamURL,
			sd: res.rawVideo
		});
	} catch (error) {
        reject({
			code:400,
			message: error
		});
    }
})

module.exports = FB
