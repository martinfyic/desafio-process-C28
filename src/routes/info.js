import { Router } from 'express';
import processInfo from '../utils/processInfo.js';

export const infoRouter = Router();

infoRouter.get('/', (req, res) => {
	res.render('processInfo', { info: processInfo() });
});
