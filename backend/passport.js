const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "319634715691-5f2lqpjlt3f0i87lkg6tuht6edp5tpoh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GITHUB_CLIENT_ID = "6f187a05c78393be2b6a";
const GITHUB_CLIENT_SECRET = "72aeed3e8f57c96b92fa37fe8a3da2c31cd0f8d9";

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
