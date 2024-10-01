import { sql } from "../../database/index.js";

export const balanceController = async (req, res, next) => {
  const { balance } = req.body;

  const { userid } = res.locals;

  try {
    const result =
      await sql`UPDATE users SET balance=${balance} WHERE userid = ${userid}`;

    if (result.count === 0) {
      return res.status(404).json({ message: "balance oroogui bn" });
    }

    res.status(200).json({ message: "Balance updated successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
