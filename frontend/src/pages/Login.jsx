// import { useState } from "react";
// import api from "../api/api.js";
// import { useNavigate } from "react-router-dom";
// import "../styles/main.css";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting login:", formData);
//     try {
//       const res = await api.post("/api/auth/login", formData);
//       const {token, user} = res.data;

//       localStorage.setItem("token", token);
//       localStorage.setItem("role", user.role);
//       localStorage.setItem("name", user.name);
//       localStorage.setItem("_id", user._id);

//       switch (user.role) {
//         case "Admin":
//           navigate("/admin/dashboard"); 
//           break;

//         case "Manager":
//           navigate("/manager/dashboard"); 
//           break;

//         case "Team_lead":
//           navigate("/teamlead/dashboard"); 
//           break;
      
//         default:
//           navigate("/employee/dashboard");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed.");
//     }
//   };

//   return (

//     <div className="auth-page">
//       <form onSubmit={handleSubmit} className="auth-form">
//         <h2>Login</h2>
//         {error && <p className="error">{error}</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Login</button>

//         <p>
//           Don’t have an account? <a href="/register">Register</a>
//         </p>
//       </form>
//     </div>
//   );
// }


// import { useState } from "react";
// import api from "../api/api.js";
// import { useNavigate, Link } from "react-router-dom";
// import "../styles/main.css";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await api.post("/auth/login", formData);

//       const { token, name, role, _id } = res.data;

//       localStorage.setItem("token", token);
//       localStorage.setItem("name", name);
//       localStorage.setItem("role", role);
//       localStorage.setItem("userId", _id);

//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed.");
//     }
//   };

//   return (
//     <div className="auth-page">
//       <form onSubmit={handleSubmit} className="auth-form">
//         <h2>Login</h2>

//         {error && <p className="error">{error}</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Login</button>

//         <p>
//           Don’t have an account? <Link to="/register">Register</Link>
//         </p>
//       </form>
//     </div>
//   );
// }


// import { useState } from "react";
// import api from "../api/api.js";
// import { useNavigate, Link } from "react-router-dom";
// import Header from "../components/Header.jsx";
// import "../styles/main.css";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await api.post("/auth/login", formData);
//       const { token, name } = res.data;

//       localStorage.setItem("token", token);
//       localStorage.setItem("name", name);

//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed.");
//     }
//   };

//   return (
//     <>
//       {/* Header */}
//       <Header />

//       {/* Login Section */}
//       <section className="auth-section">
//         <div className="auth-form animate-fade">
//           <h2>Welcome Back 👋</h2>
//           <p className="muted">Login to manage your tasks efficiently</p>

//           {error && <p className="error">{error}</p>}

//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />

//             <button type="submit" className="btn w-full">
//               Login
//             </button>
//           </form>

//           <p className="auth-switch">
//             Don’t have an account? <Link to="/register">Register</Link>
//           </p>
//         </div>
//       </section>

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


import { useState } from "react";
import api from "../api/api.js";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", formData);
      const { token, name } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("name", name);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials.");
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Login Section */}
      <section className="auth-section">
        <div className="auth-form">
          <h2>Welcome Back 👋</h2>
          <p className="muted">
            Login to access your dashboard and manage tasks
          </p>

          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn w-full">
              Login
            </button>
          </form>

          <p className="auth-switch">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
