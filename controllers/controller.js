const express = require("express");
const db = require("../models");

const router = express.Router();

// Root Route
router.get("/", (req, res) => {
  res.render("index");
})

// View sign up form
router.get("/signup", (req, res) => {
  res.render("sign-up");
});

// View new game form
router.get("/games/new", (req, res) => {
  res.render("new-game");
});

module.exports = router;