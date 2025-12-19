import User from "../models/User.js";  // adjust path if different

// ✅ Fetch all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");  // get all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};

// ✅ Update user role
export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({ message: "Role is required" });
    }

    const updateUser = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true, runValidators: true } // return updated user
    ).select("-password");

    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User role updated successfully.", updateUser });
  } catch (error) {
    res.status(500).json({ message: "Error updating role", error: error.message });
  }
};
