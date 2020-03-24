const router = require("express").Router();

const Users = require("./userModel");

router.get("/", (req, res) => {
  res.status(200).json({ message: "users endpoints running" });
});

module.exports = router;
