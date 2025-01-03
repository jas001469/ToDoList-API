import express from "express";
import {
  createNewTask,
  fetchAllTasks,
  fetchTaskByID,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js"; //import the controller functions
import { protectRoute } from "../middleware/authMiddleware.js"; //import the protectRoute middleware

const router = express.Router();

// Define the routes and the corresponding controller functions
router.post("/tasks", createNewTask);
router.get("/tasks", fetchAllTasks);
router.get("/tasks/:id", fetchTaskByID);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

//we can protect the routes using authMiddleware

// router.post('/tasks',protectRoute ,createNewTask)
// router.get('/tasks',protectRoute ,fetchAllTasks)
// router.get('/tasks/:id', protectRoute,fetchTaskByID)
// router.put('/tasks/:id',protectRoute ,updateTask)
// router.delete('/tasks/:id',protectRoute , deleteTask)

export default router;
