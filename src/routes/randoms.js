import { Router } from 'express';
import { fork } from 'node:child_process';

const randomRoute = Router();

randomRoute.get('/', (req, res) => {
	const cant = req.query.cant || 100000000;
	const child_process = fork('./src/randomsNumber.js');

	child_process.send(cant);
	child_process.on('message', msg => {
		res.render('randomsNumbers', { msg });
	});

	child_process.on('exit', code => {
		console.log('Se ha cerrado el proceso', code);
	});
});

export default randomRoute;
