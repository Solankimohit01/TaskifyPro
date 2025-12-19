// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const protect = async (req, res, next) => {
//     let token;

//     if (req.headers.authorization && req.headers.authorization.startWith("Bearer")) {
//         try{
//             token = req.headers.authorization.split(" ")[1];

//             const decoded = jwt.verify(token, process.env.JWTSECRETKEY);

//             req.user = await User.findById(decoded.id).select("-password");
//             next();
//         }catch(err){
//             return res.status(401).json({message: "Not authorized, token failed"});
//         }
//     }

//     if (!token) {
//         return res.status(401).json({message: "Not authorized, no token"});
//     }
// };

// export default protect;


// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// // Protect routes - verify token
// export const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];

//       const decoded = jwt.verify(token, process.env.JWTSECRETKEY);

//       req.user = await User.findById(decoded.id).select("-password");

//       if (!req.user) {
//         return res.status(401).json({ message: "User not found." });
//       }

//       next();
//     } catch (err) {
//       console.error(err);
//       return res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// // Role-based authorization middleware
// export const authorize = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res
//         .status(403)
//         .json({ message: `Role ${req.user.role} is not authorized` });
//     }
//     next();
//   };
// };


// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const protect = async (req, res, next) => {
//   let token;

//   // ✅ First check Authorization header
//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     token = req.headers.authorization.split(" ")[1];
//   }
//   // ✅ Then check cookies
//   else if (req.cookies && req.cookies.token) {
//     token = req.cookies.token;
//   }

//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWTSECRETKEY);
//     req.user = await User.findById(decoded.id).select("-password");
//     if (!req.user) {
//       return res.status(401).json({ message: "User not found, not authorized" });
//     }
//     next();
//   } catch (err) {
//     console.error("Auth middleware error:", err.message);
//     return res.status(401).json({ message: "Not authorized, token failed" });
//   }
// };

import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  // Check Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found." });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

