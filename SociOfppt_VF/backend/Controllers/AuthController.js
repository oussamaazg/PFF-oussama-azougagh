import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// Registering a new User
export const registerUser = async (req, res) => {

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password , salt);
  req.body.password = hashedPass
  const newUser = new UserModel(req.body);
  const {email} = req.body
  try {
    // addition new
    const oldUser = await UserModel.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    // changed
    const user = await newUser.save();
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWTKEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// login User

export const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await UserModel.findOne({email: email})

        if (user) {
          const validity = await bcrypt.compare(password, user.password);

          if (!validity) {
            res.status(400).json("wrong password");
          } else {
            const token = jwt.sign(
              { email: user.email, id: user._id },
              process.env.JWTKEY,
              { expiresIn: "1h" }
            );
            res.status(200).json({ user, token });
          }
      } else{
          res.status(404).json("User does not exists")
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}