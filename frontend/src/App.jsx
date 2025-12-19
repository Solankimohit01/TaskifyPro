// import { Routes, Route } from "react-router-dom";
// import Register from "./pages/Register.jsx";
// import Login from "./pages/Login.jsx";
// import LandingPage from "./pages/LandingPage.jsx";
// import ProtectedRoute from "./components/ProtectedRoutes.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import ManagerDashboard from "./pages/ManagerDashboard.jsx";
// import TeamLeadDashboard from "./pages/TeamleadDashboard.jsx";
// import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";

// function App() {
//   return (
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         {/* Role Based Protected Routes */}
//         <Route
//           path="admin/dashboard"
//           element={
//             <ProtectedRoute allowedRoles={["Admin"]}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/manager/dashboard"
//           element={
//             <ProtectedRoute allowedRoles={["Manager"]}>
//               <ManagerDashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/teamlead/dashboard"
//           element={
//             <ProtectedRoute allowedRoles={["Team_lead"]}>
//               <TeamLeadDashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/employee/dashboard"
//           element={
//             <ProtectedRoute allowedRoles={["Employee"]}>
//               <EmployeeDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//   );
// }

// export default App;


// App.jsx
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import LandingPage from "./pages/Landing.jsx";
// import Register from "./pages/Register.jsx";
// import Login from "./pages/Login.jsx";
// import EmployeeDashboard from "./pages/Dashboard.jsx";

// export default function App() {
//   const role = (localStorage.getItem("role") || "").toLowerCase();

//   return (
//     // <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         {/* <Route path="/" element={<Navigate to={`/${role || "employee"}`} />} /> */}
//         <Route path="/admin/*" element={<AdminDashboard />} />
//         <Route path="/manager/dashboard" element={<ManagerDashboard />} />
//         <Route path="/teamlead/dashboard" element={<TeamLeadDashboard />} />
//         <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
//       </Routes>
//     // </BrowserRouter>
//   );
// }


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
