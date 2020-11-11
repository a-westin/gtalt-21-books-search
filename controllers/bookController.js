const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Books.find({})
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Couldn't retrieve books",
      });
    });
});

router.post("/", (req, res) => {
  const newBook = {
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link,
  };
  db.Books.create(newBook)
    .then((newBook) => res.json(newBook))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Couldn't add book",
      });
    });
});

router.delete("/:id", (req, res) => {
  db.Books.findByIdAndDelete(req.params.id)
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Couldn't delete book",
      });
    });
});

module.exports = router;