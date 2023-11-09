import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

passport.use(new GoogleStrategy({
    clientID: "56727386245-af5tasu2edrkq2kkn70tjfvqcan5ql7s.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: '/auth/google/callback',
    scope:["profile","email"]
}, (accessToken, refreshToken, profile, done) => {
    // Consider storing user profile in your database at this point
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});