// import Task from "../models/taskModel.js";

// export const createTask = async(req, res) => {
//     try {
//         const { title, description } = req.body;
//         const task = await Task.create({
//             title,
//             description,
//             user: req.user.id
//         });
//         res.status(201).json(task);
//     } catch (err) {
//         res.status(500).json({message: "Error creating task.", error:err.message });
//     }
// };

// export const getTasks = async(req, res) => {
//     try {
//         const tasks = await Task.find({
//             user: req.user.id
//         });
//         res.json(tasks);
//     } catch (err) {
//         res.status(500).json({message: "Error fetching task." });
//     }
// };

// export const updateTask = async(req, res) => {
//     try {
//         const {id} = req.params; 
//         const task = await Task.findOneAndUpdate(
//             {_id: id, user: req.user.id },
//             {new: true}
//         );
//         if (!task) return res.satus(404).json({message: "Task Not Found."});
//         res.json(task);
//     } catch (err) {
//         res.status(500).json({message: "Error updating task." });
//     }
// };


// export const deleteTask = async(req, res) => {
//     try {
//         const {id} = req.params; 
//         const task = await Task.findOneAndDelete(
//             {_id: id, user: req.user.id },
//         );
//         if (!task) return res.satus(404).json({message: "Task Not Found."});

//         res.json({message: "Task Deleted Successfully"});
//     } catch (err) {
//         res.status(500).json({message: "Error updating task." });
//     }
// };


// import Task from "../models/Task.js";

// // Create task
// export const createTask = async (req, res) => {
//   try {
//     const { title, description, assignedTo, team, status, dueDate } = req.body;
//     const doc = await Task.create({ title, description, assignedTo, team, status, dueDate });
//     const populated = await Task.findById(doc._id)
//       .populate("assignedTo", "name email role")
//       .populate("team", "name");
//     res.status(201).json(populated);
//   } catch (err) {
//     res.status(500).json({ message: "Error creating task.", error: err.message });
//   }
// };

// // Get tasks (all for now)
// export const getTasks = async (_req, res) => {
//   try {
//     const tasks = await Task.find()
//       .populate("assignedTo", "name email role")
//       .populate("team", "name");
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching tasks." });
//   }
// };

// // Update task
// export const updateTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const update = req.body; // allow title/description/status/assignedTo/team/dueDate
//     const task = await Task.findByIdAndUpdate(id, update, { new: true })
//       .populate("assignedTo", "name email role")
//       .populate("team", "name");
//     if (!task) return res.status(404).json({ message: "Task Not Found." });
//     res.json(task);
//   } catch (err) {
//     res.status(500).json({ message: "Error updating task." });
//   }
// };

// // Delete task
// export const deleteTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findByIdAndDelete(id);
//     if (!task) return res.status(404).json({ message: "Task Not Found." });
//     res.json({ message: "Task Deleted Successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Error deleting task." });
//   }
// };


// // Get all tasks
// export const getTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find()
//       .populate("assignedTo", "name email") // populate assigned users
//       .populate("team", "name"); // show team name
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch tasks" });
//   }
// };

// exports.getTasksForUser = async (req, res) => {
//   const userId = req.user._id;
//   try {
//     const tasks = await Task.find({ assignedTo: userId }).populate('assignedTo');
//     res.status(200).json(tasks);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// import Task from "../models/Task.js";
// import Notification from "../models/Notification.js";

// // Helper: Create a notification
// const createNotification = async (userId, message) => {
//   try {
//     await Notification.create({ user: userId, message });
//   } catch (err) {
//     console.error("Error creating notification:", err.message);
//   }
// };

// // Create task
// export const createTask = async (req, res) => {
//   try {
//     const { title, description, assignedTo, team, status, dueDate } = req.body;
//     const doc = await Task.create({ title, description, assignedTo, team, status, dueDate });

//     const populated = await Task.findById(doc._id)
//       .populate("assignedTo", "name email role")
//       .populate("team", "name");

//     // 🔔 Notify assigned user
//     if (assignedTo) {
//       await createNotification(
//         assignedTo,
//         `You have been assigned a new task: "${title}"`
//       );
//     }

//     res.status(201).json(populated);
//   } catch (err) {
//     res.status(500).json({ message: "Error creating task.", error: err.message });
//   }
// };

// // Get tasks
// export const getTasks = async (_req, res) => {
//   try {
//     const tasks = await Task.find()
//       .populate("assignedTo", "name email role")
//       .populate("team", "name");
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching tasks." });
//   }
// };

// // Update task
// export const updateTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const update = req.body;

//     const task = await Task.findByIdAndUpdate(id, update, { new: true })
//       .populate("assignedTo", "name email role")
//       .populate("team", "name");

//     if (!task) return res.status(404).json({ message: "Task Not Found." });

//     // 🔔 Notify user if reassigned or status changed
//     if (update.assignedTo) {
//       await createNotification(
//         update.assignedTo,
//         `You have been reassigned a task: "${task.title}"`
//       );
//     }
//     if (update.status) {
//       await createNotification(
//         task.assignedTo,
//         `The status of your task "${task.title}" is now "${task.status}".`
//       );
//     }

//     res.json(task);
//   } catch (err) {
//     res.status(500).json({ message: "Error updating task." });
//   }
// };

// // Delete task
// export const deleteTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findByIdAndDelete(id);

//     if (!task) return res.status(404).json({ message: "Task Not Found." });

//     // 🔔 Notify assigned user
//     if (task.assignedTo) {
//       await createNotification(
//         task.assignedTo,
//         `Your task "${task.title}" has been deleted.`
//       );
//     }

//     res.json({ message: "Task Deleted Successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Error deleting task." });
//   }
// };


import Task from "../models/Task.js";

/* ---------- CREATE TASK ---------- */
export const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate, assignedTo } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Task title is required." });
    }

    const task = await Task.create({
      title,
      description,
      status,
      dueDate,
      assignedTo,
      createdBy: req.user._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to create task." });
  }
};

/* ---------- GET ALL TASKS ---------- */
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user._id })
      .populate("assignedTo", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks." });
  }
};

/* ---------- UPDATE TASK ---------- */
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndUpdate(
      { _id: id, createdBy: req.user._id },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to update task." });
  }
};

/* ---------- DELETE TASK ---------- */
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({
      _id: id,
      createdBy: req.user._id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json({ message: "Task deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete task." });
  }
};
