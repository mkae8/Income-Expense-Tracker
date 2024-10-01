import { DbPath } from "../../utils/constant.js";
import { readFileSync } from "fs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sql } from "../../database/index.js";
dotenv.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const success = true;

  const user = await sql`SELECT * FROM users WHERE email=${email}`;

  if (user.length === 0) {
    success == false;
    res.status(400).send("User baihgui baian ugsun email deer");
    return;
  }

  const doesPasswordMatch = await bcrypt.compare(password, user[0].password);

  if (!doesPasswordMatch) {
    res.status(400).send("Нууц үг буруу байна.");
    return;
  }

  const token = jwt.sign(
    {
      userid: user[0].userid,
    },
    process.env.SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).send({ msg: success, user, token });
};
