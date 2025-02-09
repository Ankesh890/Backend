const express = require("express");
const connectDB = require("./config/DB");
const authRoutes = require("./routes/authRoutes");
require("dotenv"),config();

const app = express();
app.use(express.json);