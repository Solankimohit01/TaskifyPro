// function Dashboard() {
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div>
//       <h1>Welcome to Dashboard!!</h1>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Dashboard;


// import React, { useEffect, useState } from "react";

// function Dashboard() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       window.location.href = "/login"; // redirect if not logged in
//       return;
//     }

//     // fetch protected user info (optional)
//     fetch("http://localhost:4000/api/auth/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => setUser(data.user))
//       .catch(() => setUser(null));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div className="dashboard">
//       <h2>Welcome {user ? user.name : "User"} 🎉</h2>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Dashboard;


// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-lg">
//         <h2 className="text-xl font-bold">Welcome to Dashboard 🎉</h2>
//         <button
//           className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//           onClick={() => {
//             localStorage.removeItem("token");
//             navigate("/login");
//           }}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import "../dashboards/dashboard.css";

// function EmployeeDashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const token = localStorage.getItem("token");

//   // Fetch tasks
//   useEffect(() => {
//     fetch("http://localhost:4000/api/tasks", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => setTasks(data))
//       .catch((err) => console.error(err));
//   }, [token]);

//   // Add Task
//   const handleAdd = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:4000/api/tasks", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ title }),
//     });
//     const newTask = await res.json();
//     setTasks([...tasks, newTask]);
//     setTitle("");
//   };

//   // Delete Task
//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:4000/api/tasks/${id}`, {
//       method: "DELETE",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setTasks(tasks.filter((task) => task._id !== id));
//   };

//   return (
//     <div className="dashboard">
//       <h2>My Tasks</h2>

//       {/* Add Task Form */}
//       <form onSubmit={handleAdd}>
//         <input
//           type="text"
//           placeholder="New Task..."
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <button type="submit" onClick={() => handleAdd(tasks._id)}>Add</button>
//       </form>

//       {/* Task List */}
//       <ul>
//         {tasks.map((task) => (
//           <li key={task._id}>
//             {task.title}
//             <button onClick={() => handleDelete(task._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default EmployeeDashboard;


// export default Dashboard;



// import React from "react";

// export default function EmployeeDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">
//           👨‍💻 Employee Dashboard
//         </h1>
//         <p className="text-gray-600 mb-6">
//           Welcome, Employee! View your assigned tasks and project updates.
//         </p>

//         <div className="space-y-4">
//           <div className="bg-blue-400 text-white p-6 rounded-2xl shadow">
//             <h2 className="text-lg font-semibold">My Tasks</h2>
//             <p>Check your pending tasks</p>
//           </div>
//           <div className="bg-green-400 text-white p-6 rounded-2xl shadow">
//             <h2 className="text-lg font-semibold">Notifications</h2>
//             <p>Stay updated with alerts</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { logout } from "../components/auth.jsx";
// import "./dashboard.css";

// export default function EmployeeDashboard() {
//   const name = localStorage.getItem("name");
//   const role = localStorage.getItem("role");  

//   return (
//     <div className="dashboard-container">

//       <aside className="sidebar">
//         <div>
//           <h2>👨‍💻 {name}</h2>
//           <ul>
//             <li><a href="/employee/dashboard">Dashboard</a></li>
//             <li><a href="/tasks">Manage Tasks</a></li>
//             <li><a href="/notifications">Notifications</a></li>
//           </ul>
//         </div>
//         <div>
//           <button className="btn" onClick={logout}>Logout</button>
//         </div>
//       </aside>

//       <main className="dashboard-main">
//         <header className="dashboard-header">
//           <h1>Welcome, {name} !</h1>
//           <div className="user-info">Logged in as: {role}</div>
//         </header>

//         <section className="dashboard-content">
//           <h2>Overview</h2>
//           <div className="card">
//             <h3>Pending Tasks</h3>
//             <p>3 Pending Tasks</p>
//           </div>
//           <div className="card">
//             <h3>Notifications</h3>
//             <p>1 New Notification</p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { logout } from "../components/auth.jsx";
// import "./dashboard.css";

// export default function EmployeeDashboard() {
//   const name = localStorage.getItem("name");
//   const role = localStorage.getItem("role");  
//   const token = localStorage.getItem("token");

//   const [tasks, setTasks] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [leaveReason, setLeaveReason] = useState("");
//   const [showTasks, setShowTasks] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showLeave, setShowLeave] = useState(false);

//   // Fetch tasks from backend
//   const fetchTasks = async () => {
//     try {
//       const res = await fetch("http://localhost:4000/api/tasks/employee", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       setTasks(data);
//     } catch (err) {
//       console.error("Error fetching tasks", err);
//     }
//   };

//   // Fetch notifications
//   const fetchNotifications = async () => {
//     try {
//       const res = await fetch("http://localhost:4000/api/notifications", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       setNotifications(data);
//     } catch (err) {
//       console.error("Error fetching notifications", err);
//     }
//   };

//   // Fetch leave requests
//   const fetchLeaves = async () => {
//     try {
//       const res = await fetch("http://localhost:4000/api/leaves/employee", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       setLeaveRequests(data);
//     } catch (err) {
//       console.error("Error fetching leave requests", err);
//     }
//   };

//   // Submit leave request
//   const submitLeaveRequest = async () => {
//     try {
//       await fetch("http://localhost:4000/api/leaves", {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}` 
//         },
//         body: JSON.stringify({ reason: leaveReason }),
//       });
//       setLeaveReason("");
//       fetchLeaves();
//     } catch (err) {
//       console.error("Error submitting leave", err);
//     }
//   };

//   // Mark task as completed
//   const markCompleted = async (taskId) => {
//     try {
//       await fetch(`http://localhost:4000/api/tasks/${taskId}/complete`, {
//         method: "PUT",
//         headers: { 
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}` 
//         },
//       });
//       fetchTasks(); // refresh task list
//     } catch (err) {
//       console.error("Error marking task completed", err);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div>
//           <h2>👨‍💻 {name}</h2>
//           <ul>
//             <li><a href="/employee/dashboard">Dashboard</a></li>
//             <li><a href="/tasks">Manage Tasks</a></li>
//             <li><a href="/notifications">Notifications</a></li>
//             <li><a href="/employee/leaves">Leave Requests</a></li>
//           </ul>
//         </div>
//         <div>
//           <button className="btn" onClick={logout}>Logout</button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-main">
//         <header className="dashboard-header">
//           <h1>Welcome, {name} !</h1>
//           <div className="user-info">Logged in as: {role}</div>
//         </header>

//         <section className="dashboard-content">
//           <h2>Overview</h2>

//           {/* Pending Tasks Card */}
//           <div className="card" onClick={() => { 
//             setShowTasks(!showTasks); 
//             if (!showTasks) fetchTasks(); 
//           }}>
//             <h3>Pending Tasks</h3>
//             <p>{tasks.filter(t => t.status === "pending").length} Pending Tasks</p>

//             {showTasks && (
//               <div className="task-list">
//                 {tasks.map((task) => (
//                   <div key={task._id} className="task-item">
//                     <span>{task.title} - {task.status}</span>
//                     {task.status === "pending" && (
//                       <button onClick={() => markCompleted(task._id)}>
//                         Mark Completed
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Notifications Card */}
//           <div className="card" onClick={() => { 
//             setShowNotifications(!showNotifications); 
//             if (!showNotifications) fetchNotifications(); 
//           }}>
//             <h3>Notifications</h3>
//             <p>{notifications.length} New Notifications</p>

//             {showNotifications && (
//               <div className="notification-list">
//                 {notifications.map((note) => (
//                   <div key={note._id} className="notification-item">
//                     {note.message}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Leave Request Card */}
//           <div className="card" onClick={() => { 
//             setShowLeave(!showLeave); 
//             if (!showLeave) fetchLeaves(); 
//           }}>
//             <h3>Leave Requests</h3>
//             <p>{leaveRequests.length} Submitted</p>

//             {showLeave && (
//               <div>
//                 <div className="leave-form">
//                   <input 
//                     type="text" 
//                     placeholder="Enter reason" 
//                     value={leaveReason} 
//                     onChange={(e) => setLeaveReason(e.target.value)} 
//                   />
//                   <button onClick={submitLeaveRequest}>Submit</button>
//                 </div>

//                 <div className="leave-list">
//                   {leaveRequests.map((req) => (
//                     <div key={req._id} className="leave-item">
//                       {req.reason} - <strong>{req.status}</strong>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//         </section>
//       </main>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { logout } from "../components/auth.jsx";
// import "./dashboard.css";

// export default function EmployeeDashboard() {
//   const name = localStorage.getItem("name");
//   const role = localStorage.getItem("role");
//   const employeeId = localStorage.getItem("_id"); // store id on login

//   // states
//   const [tasks, setTasks] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [showTasks, setShowTasks] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);

//   // ✅ Fetch tasks from backend
//   const fetchTasks = async () => {
//     try {
//       const res = await fetch(`http://localhost:4000/api/tasks/${employeeId}`);
//       if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
//       const data = await res.json();
//       setTasks(data);
//     } catch (err) {
//       console.error("Error fetching tasks:", err);
//     }
//   };

//   // ✅ Mark task completed
//   const markCompleted = async (taskId) => {
//     try {
//       await fetch(`http://localhost:4000/api/tasks/${taskId}/complete`, {
//         method: "PUT",
//       });
//       fetchTasks(); // refresh after update
//     } catch (err) {
//       console.error("Error updating task:", err);
//     }
//   };

//   // ✅ Fetch notifications
//   const fetchNotifications = async () => {
//     try {
//       const res = await fetch(
//         `http://localhost:4000/api/notifications/${employeeId}`
//       );
//       if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
//       const data = await res.json();
//       setNotifications(data);
//     } catch (err) {
//       console.error("Error fetching notifications:", err);
//     }
//   };

//   // Load data when component mounts
//   useEffect(() => {
//     fetchTasks();
//     fetchNotifications();
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <div>
//           <h2>👨‍💻 {name}</h2>
//           <ul>
//             <li><a href="/employee/dashboard">Dashboard</a></li>
//             <li><a href="/tasks">Manage Tasks</a></li>
//             <li><a href="/notifications">Notifications</a></li>
//           </ul>
//         </div>
//         <div>
//           <button className="btn" onClick={logout}>Logout</button>
//         </div>
//       </aside>

//       <main className="dashboard-main">
//         <header className="dashboard-header">
//           <h1>Welcome, {name}!</h1>
//           <div className="user-info">Logged in as: {role}</div>
//         </header>

//         <section className="dashboard-content">
//           <h2>Overview</h2>

//           {/* 📌 Pending Tasks Card */}
//           <div className="card" onClick={() => setShowTasks(!showTasks)}>
//             <h3>Pending Tasks</h3>
//             <p>{tasks.filter(t => t.status === "pending").length} Pending Tasks</p>
//           </div>

//           {showTasks && (
//             <div className="expanded-card">
//               <h3>All Tasks</h3>
//               <ul>
//                 {tasks.map(task => (
//                   <li key={task._id}>
//                     <span>
//                       {task.title} - {task.status}
//                     </span>
//                     {task.status === "pending" && (
//                       <button className="btn" onClick={() => markCompleted(task._id)}>
//                         Mark Completed
//                       </button>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* 📌 Notifications Card */}
//           <div className="card" onClick={() => setShowNotifications(!showNotifications)}>
//             <h3>Notifications</h3>
//             <p>{notifications.length} New Notifications</p>
//           </div>

//           {showNotifications && (
//             <div className="expanded-card">
//               <h3>All Notifications</h3>
//               <ul>
//                 {notifications.map(note => (
//                   <li key={note._id}>{note.message} ({new Date(note.date).toLocaleString()})</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { logout } from "../components/auth.jsx";
// import "./dashboard.css";

// export default function EmployeeDashboard() {
//   const name = localStorage.getItem("name");
//   const role = localStorage.getItem("role");
//   const employeeId = localStorage.getItem("_id"); // store id on login

//   // states
//   const [tasks, setTasks] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [showTasks, setShowTasks] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);

//   // ✅ Fetch tasks from backend
//   const fetchTasks = async () => {
//     try {
//       const res = await fetch(`http://localhost:4000/api/tasks/employee/${employeeId}`);
//       if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
//       const data = await res.json();
//       setTasks(data);
//     } catch (err) {
//       console.error("Error fetching tasks:", err);
//     }
//   };

//   // ✅ Mark task completed
//   const markCompleted = async (taskId) => {
//     try {
//       await fetch(`http://localhost:4000/api/tasks/${taskId}/complete`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//       });
//       fetchTasks(); // refresh after update
//     } catch (err) {
//       console.error("Error updating task:", err);
//     }
//   };

//   // ✅ Fetch notifications
//   const fetchNotifications = async () => {
//     try {
//       const res = await fetch(`http://localhost:4000/api/notifications/employee/${employeeId}`);
//       if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
//       const data = await res.json();
//       setNotifications(data);
//     } catch (err) {
//       console.error("Error fetching notifications:", err);
//     }
//   };

//   // Load data when component mounts
//   useEffect(() => {
//     fetchTasks();
//     fetchNotifications();
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <div>
//           <h2>👨‍💻 {name}</h2>
//           <ul>
//             <li><a href="/employee/dashboard">Dashboard</a></li>
//             <li><a href="/tasks">Manage Tasks</a></li>
//             <li><a href="/notifications">Notifications</a></li>
//           </ul>
//         </div>
//         <div>
//           <button className="btn" onClick={logout}>Logout</button>
//         </div>
//       </aside>

//       <main className="dashboard-main">
//         <header className="dashboard-header">
//           <h1>Welcome, {name}!</h1>
//           <div className="user-info">Logged in as: {role}</div>
//         </header>

//         <section className="dashboard-content">
//           <h2>Overview</h2>

//           {/* 📌 Pending Tasks Card */}
//           <div className="card" onClick={() => setShowTasks(!showTasks)}>
//             <h3>Pending Tasks</h3>
//             <p>{tasks.filter(t => t.status === "pending").length} Pending Tasks</p>
//           </div>

//           {showTasks && (
//             <div className="expanded-card">
//               <h3>All Tasks</h3>
//               <ul>
//                 {tasks.length === 0 ? (
//                   <li>No tasks assigned yet.</li>
//                 ) : (
//                   tasks.map(task => (
//                     <li key={task._id}>
//                       <span>
//                         {task.title} - {task.status}
//                       </span>
//                       {task.status === "pending" && (
//                         <button className="btn" onClick={() => markCompleted(task._id)}>
//                           Mark Completed
//                         </button>
//                       )}
//                     </li>
//                   ))
//                 )}
//               </ul>
//             </div>
//           )}

//           {/* 📌 Notifications Card */}
//           <div className="card" onClick={() => setShowNotifications(!showNotifications)}>
//             <h3>Notifications</h3>
//             <p>{notifications.length} New Notifications</p>
//           </div>

//           {showNotifications && (
//             <div className="expanded-card">
//               <h3>All Notifications</h3>
//               <ul>
//                 {notifications.length === 0 ? (
//                   <li>No notifications yet.</li>
//                 ) : (
//                   notifications.map(note => (
//                     <li key={note._id}>
//                       {note.message} ({new Date(note.date).toLocaleString()})
//                     </li>
//                   ))
//                 )}
//               </ul>
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import DashboardLayout from "../components/DashboardLayout.jsx";
// import Card from "../components/Card.jsx";
// import { getEmployeeTasks, completeTask } from "../../api/tasks.js";
// import { getEmployeeNotifications } from "../../api/notifications.js";

// export default function EmployeeDashboard() {
//   const employeeId = localStorage.getItem("_id");

//   const [tasks, setTasks] = useState([]);
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showTasks, setShowTasks] = useState(false);
//   const [showNotes, setShowNotes] = useState(false);
//   const pendingCount = tasks.filter((t) => t.status === "pending").length;

//   async function load() {
//     try {
//       const [t, n] = await Promise.all([
//         getEmployeeTasks(employeeId),
//         getEmployeeNotifications(employeeId),
//       ]);
//       setTasks(t || []);
//       setNotes(n || []);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (employeeId) load();
//   }, [employeeId]);

//   const onComplete = async (id) => {
//     await completeTask(id);
//     load();
//   };

//   return (
//     <DashboardLayout>
//       <h2 className="section-title">Overview</h2>

//       <Card
//         title="Pending Tasks"
//         subtitle={`${pendingCount} Pending Tasks`}
//         onClick={() => setShowTasks((s) => !s)}
//       />
//       {showTasks && (
//         <div className="card expanded">
//           <h3>All Tasks</h3>
//           {loading ? (
//             <p className="muted">Loading…</p>
//           ) : tasks.length === 0 ? (
//             <p className="muted">No tasks assigned yet.</p>
//           ) : (
//             <ul className="list">
//               {tasks.map((t) => (
//                 <li key={t._id} className="list-row">
//                   <div>
//                     <strong>{t.title}</strong>{" "}
//                     <span className={`badge ${t.status}`}>{t.status}</span>
//                   </div>
//                   {t.status === "pending" && (
//                     <button className="btn" onClick={() => onComplete(t._id)}>
//                       Mark Completed
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}

//       <Card
//         title="Notifications"
//         subtitle={`${notes.length} New Notifications`}
//         onClick={() => setShowNotes((s) => !s)}
//       />
//       {showNotes && (
//         <div className="card expanded">
//           <h3>All Notifications</h3>
//           {loading ? (
//             <p className="muted">Loading…</p>
//           ) : notes.length === 0 ? (
//             <p className="muted">No notifications yet.</p>
//           ) : (
//             <ul className="list">
//               {notes.map((n) => (
//                 <li key={n._id} className="list-row">
//                   {n.message}{" "}
//                   <span className="muted">
//                     {new Date(n.date).toLocaleString()}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </DashboardLayout>
//   );
// }

// import { useEffect, useState } from "react";
// import DashboardLayout from "../layouts/DashboardLayout.jsx";
// import "../styles/dashboard.css";
// // import Card from "../components/Card.jsx";
// // import { getEmployeeTasks, completeTask } from "C:/MOHIT/45Training/MERN_Project/frontend/api/tasks.js";
// // import { getEmployeeNotifications } from "C:/MOHIT/45Training/MERN_Project/frontend/api/notifications.js";


// export default function EmployeeDashboard() {
//   const employeeId = localStorage.getItem("_id");
//   const [tasks, setTasks] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     fetchTasks();
//     fetchNotifications();
//   }, []);

//   async function fetchTasks() {
//     const res = await fetch(`http://localhost:4000/api/tasks/employee/${employeeId}`);
//     if (res.ok) setTasks(await res.json());
//   }

//   async function fetchNotifications() {
//     const res = await fetch(`http://localhost:4000/api/notifications/employee/${employeeId}`);
//     if (res.ok) setNotifications(await res.json());
//   }

//   async function markCompleted(taskId) {
//     await fetch(`http://localhost:4000/api/tasks/${taskId}/complete`, { method: "PUT" });
//     fetchTasks();
//   }

//   return (
//     <DashboardLayout>
//       <h2>Overview</h2>

//       <div className="card">
//         <h3>Pending Tasks</h3>
//         <p>{tasks.filter(t => t.status === "pending").length} pending</p>
//       </div>

//       <div className="card">
//         <h3>Notifications</h3>
//         <p>{notifications.length} new</p>
//       </div>

//       <div className="expanded-card">
//         <h3>All Tasks</h3>
//         <ul>
//           {tasks.length === 0 ? <li>No tasks yet.</li> : tasks.map(task => (
//             <li key={task._id}>
//               {task.title} - {task.status}
//               {task.status === "pending" && (
//                 <button className="btn" onClick={() => markCompleted(task._id)}>Mark Done</button>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </DashboardLayout>
//   );
// }


// import { useEffect, useState } from "react";
// import DashboardLayout from "../layouts/DashboardLayout.jsx";
// import Card from "../components/Card.jsx";
// import axios from "axios";


// export default function EmployeeDashboard() {
//   const employeeId = localStorage.getItem("_id");
//   const token = localStorage.getItem("token");

//   const [tasks, setTasks] = useState([]);
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showTasks, setShowTasks] = useState(false);
//   const [showNotes, setShowNotes] = useState(false);

//   const pendingCount = tasks.filter((t) => t.status === "pending").length;

//   // Axios instance with auth header
//   const api = axios.create({
//     baseURL: "http://localhost:4000/api",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   async function load() {
//     try {
//       // fetch tasks assigned to this employee
//       const taskRes = await api.get(`/tasks?assignedTo=${employeeId}`);
//       // fetch notifications for this employee
//       const noteRes = await api.get(`/notifications/${employeeId}`);

//       setTasks(taskRes.data || []);
//       setNotes(noteRes.data || []);
//     } catch (e) {
//       console.error("Error loading dashboard:", e.response?.data || e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (employeeId && token) load();
//   }, [employeeId, token]);

//   const onComplete = async (id) => {
//     try {
//       await api.put(`/tasks/${id}/complete`);
//       load(); // reload after marking completed
//     } catch (e) {
//       console.error("Error completing task:", e.response?.data || e.message);
//     }
//   };

//   return (
//     <DashboardLayout>
//       <h2 className="section-title">Overview</h2>

//       {/* Pending Tasks Card */}
//       <Card
//         title="Pending Tasks"
//         subtitle={`${pendingCount} Pending Tasks`}
//         onClick={() => setShowTasks((s) => !s)}
//       />
//       {showTasks && (
//         <div className="card expanded">
//           <h3>All Tasks</h3>
//           {loading ? (
//             <p className="muted">Loading…</p>
//           ) : tasks.length === 0 ? (
//             <p className="muted">No tasks assigned yet.</p>
//           ) : (
//             <ul className="list">
//               {tasks.map((t) => (
//                 <li key={t._id} className="list-row">
//                   <div>
//                     <strong>{t.title}</strong>{" "}
//                     <span className={`badge ${t.status}`}>{t.status}</span>
//                   </div>
//                   {t.status === "pending" && (
//                     <button className="btn" onClick={() => onComplete(t._id)}>
//                       Mark Completed
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}

//       {/* Notifications Card */}
//       <Card
//         title="Notifications"
//         subtitle={`${notes.length} New Notifications`}
//         onClick={() => setShowNotes((s) => !s)}
//       />
//       {showNotes && (
//         <div className="card expanded">
//           <h3>All Notifications</h3>
//           {loading ? (
//             <p className="muted">Loading…</p>
//           ) : notes.length === 0 ? (
//             <p className="muted">No notifications yet.</p>
//           ) : (
//             <ul className="list">
//               {notes.map((n) => (
//                 <li key={n._id} className="list-row">
//                   {n.message}{" "}
//                   <span className="muted">
//                     {new Date(n.createdAt).toLocaleString()}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </DashboardLayout>
//   );
// }


// import { useEffect, useState } from "react";
// import api from "../api/api.js";
// import "../styles/main.css";

// export default function Dashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [loading, setLoading] = useState(true);

//   const userName = localStorage.getItem("name");

//   /* ---------- Fetch Tasks ---------- */
//   const fetchTasks = async () => {
//     try {
//       const res = await api.get("/tasks");
//       setTasks(res.data);
//     } catch (err) {
//       console.error("Failed to fetch tasks");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   /* ---------- Create Task ---------- */
//   const handleCreate = async (e) => {
//     e.preventDefault();

//     if (!title) return;

//     try {
//       await api.post("/tasks", { title, description });
//       setTitle("");
//       setDescription("");
//       fetchTasks();
//     } catch (err) {
//       console.error("Failed to create task");
//     }
//   };

//   /* ---------- Update Task ---------- */
//   const updateStatus = async (id, status) => {
//     try {
//       await api.put(`/tasks/${id}`, { status });
//       fetchTasks();
//     } catch (err) {
//       console.error("Failed to update task");
//     }
//   };

//   /* ---------- Delete Task ---------- */
//   const deleteTask = async (id) => {
//     try {
//       await api.delete(`/tasks/${id}`);
//       fetchTasks();
//     } catch (err) {
//       console.error("Failed to delete task");
//     }
//   };

//   /* ---------- Logout ---------- */
//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/login";
//   };

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h2>Welcome, {userName}</h2>
//         <button className="btn danger" onClick={logout}>
//           Logout
//         </button>
//       </header>

//       {/* Create Task */}
//       <form onSubmit={handleCreate} className="task-form">
//         <input
//           type="text"
//           placeholder="Task title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Task description (optional)"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button type="submit" className="btn">
//           Add Task
//         </button>
//       </form>

//       {/* Task List */}
//       <h3>Your Tasks</h3>

//       {loading ? (
//         <p>Loading tasks...</p>
//       ) : tasks.length === 0 ? (
//         <p>No tasks created yet.</p>
//       ) : (
//         <ul className="task-list">
//           {tasks.map((task) => (
//             <li key={task._id} className="task-item">
//               <div>
//                 <strong>{task.title}</strong>
//                 <p>{task.description}</p>
//                 <span className={`status ${task.status}`}>
//                   {task.status}
//                 </span>
//               </div>

//               <div className="actions">
//                 {task.status !== "completed" && (
//                   <button
//                     className="btn small"
//                     onClick={() => updateStatus(task._id, "completed")}
//                   >
//                     Mark Completed
//                   </button>
//                 )}
//                 <button
//                   className="btn small danger"
//                   onClick={() => deleteTask(task._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import api from "../api/api.js";
// import Header from "../components/Header.jsx";
// import "../styles/main.css";

// export default function Dashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [loading, setLoading] = useState(true);

//   const userName = localStorage.getItem("name");

//   /* ---------- Fetch Tasks ---------- */
//   const fetchTasks = async () => {
//     try {
//       const res = await api.get("/tasks");
//       setTasks(res.data);
//       setFilteredTasks(res.data);
//     } catch (err) {
//       console.error("Failed to fetch tasks");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   /* ---------- Search Logic ---------- */
//   const handleSearch = (query) => {
//     setSearchQuery(query);

//     if (!query.trim()) {
//       setFilteredTasks(tasks);
//       return;
//     }

//     const lower = query.toLowerCase();
//     const filtered = tasks.filter(
//       (task) =>
//         task.title.toLowerCase().includes(lower) ||
//         (task.description || "").toLowerCase().includes(lower)
//     );

//     setFilteredTasks(filtered);
//   };

//   /* ---------- Create Task ---------- */
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     if (!title) return;

//     try {
//       await api.post("/tasks", { title, description });
//       setTitle("");
//       setDescription("");
//       fetchTasks();
//     } catch (err) {
//       console.error("Failed to create task");
//     }
//   };

//   /* ---------- Update Task ---------- */
//   const updateStatus = async (id, status) => {
//     try {
//       await api.put(`/tasks/${id}`, { status });
//       fetchTasks();
//     } catch (err) {
//       console.error("Failed to update task");
//     }
//   };

//   /* ---------- Delete Task ---------- */
//   const deleteTask = async (id) => {
//     try {
//       await api.delete(`/tasks/${id}`);
//       fetchTasks();
//     } catch (err) {
//       console.error("Failed to delete task");
//     }
//   };

//   return (
//     <>
//       {/* Header with Search */}
//       <Header onSearch={handleSearch} />

//       {/* Dashboard Content */}
//       <main className="dashboard">
//         <div className="dashboard-header">
//           <div>
//             <h2>Welcome, {userName} 👋</h2>
//             <p className="muted">Manage your tasks efficiently</p>
//           </div>
//         </div>

//         {/* Create Task */}
//         <form onSubmit={handleCreate} className="task-form animate-fade">
//           <h3>Create New Task</h3>

//           <input
//             type="text"
//             placeholder="Task title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />

//           <textarea
//             placeholder="Task description (optional)"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           <button type="submit" className="btn">
//             Add Task
//           </button>
//         </form>

//         {/* Task List */}
//         <section className="task-section">
//           <h3>Your Tasks</h3>

//           {loading ? (
//             <p>Loading tasks...</p>
//           ) : filteredTasks.length === 0 ? (
//             <p className="muted">
//               {searchQuery ? "No matching tasks found." : "No tasks created yet."}
//             </p>
//           ) : (
//             <ul className="task-list">
//               {filteredTasks.map((task) => (
//                 <li key={task._id} className="task-item animate-fade">
//                   <div className="task-info">
//                     <strong>{task.title}</strong>
//                     {task.description && <p>{task.description}</p>}
//                     <span className={`status ${task.status}`}>
//                       {task.status}
//                     </span>
//                   </div>

//                   <div className="actions">
//                     {task.status !== "completed" && (
//                       <button
//                         className="btn small"
//                         onClick={() =>
//                           updateStatus(task._id, "completed")
//                         }
//                       >
//                         Complete
//                       </button>
//                     )}
//                     <button
//                       className="btn small danger"
//                       onClick={() => deleteTask(task._id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="app-footer">
//         <p>
//           © 2025 TaskifyPro | MERN Stack Project <br />
//           Industrial Training (45 Days)
//         </p>
//       </footer>
//     </>
//   );
// }


// import { useNavigate, Link } from "react-router-dom";

// export default function Header({ onSearch }) {
//   const navigate = useNavigate();
//   const isAuth = !!localStorage.getItem("token");
//   const name = localStorage.getItem("name");

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <header className="app-header">
//       {/* Logo */}
//       <div className="logo">
//         <span className="logo-icon">🗂️</span>
//         TaskifyPro
//       </div>

//       {/* Search (Only on Dashboard) */}
//       {onSearch && (
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search tasks..."
//             onChange={(e) => onSearch(e.target.value)}
//           />
//           <button className="btn small">Search</button>
//         </div>
//       )}

//       {/* Nav */}
//       <nav className="nav">
//         {!isAuth ? (
//           <>
//             <Link to="/login" className="btn outline">Login</Link>
//             <Link to="/register" className="btn">Register</Link>
//           </>
//         ) : (
//           <>
//             <span className="muted">Hi, {name}</span>
//             <button className="btn danger small" onClick={logout}>
//               Logout
//             </button>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }

// import { useNavigate, Link } from "react-router-dom";

// export default function Header({ onSearch }) {
//   const navigate = useNavigate();
//   const isAuth = !!localStorage.getItem("token");
//   const name = localStorage.getItem("name");

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <header className="app-header">
//       {/* Logo */}
//       <div className="logo">
//         <span className="logo-icon">🗂️</span>
//         TaskifyPro
//       </div>

//       {/* Search (Only on Dashboard) */}
//       {onSearch && (
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search tasks..."
//             onChange={(e) => onSearch(e.target.value)}
//           />
//           <button className="btn small">Search</button>
//         </div>
//       )}

//       {/* Nav */}
//       <nav className="nav">
//         {!isAuth ? (
//           <>
//             <Link to="/login" className="btn outline">Login</Link>
//             <Link to="/register" className="btn">Register</Link>
//           </>
//         ) : (
//           <>
//             <span className="muted">Hi, {name}</span>
//             <button className="btn danger small" onClick={logout}>
//               Logout
//             </button>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }


// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "../styles/main.css";

// export default function Header({ onSearch }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isAuth = !!localStorage.getItem("token");
//   const name = localStorage.getItem("name");
//   const isDashboard = location.pathname === "/dashboard";

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <header className="app-header">
//       {/* Logo */}
//       <div className="logo">
//         <span className="logo-icon">🗂️</span>
//         <span className="logo-text">TaskifyPro</span>
//       </div>

//       {/* Search Bar (Only on Dashboard) */}
//       {isAuth && isDashboard && onSearch && (
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search your tasks..."
//             onChange={(e) => onSearch(e.target.value)}
//           />
//           <button className="btn small">Search</button>
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className="nav">
//         {!isAuth ? (
//           <>
//             <Link to="/login" className="btn outline">
//               Login
//             </Link>
//             <Link to="/register" className="btn">
//               Register
//             </Link>
//           </>
//         ) : (
//           <>
//             <span className="user-info">
//               Hi, <strong>{name || "User"}</strong>
//             </span>
//             <button className="btn danger small" onClick={logout}>
//               Logout
//             </button>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }


import { useEffect, useRef, useState } from "react";
import api from "../api/api.js";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import "../styles/main.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const userName = localStorage.getItem("name");
  const topSectionRef = useRef(null);
  const tasksSectionRef = useRef(null);

  /* ================= FETCH TASKS ================= */
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
      setFilteredTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  /* ================= SEARCH ================= */
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredTasks(tasks);
      return;
    }

    const lower = query.toLowerCase();
    const filtered = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(lower) ||
        (task.description || "").toLowerCase().includes(lower)
    );

    setFilteredTasks(filtered);
  };

  /* ================= CREATE TASK ================= */
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await api.post("/tasks", { title, description });
      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (err) {
      console.error("Failed to create task");
    }
  };

  /* ================= UPDATE STATUS ================= */
  const updateStatus = async (id) => {
    try {
      await api.put(`/tasks/${id}`, { status: "completed" });
      fetchTasks();
    } catch (err) {
      console.error("Failed to update task");
    }
  };

  /* ================= DELETE ================= */
  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Failed to delete task");
    }
  };

  return (
    <DashboardLayout onSearch={handleSearch}
      onGoToTasks={() =>
      tasksSectionRef.current?.scrollIntoView({ behavior: "smooth" })
      }
      
      onGoToDashboard={() =>
      topSectionRef.current?.scrollIntoView({ behavior: "smooth" })
      }
      >
      {/* ---------- Welcome Section ---------- */}
      <div className="dashboard-header" ref={topSectionRef}>
        <h2>Welcome, {userName} 👋</h2>
        <p className="muted">Manage your tasks efficiently</p>
      </div>

      {/* ---------- Create Task ---------- */}
      <Card title="Create New Task" subtitle="Add and manage your daily tasks">
        <form onSubmit={handleCreate} className="task-form">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Task description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" className="btn">
            Add Task
          </button>
        </form>
      </Card>

      {/* ---------- Task List ---------- */}
      <section className="task-section" ref={tasksSectionRef}>
        <h3>Your Tasks</h3>

        {loading ? (
          <p className="muted">Loading tasks...</p>
        ) : filteredTasks.length === 0 ? (
          <div className="empty-state">
            {searchQuery
              ? "No matching tasks found."
              : "No tasks created yet. Start by adding one!"}
          </div>
        ) : (
          <div className="task-list">
            {filteredTasks.map((task) => (
              <Card
                key={task._id}
                title={task.title}
                subtitle={task.status}
                className="task-card"
              >
                {task.description && <p>{task.description}</p>}

                <div className="actions">
                  {task.status !== "completed" && (
                    <button
                      className="btn small"
                      onClick={() => updateStatus(task._id)}
                    >
                      Complete
                    </button>
                  )}
                  <button
                    className="btn small danger"
                    onClick={() => deleteTask(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}
