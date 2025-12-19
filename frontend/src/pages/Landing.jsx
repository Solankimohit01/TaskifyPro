// // // import Landing from "../components/Landing.jsx";
// // import "../styles/main.css";

// // export default function LandingPage() {
// //   return (
// //     <>
// //       <Landing />
// //     </>
// //   );
// // }


// // import { Link } from "react-router-dom";
// // import "../styles/main.css";

// // export default function Landing() {
// //   return (
// //     <div className="landing">
// //       <div className="landing-box">
// //         <h1>Task Management System</h1>
// //         <p>
// //           A MERN stack based application developed during industrial training
// //           to manage tasks efficiently.
// //         </p>

// //         <div className="landing-actions">
// //           <Link to="/login" className="btn">
// //             Login
// //           </Link>
// //           <Link to="/register" className="btn outline">
// //             Register
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { Link } from "react-router-dom";
// import Header from "../components/Header.jsx";
// import "../styles/main.css";

// export default function Landing() {
//   return (
//     <>
//       {/* Header */}
//       <Header />

//       {/* Main Landing Section */}
//       <section className="landing-section">
//         <div className="landing-content animate-fade">
//           <h1 className="landing-title">TaskifyPro</h1>
//           <p className="landing-subtitle">
//             A simple and efficient Task Management System built using the MERN
//             stack during 45 Days of Industrial Training.
//           </p>

//           <div className="landing-actions">
//             <Link to="/login" className="btn">
//               Login
//             </Link>
//             <Link to="/register" className="btn outline">
//               Register
//             </Link>
//           </div>
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


import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.css";

export default function Landing() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="landing">
        <div className="landing-box">
          <h1>TaskifyPro</h1>
          <p>
            A modern and efficient Task Management System.
          </p>

          <div className="landing-actions">
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn outline">
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
