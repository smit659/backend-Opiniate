const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const express = require('express');
const app = express();

const GOOGLE_CLIENT_ID = "478432334344-vicfs0ejqf2tjdnsfgejs5mv1ni0eb61.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile);
  }
));

passport.serializeUser((user,done) => {
    done(null,user);
});
passport.deserializeUser((user,done) => {
    done(null,user);
});