import mongoose from 'mongoose';

export const connectionDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URL, {}, () => {
			console.log(` 💽 Conectado a MongoDB Cloud`);
		});
	} catch (error) {
		console.log(` ⚠️ Error ==> ${error?.message}`);
		throw new Error('Error al conectarse a MongoDB Cloud');
	}
};
