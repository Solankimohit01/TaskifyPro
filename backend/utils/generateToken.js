// import jwt from "jsonwebtoken";

// const generateToken = (id, role) => {
//   return jwt.sign(
//     { id, role }, // payload
//     process.env.JWTSECRETKEY, // keep secret in .env
//     { expiresIn: "1d" } // token validity
//   );
// };

// export default generateToken;


import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

export default generateToken;
