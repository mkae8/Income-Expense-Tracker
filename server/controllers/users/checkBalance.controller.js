import { readFileSync } from "fs";

export const checkBalanceController = async (req, res) => {
  try {
    const { userId } = res.locals;

    const resultJson = readFileSync(DbPath, "utf-8");
    const data = JSON.parse(resultJson);

    const user = data.users.find((el) => el.userId === userId);

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
