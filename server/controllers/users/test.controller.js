import { sql } from "../../database/index.js";
import { v4 as uuid } from "uuid";

export const testController = async (req, res) => {
  const { username, email, age, password } = req.body;
  const createdAt = new Date();
  const userId = uuid();
  const updatedAt = new Date();

  const result =
    // await sql`INSERT INTO users(userId, username, email, age, password, createdAt, updatedAt) VALUES( ${userId}, ${username}, ${email}, ${age}, ${password}, ${createdAt}, ${updatedAt}) `;

    // await sql`SELECT * FROM users WHERE username='tsno'`;

    //   await sql`
    //   UPDATE users
    //   SET username = ${newUsername}, password = ${newPassword}
    //   WHERE userId = '85f8b1f4-32a3-4655-ad0a-c77e1a1da2c8';
    // `;

    // await sql`
    //     DELETE FROM users
    //     WHERE userId = '';
    //   `;

    // await sql`
    //     SELECT * FROM users
    //     WHERE username LIKE 'Z%'
    // `;

    //nasnii dundajaas baga :
    // await sql`
    //   SELECT * FROM users
    //   WHERE age < (SELECT AVG(age) FROM users);
    //         `;

    // await sql`
    // SELECT * FROM users
    // WHERE age IN ('22');
    // `;

    console.log(result);

  res.send(result);
};
