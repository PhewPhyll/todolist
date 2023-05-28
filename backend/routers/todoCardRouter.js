const express = require("express");
const toDoCard = require("../models/todoCard");
const todoCard = require("../models/todoCard");
const router = express.Router();

router.use(express.json());

//get all cards
router.get("/card", async (req, res) => {
  const result = await todoCard.find();
  res.json(result);
});

//get one card
router.get("/card/:id", async (req, res) => {
  const result = await todoCard.findById(req.params.id);
  res.json(result);
});

//create card
router.post("/card", async (req, res) => {
  todoCard.create(req.body).then((data) => {
    res.json(data);
  });
});

//update card
router.put("/card/:id", async (req, res) => {
  const result = toDoCard
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Card not found`,
        });
      } else {
        res.send({ message: "Card updated successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

//delete card
router.delete("/card/:id", async (req, res) => {
  const result = toDoCard
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Card not found`,
        });
      } else {
        res.send({ message: "Card deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

module.exports = router;
