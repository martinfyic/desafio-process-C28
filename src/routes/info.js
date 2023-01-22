const { Router } = require('express');
const processInfo = require('../utils/processInfo.js');

const infoRouter = Router();

infoRouter.get('/', (req, res) => {
	res.render('processInfo', { info: processInfo() });
});

module.exports = infoRouter;
