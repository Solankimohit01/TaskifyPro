// export default function Header() {
//     return (
//         <header className="navbar">
//             <div className="logo">TaskifyPro</div>
//             <nav>
//                 <a href="/login" className="btn btn-outline">Login</a>
//                 <a href="/register" className="btn btn-primary" >Register</a>
//             </nav>
//         </header>
//     );
// }

// import { useLocation } from "react-router-dom";
// import "../styles/main.css";

// export default function Header({ onSearch }) {
//   const location = useLocation();
//   const isLoggedIn = !!localStorage.getItem("token");
//   const isDashboard = location.pathname === "/dashboard";

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/login";
//   };

//   return (
//     <header className="app-header">
//       {/* Logo */}
//       <div className="logo">
//         <span className="logo-icon">🗂️</span>
//         <span className="logo-text">TaskifyPro</span>
//       </div>

//       {/* Search bar (only on dashboard) */}
//       {isLoggedIn && isDashboard && (
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search tasks..."
//             onChange={(e) => onSearch && onSearch(e.target.value)}
//           />
//           <button className="btn">Search</button>
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className="nav">
//         {!isLoggedIn ? (
//           <>
//             <a href="/login" className="btn outline">
//               Login
//             </a>
//             <a href="/register" className="btn">
//               Register
//             </a>
//           </>
//         ) : (
//           <button className="btn danger" onClick={handleLogout}>
//             Logout
//           </button>
//         )}
//       </nav>
//     </header>
//   );
// }

import { useLocation, Link } from "react-router-dom";
import "../styles/main.css";

export default function Header({ onSearch }) {
  const location = useLocation();

  const isLoggedIn = !!localStorage.getItem("token");
  const isDashboard = location.pathname === "/dashboard";
  const userName = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <header className="app-header">
      {/* ---------- Logo ---------- */}
      <div className="logo">
        <span className="logo-icon">🗂️</span>
        <span className="logo-text">TaskifyPro</span>
      </div>

      {/* ---------- Search Bar (Dashboard Only) ---------- */}
      {isLoggedIn && isDashboard && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search your tasks..."
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
          <button className="btn small">Search</button>
        </div>
      )}

      {/* ---------- Navigation ---------- */}
      <nav className="nav">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="btn outline">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        ) : (
          <>
            {isDashboard}
            <button className="btn danger small" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
