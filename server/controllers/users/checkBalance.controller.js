import { readFileSync } from "fs";
import path from "path";

export const checkBalanceController = async (req, res) => {
  try {
    const { currency } = req.body; // Ensure this is passed in the request
    const { userId } = res.locals;

    const resultJson = readFileSync(DbPath, "utf-8");
    const data = JSON.parse(resultJson);

    const user = data.users.find((el) => el.userId === userId);

    const balanceInfo = user.balances.find((bal) => bal.currency === currency);

    if (balanceInfo) {
      return res
        .status(200)
        .json({ hasBalance: true, balance: balanceInfo.balance });
    } else {
      return res.status(200).json({ hasBalance: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
