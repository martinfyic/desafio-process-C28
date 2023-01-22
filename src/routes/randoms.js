const { Router } = require('express');
const { fork } = require('node:child_process');

const randomRoute = Router();

randomRoute.get('/', (req, res) => {
	const cant = req.query.cant || 100000000;
	const child_process = fork('./src/utils/randomsNumber.js');

	child_process.send(cant);
	child_process.on('message', msg => {
		res.render('randomsNumbers', { msg });
	});

	child_process.on('exit', code => {
		console.log('Se ha cerrado el proceso', code);
	});
});

module.exports = randomRoute;
