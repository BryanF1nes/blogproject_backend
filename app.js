require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Routes
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/author");
const postRouter = require("./routes/post");

const app = express();

// Mongoose connection
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongoDB = process.env.DB_URL;

const main = async () => {
  console.log("Database connection established.");
  await mongoose.connect(mongoDB);
};
main().catch((err) => console.log(err));

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/author", authorRouter);
app.use("/post", postRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
