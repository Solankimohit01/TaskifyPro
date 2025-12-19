// import mongoose, { mongo } from "mongoose";

// const TaskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   status: { type: String, enum: ["pending", "completed"], default: "pending" },
// });

// const taskScema=new mongoose.Schema({
//     title:{ 
//         type:String,
//         required:true
//     },
//     description:{
//         type:String
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     user:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true
//     },
// }, {timestamps: true});

// export default mongoose.model("Task", TaskSchema);


// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   status: { type: String, enum: ["Assigned", "In Progress", "Completed"], default: "Assigned" },
//   deadline: { type: Date },
//   createdAt: { type: Date, default: Date.now }
// });

// export default mongoose.model("Task", taskSchema);

// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   assignedTo: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   createdBy: {
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"User"
//   },
//   team: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Team",
//   },
//   status: {
//     type: String,
//     enum: ["pending", "in-progress", "completed"],
//     default: "pending",
//   },
//   dueDate: { type: Date },
//   createdAt: { type: Date, default: Date.now },
// },{ timestamps: true });

// const Task = mongoose.model("Task", taskSchema);
// export default Task;


import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    dueDate: {
      type: Date,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
