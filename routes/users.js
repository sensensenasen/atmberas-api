var express = require("express");
var router = express.Router();

const Validator = require("fastest-validator");
const { response } = require("../app");
const v = new Validator();

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

  res.send("ADD_CARD_SUCCESS");
});

module.exports = router;
