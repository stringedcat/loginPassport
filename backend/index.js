const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const authRoute = require("./routes/auth");
const passportSetup = require("./passport.js");
const cors = require("cors");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["mauro"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.listen("5000", () => {
  console.log("Server running at port 5000");
});
