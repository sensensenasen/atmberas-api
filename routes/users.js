var express = require("express");
var router = express.Router();

const Validator = require("fastest-validator");
const v = new Validator();

const { User } = require("../models");

/* GET users listing. */
router.get("/", async (req, res) => {
  res.send("Get User");
});

/* POST users listing. */
router.post("/", async (req, res) => {
  const schema = {
    username: "string",
    uid_card: "string",
    nik: "string",
    role: "string",
    counter: "number",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).send(validate);
  }

  const user = await User.create(req.body);
  res.send("ADD_CARD_SUCCESS");
});

module.exports = router;
