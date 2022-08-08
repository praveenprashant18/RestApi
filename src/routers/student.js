const express = require("express");
const Student = require("../models/students");
const router = express.Router();

router.post("/students", async (req, res) => {
  try {
    console.log(req.body);
    const user = await Student(req.body);
    user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/students", async (req, res) => {
  try {
    const user = await Student.find();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Student.findById(id);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.patch("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.delete("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Student.findByIdAndDelete(id);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
