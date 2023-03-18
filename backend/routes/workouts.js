const express = require("express")
const {
  getWorkouts,

  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController")

const router = express.Router()

router.get("/", getWorkouts)


//Get a single workou
router.get("/:id", getWorkout)
//Post a new workout

router.post("/", createWorkout)
//Delete  a  workout
router.delete("/:id", deleteWorkout)
//Update a new workout
router.patch("/:id", updateWorkout)

module.exports = router
