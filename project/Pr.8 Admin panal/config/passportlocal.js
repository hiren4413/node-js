const passport = require('passport');

const passportlocal = require('passport-local').Strategy;

passport.use(new passportlocal({
    usernameField : 'email',
}, async(email, password)=>{
    console.log(email);
    console.log(password);
    
}))

module.exports = passport