// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWTSECRETKEY, {
//         expiresIn: "1d"
//     });
// };

// export const register = async (req, res) => {
//     const {name, role, email, password} = req.body;
//     // console.log(req.body);

//     try {
//         const userExists = await User.findOne({email});

//         if (userExists) {
//             return res.status(400).json({message: "User already exists"});
//         }

//         const salt = await bcrypt.genSalt(10);
//         // const hashedPassword = await bcrypt.hash(password, salt);

//         const user = await User.create({
//             name,
//             role: role,
//             email,
//             password
//         });

//         res.status(201).json({
//             _id: user.id,
//             name: user.name,
//             role: user.role,
//             email:user.email,
//             token: generateToken(user.id),
//         });
        
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };


// export const login=async(req,res)=>{
//     const {email, password} = req.body;

//     try {

//         if (!email || !password) {
//             res.status(400).json({message:"Bad Request Missing Parameters."})
//         }
    
//         const userExists=await User.findOne({email})

//         if (!userExists) {
//             return res.status(400).json({message:"User not found."})
//         }

//         const isMatch = await bcrypt.compare(password, userExists.password);
//         console.log(password,userExists.password,await bcrypt.compare(password, userExists.password))
    
//         if (!isMatch) {
//             return res.status(400).json({message:"Incorrect credential : Password is not correct."})
//         }

//         res.status(200).json({
//             user:userExists,
//             token:generateToken(userExists)
//         })

//     } catch (err) {
//         console.log("Internal server error", err);
//         res.status(500).json({message:"Internal server error"})
//     }
// }

// export const logout=async(req, res)=>{
//     try {
//         res.json({message: "Logout Successful"});
//     } catch (err) {
//         console.log("Internal server error", err);
//         res.status(500).json({message:"Internal server error"})
//     }
// }


// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";
// import generateToken from "../utils/generateToken.js";

// // const generateToken = (id) => {
// //   return jwt.sign({ id }, process.env.JWTSECRETKEY, {
// //     expiresIn: "1d",
// //   });
// // };

// // ---------------- REGISTER ----------------
// export const register = async (req, res) => {
//   const { name, role, email, password } = req.body;
//   // console.log(req.body);

//   try {
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "Please provide all fields." });
//     }

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists." });
//     }

//     // const salt = await bcrypt.genSalt(10);
//     // const hashedPassword = await bcrypt.hash(password, salt);

//     const user = await User.create({
//       name,
//       role: role,
//       email,
//       password
//     });

//     const token = generateToken(user.id, user.role);

//     // ✅ set token in httpOnly cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//     });

//     res.status(201).json({
//       _id: user.id,
//       name: user.name,
//       role: user.role,
//       email: user.email,
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ---------------- LOGIN ----------------
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     if (!email || !password) {
//       return res.status(400).json({ message: "Missing email or password." });
//     }

//     const userExists = await User.findOne({ email }).select("+password");
//     if (!userExists) {
//       return res.status(400).json({ message: "User not found." });
//     }

//     const isMatch = await userExists.matchPassword(password);
//     if (!isMatch) {
//       return res
//         .status(400)
//         .json({ message: "Incorrect credentials: Password is not correct." });
//     }

//     const { password: _, ...userSafe } = userExists.toObject();

//     const token = generateToken(userExists._id, userExists.role);

//     // ✅ set token in httpOnly cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000,
//     });

//     res.status(200).json({
//       user: userSafe,
//       token,
//     });
//   } catch (err) {
//     console.error("Internal server error", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // ---------------- LOGOUT ----------------
// export const logout = async (req, res) => {
//   try {
//     // ✅ clear cookie on logout
//     res.clearCookie("token");
//     res.json({ message: "Logout successful." });
//   } catch (err) {
//     console.error("Internal server error", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // ---------------- GET CURRENT USER ----------------
// export const getMe = async (req, res) => {
//   try {
//     res.status(200).json(req.user);
//   } catch (err) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

/* ---------- REGISTER ---------- */
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists." });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = generateToken(user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed." });
  }
};

/* ---------- LOGIN ---------- */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed." });
  }
};

/* ---------- LOGOUT ---------- */
export const logout = (req, res) => {
  res.json({ message: "Logout successful." });
};

/* ---------- GET CURRENT USER ---------- */
export const getMe = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user." });
  }
};
