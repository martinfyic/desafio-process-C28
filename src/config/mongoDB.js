const mongoose = require('mongoose');
require('colors');

const connectionDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URL, {}, () => {
			console.log(` 💽 Conectado a MongoDB Cloud`.yellow);
		});
	} catch (error) {
		console.log(` ⚠️ Error ==> ${error?.message || error}`.red);
		throw new Error('Error al conectarse a MongoDB Cloud');
	}
};

module.exports = connectionDB;
