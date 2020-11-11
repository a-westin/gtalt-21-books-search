require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const BookController = require("./controllers/bookController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Successfully connected Mongoose!");
});

connection.on("error", (err) => {
  console.log("Connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use("/api/books", BookController);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});