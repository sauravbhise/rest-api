import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = new mongoose.model("Task", taskSchema);
export default Task;
