import passport from 'passport';
import { Router } from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import faker from '../utils/faker.js';

const ecommerceRoute = Router();

ecommerceRoute.get('/', isAuth, (req, res) => {
	const user = req.user;
	const productsFaker = faker();

	res.render('products', {
		user,
		productsFaker,
	});
});

ecommerceRoute.get('/login', (req, res) => {
	if (req.isAuthenticated()) return res.redirect('/ecommerce');
	res.render('login');
});
ecommerceRoute.post(
	'/login',
	passport.authenticate('login', { failureRedirect: '/ecommerce/error-login' }),
	(req, res) => res.redirect('/ecommerce/')
);

ecommerceRoute.get('/signup', (req, res) => {
	if (req.isAuthenticated()) return res.redirect('/ecommerce');
	res.render('signup');
});
ecommerceRoute.post(
	'/signup',
	passport.authenticate('signup', {
		failureRedirect: '/ecommerce/error-signup',
	}),
	(req, res) => res.redirect('/ecommerce/login')
);

ecommerceRoute.get('/logout', isAuth, (req, res) => {
	req.logout(err => {
		if (err) return err;
		res.redirect('/ecommerce/login');
	});
});

ecommerceRoute.get('/error-login', (req, res) => {
	if (req.isAuthenticated()) return res.redirect('/ecommerce');
	res.render('error-login');
});
ecommerceRoute.get('/error-signup', (req, res) => {
	if (req.isAuthenticated()) return res.redirect('/ecommerce');
	res.render('error-signup');
});

export default ecommerceRoute;
