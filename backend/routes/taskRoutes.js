// import express from "express";
// // import { Task } from "../models/Task.js";
// // import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// // GET /api/tasks/employee
// router.get("/employee", authMiddleware, async (req, res) => {
//   try {
//     const tasks = await Task.find({ assignedTo: req.user.id });
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching tasks" });
//   }
// });

// // PUT /api/tasks/:id/complete
// router.put("/:id/complete", authMiddleware, async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id);
//     if (!task) return res.status(404).json({ error: "Task not found" });

//     task.status = "completed";
//     await task.save();

//     res.json({ message: "Task marked as completed", task });
//   } catch (err) {
//     res.status(500).json({ error: "Error updating task" });
//   }
// });


// // GET /api/notifications
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const notes = await Notification.find({ user: req.user.id });
//     res.json(notes);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching notifications" });
//   }
// });



// // router.post("/", authMiddleware, createTask);
// // router.get("/", authMiddleware, getTasks);
// // router.put("/:id", authMiddleware, updateTask);
// // router.delete("/:id", authMiddleware, deleteTask);

// export default router;


// import express from "express";
// import Task from "../models/taskModel.js";
// import { protect } from "../middleware/authMiddleware.js";
// // import { createTask, updateTask, deleteTask, getTasks } from "../controllers/taskController.js";

// const router = express.Router();


// // ✅ Get tasks for a specific employee
// router.get("/:employeeId", async (req, res) => {
//   try {
//     const { employeeId } = req.params;
//     const tasks = await Task.find({ assignedTo: employeeId });
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ Mark task complete
// router.put("/:taskId/complete", async (req, res) => {
//   try {
//     const { taskId } = req.params;
//     const updatedTask = await Task.findByIdAndUpdate(
//       taskId,
//       { status: "completed" },
//       { new: true }
//     );
//     res.json(updatedTask);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Manager/Admin assigns a task
// router.post("/assign", protect, async (req, res) => {
//   try {
//     if (req.user.role === "Employee") {
//       return res.status(403).json({ error: "Only managers/admins can assign tasks" });
//     }

//     const { title, description, assignedTo, deadline } = req.body;
//     const task = new Task({
//       title,
//       description,
//       assignedTo,
//       assignedBy: req.user.id,
//       deadline
//     });
//     await task.save();
//     res.json({ message: "Task assigned successfully", task });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get logged-in employee’s tasks
// router.get("/my-tasks", protect, async (req, res) => {
//   try {
//     const tasks = await Task.find({ assignedTo: req.user.id });
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Manager/Admin view all tasks
// router.get("/all", protect, async (req, res) => {
//   try {
//     if (req.user.role === "Employee") {
//       return res.status(403).json({ error: "Access denied" });
//     }
//     const tasks = await Task.find().populate("assignedTo", "name email");
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update task status (employee or manager)
// router.put("/update/:id", protect, async (req, res) => {
//   try {
//     const { status } = req.body;
//     const task = await Task.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );
//     res.json(task);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;


// import express from "express";
// import Task from "../models/Task.js"
// import { getTasks, createTask, updateTask, deleteTask } from "../controllers/taskController.js";

// const router = express.Router();

// router.post("/", createTask);
// router.get("/", getTasks);
// // router.get("/:id", getTaskByID);
// router.put("/:id", updateTask);      // <-- simple /:id
// router.delete("/:id", deleteTask);   // <-- simple /:id

// // routes/taskRoutes.js
// router.get("/api/tasks/employee/:id", async (req, res) => {
//   try {
//     const tasks = await Task.find({ assignedTo: req.params.employeeId });
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.put("/api/tasks/:id/complete", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(
//       req.params.taskId,
//       { status: "completed" },
//       { new: true }
//     );
//     res.json(task);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// export default router;

// import express from "express";
// import {
//   getTasks,
//   createTask,
//   updateTask,
//   deleteTask,
//   getEmployeeTasks,
//   markTaskCompleted
// } from "../controllers/taskController.js";

// const router = express.Router();

// // Base: /api/tasks
// router.post("/", createTask);       // Create new task
// router.get("/", getTasks);          // Get all tasks
// router.get("/employee/:id", getEmployeeTasks); // Get tasks for specific employee
// router.put("/:id", updateTask);     // Update task
// router.put("/:id/complete", markTaskCompleted); // Mark as completed
// router.delete("/:id", deleteTask);  // Delete task

// export default router;


// import express from "express";
// import {
//   getTasks,
//   createTask,
//   updateTask,
//   deleteTask,
// } from "../controllers/taskController.js";
// import Task from "../models/Task.js";
// import Notification from "../models/Notification.js";

// const router = express.Router();

// // Standard CRUD
// router.post("/", createTask);
// router.get("/", getTasks);
// router.put("/:id", updateTask);
// router.delete("/:id", deleteTask);

// // Get tasks for specific employee
// router.get("/employee/:employeeId", async (req, res) => {
//   try {
//     const tasks = await Task.find({ assignedTo: req.params.employeeId })
//       .populate("assignedTo", "name email role")
//       .populate("team", "name");
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Mark task as completed
// router.put("/:taskId/complete", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(
//       req.params.taskId,
//       { status: "completed" },
//       { new: true }
//     );

//     if (task && task.assignedTo) {
//       await Notification.create({
//         user: task.assignedTo,
//         message: `Your task "${task.title}" has been marked as completed.`,
//       });
//     }

//     res.json(task);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;


import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ---------- Protected Task Routes ---------- */
router.post("/", protect, createTask);
router.get("/", protect, getTasks);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

export default router;
