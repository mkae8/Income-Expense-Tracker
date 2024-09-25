import { DbPath } from "../../utils/constant.js";
import { readFileSync } from "fs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const resultJson = await readFileSync(DbPath, "utf-8");
  const result = JSON.parse(resultJson);

  if (!email || !password) {
    res.status(400).send("Имэйл эсвэл нууц үг хоосон байна.");
    return;
  }

  const user = result.users.find((el) => el.email === email);

  if (!user) {
    res.status(400).send("Хэрэглэгчийн бүртгэл олдсонгүй.");
    return;
  }

  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    res.status(400).send("Нууц үг буруу байна.");
    return;
  }

  const token = jwt.sign(
    {
      userId: user.userId,
    },
    process.env.SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).send({ msg: "Амжилттай нэвтэрлээ.", token });
};
