import mongoose from "mongoose";

// Schema for the tasks
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "in-progress", "completed"],
  },
});

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;
