const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require("./Router/userRouter");
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,  // Allow credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));  // Update here as well
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use("/api/v1", userRoute);
app.use(ErrorHandler);

module.exports = app;
