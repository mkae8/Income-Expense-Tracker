import { readFileSync } from "fs";
import path from "path";

// const DbPath = path.resolve(__dirname, "db.json");

export const asd = async (req, res) => {
  try {
    const { currency } = req.body;
    const { userId } = res.locals;

    const resultJson = readFileSync(DbPath, "utf-8");
    const data = JSON.parse(resultJson);

    const user = data.users.find((el) => el.userId === userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const balanceInfo = user.balances.find((bal) => bal.currency === currency);

    if (balanceInfo) {
      return res
        .status(200)
        .json({ hasBalance: true, balance: balanceInfo.balance });
      ``;
    } else {
      return res.status(200).json({ hasBalance: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
