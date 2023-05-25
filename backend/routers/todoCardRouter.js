const express = require("express");
const toDoCard = require("../models/toDoCard");
const router = express.Router();

router.use(express.json());

router.get("/cards", async (req, res) => {
  const result = await toDoCard.find();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const result = await toDoCard.findById(req.params.id);
  res.json(result);
});

router.post("/", async (req, res) => {
  toDoCard.create(req.body).then((data) => {
    res.json(data);
  });
});

router.put("/:id", async (req, res) => {
  const result = toDoCard
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Card not found.`,
        });
      } else {
        res.send({ message: "Card updated succcessfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

//delete data ที่ใช้  auth เพราะเราต้องการให้แค่คนที่มี role admin เท่านั้นที่ลบได้
router.delete("/:id", async (req, res) => {
  const result = toDoCard
    .findByIdAndRemove(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Card not found.`,
        });
      } else {
        res.send({ message: "Card deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

module.exports = router;
