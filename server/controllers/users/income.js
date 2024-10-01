import { sql } from "../../database/index.js";

export const income = async (req, res) => {
  const { userId } = res.locals;

  try {
    const result = await sql`
      SELECT * FROM users WHERE userid = ${userId}
    `;

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }
    const user = result[0];

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
