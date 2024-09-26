import fs from "fs";
import { DbPath } from "../../utils/constant.js";

export const income = async (req, res) => {
  const { userId } = res.locals;

  const resultJson = await fs.readFileSync(DbPath, "utf-8");
  const result = JSON.parse(resultJson);

  const user = result.users.find((user) => user.userId === userId);
  res.send(user);
};
