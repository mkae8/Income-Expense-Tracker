import { sql } from "../../database/index.js";

export const curencyController = async (req, res) => {
  const { currency } = req.body;
  const { userid } = res.locals;

  if (currency.length > 3) {
    return res.status(400).send("Currency code must be 3 characters or less.");
  }

  try {
    await sql`UPDATE users SET currency=${currency} WHERE userid=${userid}`;
    res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
