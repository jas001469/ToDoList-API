import User from "../models/userModel.js";
import Task from "../models/taskModel.js";

//create new task
export const createNewTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error in creatingNewTask: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

//fetch all tasks
export const fetchAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    console.log("Error in fetchingAllTasks: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

//fetch task by id
export const fetchTaskByID = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ error: "Task not found" });

    res.status(200).json(task);
  } catch (error) {
    console.log("Error in fetching Task: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

//update task
export const updateTask = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["pending", "in-progress", "completed"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    console.log("Error in updating Task: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

//delete task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) return res.status(404).json({ error: "Task not found" });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log("Error in deleting Task: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
