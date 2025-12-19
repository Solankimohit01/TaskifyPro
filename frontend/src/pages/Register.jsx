// import { useState } from "react";
// import api from "../../api/api";
// import { useNavigate } from "react-router-dom";
// import "../styles/style.css";

// export default function Register() {
//   const [formData, setFormData] = useState({ name: "", role: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post("/api/auth/register", formData);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (

//     <div className="auth-page">
//       <form onSubmit={handleSubmit} className="auth-form">
//         <h2>Register</h2>
//         {error && <p className="error">{error}</p>}

//         <input
//           type="text"
//           name="name"
//           placeholder="Username"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="role"
//           placeholder="Role"
//           value={formData.role}
//           onChange={handleChange}
//           required
//         />

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

//         <button type="submit">Register</button>

//         <p>
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </form>
//     </div>
//   );
// }


// import { useState } from "react";
// import api from "../api/api.js";
// import { useNavigate, Link } from "react-router-dom";
// import "../styles/main.css";

// export default function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await api.post("/auth/register", formData);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed.");
//     }
//   };

//   return (
//     <div className="auth-page">
//       <form onSubmit={handleSubmit} className="auth-form">
//         <h2>Register</h2>

//         {error && <p className="error">{error}</p>}

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

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

//         <button type="submit">Register</button>

//         <p>
//           Already have an account? <Link to="/login">Login</Link>
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

// export default function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await api.post("/auth/register", formData);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed.");
//     }
//   };

//   return (
//     <>
//       {/* Header */}
//       <Header />

//       {/* Register Section */}
//       <section className="auth-section">
//         <div className="auth-form animate-fade">
//           <h2>Create Account 🚀</h2>
//           <p className="muted">
//             Register to start managing your tasks efficiently
//           </p>

//           {error && <p className="error">{error}</p>}

//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

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
//               Register
//             </button>
//           </form>

//           <p className="auth-switch">
//             Already have an account? <Link to="/login">Login</Link>
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

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api.post("/auth/register", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Register Section */}
      <section className="auth-section">
        <div className="auth-form">
          <h2>Create Account 🚀</h2>
          <p className="muted">
            Register to start managing your tasks efficiently
          </p>

          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

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
              Register
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
