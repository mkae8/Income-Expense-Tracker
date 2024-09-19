// export const loginController = async (req, res) => {
//   res.status(200).send("login success");
// };
import { DbPath } from "../../utils/constant.js";
import { readFileSync } from "fs";
import bcrypt from "bcryptjs";
export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const resultJson = await readFileSync(DbPath, "utf-8");
  const result = JSON.parse(resultJson);

  const user = result.users.find((el) => el.email === email);
  if (!user) {
    res.status(400).send("email buruu bn  ");
    return;
  }
  const doesPasswordMatch = await bcrypt.compare(password, user.password);
  if (!doesPasswordMatch) {
    res.status(400).send("buruushde bro ");
    return;
  }

  res.status(200).send("Success");
};
