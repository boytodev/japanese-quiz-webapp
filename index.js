const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const surveyRoutes = require("./routes/surveyRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session
app.use(session({
  cookie: { 
    maxAge: 24 * 60 * 60 * 1000 // 24 ชั่วโมง
  },
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || 'japanese-quiz-secret-key'
}));

// View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", surveyRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
