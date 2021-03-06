const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "319634715691-5f2lqpjlt3f0i87lkg6tuht6edp5tpoh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GITHUB_CLIENT_ID = "70221375e0f632901cd9";
const GITHUB_CLIENT_SECRET = "16ba0287e901869dadba936821965705e3aa5c19";
const FACEBOOK_APP_ID = "377648377477041";
const FACEBOOK_APP_SECRET = "865dc75e6ce72e825ff39c7e12f7d1b5";
const TWITTER_CONSUMER_KEY = "b48djnPMVZnmx6VF8JuyWKDyX";
const TWITTER_CONSUMER_SECRET =
  "tQlQqH3PFHAjoF8h9YAseT0x9CkfN5e7IjP3w4Fl7WDMt22Z2A";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

/* passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
); */

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
