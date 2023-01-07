import passport from 'passport';
import { Router } from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import faker from '../utils/faker.js';

const routes = Router();

routes.get('/', isAuth, (req, res) => {
	const user = req.user;
	const productsFaker = faker();

	res.render('products', {
		user,
		productsFaker,
	});
});

routes.get('/login', (req, res) => {
	if (req.isAuthenticated()) return res.redirect('/ecommerce');
	res.render('login');
});
routes.post(
	'/login',
	passport.authenticate('login', { failureRedirect: '/ecommerce/error-login' }),
	(req, res) => res.redirect('/ecommerce/')
);

routes.get('/signup', (req, res) => {
	if (req.isAuthenticated()) return res.redirect('/ecommerce');
	res.render('signup');
});
routes.post(
	'/signup',
	passport.authenticate('signup', {
		failureRedirect: '/ecommerce/error-signup',
	}),
	(req, res) => res.redirect('/ecommerce/login')
);

routes.get('/logout', isAuth, (req, res) => {
	req.logout(err => {
		if (err) return err;
		res.redirect('/ecommerce/login');
	});
});

routes.get('/error-login', (req, res) => {
	if (req.isAuthenticated()) return res.redirect('/ecommerce');
	res.render('error-login');
});
routes.get('/error-signup', (req, res) => {
	if (req.isAuthenticated()) return res.redirect('/ecommerce');
	res.render('error-signup');
});

export default routes;
