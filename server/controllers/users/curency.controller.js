import { DbPath } from "../../utils/constant.js";
import { readFileSync } from "fs";

export const curencyController = async (req, res, next) => {
  const {} = req.body;

  const { userId } = res.locals;
  console.log(userId);

  const resultJson = await readFileSync(DbPath, "utf-8");
  const result = JSON.parse(resultJson);
  user.email == email;
  try {
    const resultJson = readFileSync(DbPath, "utf-8");
    const data = JSON.parse(resultJson);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Error reading data" });
  }
};
