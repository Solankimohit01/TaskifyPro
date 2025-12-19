// import mongoose from "mongoose";
// import bcrypt from "bcrypt";

// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     role:{
//         type:String,
//         enum:["Employee","Team_lead","Manager","Admin"],
//         default:"Employee"
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//         lowercase:true,
//         trim:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     team: {
//         type:mongoose.Types.ObjectId, 
//         ref:"Team"
//     },
//     settings: {
//         type:mongoose.Schema.Types.ObjectId,
//         ref: "Setting"
//     }
// }, { timestamps: true });

// userSchema.pre("save", async function (next) {
//     if(!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password=await bcrypt.hash(this.password, salt);
//     next();
// });

// userSchema.methods.matchPassword = function(candidate) {
//   return bcrypt.compare(candidate, this.password);
// };

// const User=mongoose.model("User", userSchema);

// export default User


import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

/* ---------- Password Hashing ---------- */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/* ---------- Password Match ---------- */
userSchema.methods.matchPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
