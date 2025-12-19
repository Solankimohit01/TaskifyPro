// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children, allowedRoles }) {
//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   // If no token, always redirect to login
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   // If role not allowed, redirect to login
//   if (!role || !allowedRoles.includes(role)) {
//     return <Navigate to="/login" replace />;
//   }

//   // Otherwise, render the protected component
//   return children;
// }


// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const token = localStorage.getItem("token");

//   // If not logged in, redirect to login
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }


import { Navigate } from "react-router-dom";

/**
 * Protects routes that require authentication.
 * Redirects unauthenticated users to Login page.
 */
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
