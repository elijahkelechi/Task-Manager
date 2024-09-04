const express = require("express");
const router = express.Router();
const {
  getAllTask,
  addNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

router.get("/", getAllTask);
router.post("/", addNewTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
