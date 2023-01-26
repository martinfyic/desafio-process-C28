const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../models/user.js');
const { isValidPassword, createHash } = require('../utils/bcrypt.js');

passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, done);
});

const strategyLogin = new Strategy((username, password, done) => {
	User.findOne({ username }, (err, user) => {
		if (err) return done(err);
		if (!user) {
			return done(null, false);
		}
		if (!isValidPassword(user, password)) {
			return done(null, false);
		}
		return done(null, user);
	});
});

const strategySignup = new Strategy(
	{
		passReqToCallback: true,
	},
	(req, username, password, done) => {
		User.findOne({ username: username }, function (err, user) {
			if (err) {
				return done(err);
			}

			if (user) {
				return done(null, false);
			}

			const newUser = {
				username: req.body.username,
				password: createHash(password),
			};
			User.create(newUser, (err, userWithId) => {
				if (err) {
					return done(err);
				}
				return done(null, userWithId);
			});
		});
	}
);

module.exports = { strategyLogin, strategySignup };
