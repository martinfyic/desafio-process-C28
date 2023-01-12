import { Router } from 'express';
import processInfo from '../utils/processInfo.js';

const infoRouter = Router();

infoRouter.get('/', (req, res) => {
	res.render('processInfo', { info: processInfo() });
});

export default infoRouter;
