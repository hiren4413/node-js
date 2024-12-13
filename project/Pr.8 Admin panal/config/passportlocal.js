const passport = require('passport');

const passportlocal = require('passport-local').Strategy;

const usermodels = require('../modules/userModel')
passport.use(new passportlocal({
    usernameField: 'email',
}, async (email, password, done) => {
    try {
        
        let user = await usermodels.findOne({ email : email });

        if (!user || user.password != password) {
            console.log("Email and Password not valid");
            return done(null, false)
        } 
        
        return done(null, user);
    } catch (err) {
        console.log(err);
        return done(null, false);
    }
}))

module.exports = passport