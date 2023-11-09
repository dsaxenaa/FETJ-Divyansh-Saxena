import "./passport.js";

import colors from "colors";
import cors from "cors";
import crypto from "crypto";
import express from "express";
import passport from "passport";
import { router } from "./routes/auth.js";
import session from "express-session";

const app = express();

const secret = crypto.randomBytes(64).toString('hex');

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(session({
    secret: secret,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", router);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`.bgWhite);
});
