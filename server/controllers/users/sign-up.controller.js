import { readFileSync, writeFileSync } from "fs";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { sql } from "../../database/index.js";
import { DbPath } from "../../utils/constant.js"; //DATABASE_URL "./"
dotenv.config();

export const signUpController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await sql`SELECT * FROM users WHERE email=${email}`;

  if (user.length) {
    res.status(401).send("email burtgeltei bn");
    return;
  }

  const userId = uuid();

  const createdAt = new Date();

  const hashedPassword = bcrypt.hashSync(password, 10);

  await sql`INSERT INTO users(userId, username, email, password, createdAt) VALUES( ${userId}, ${username}, ${email}, ${hashedPassword}, ${createdAt})`;

  res.status(200).send("success");

  // try {

  //   const doesExist = result.users.find((el) => {
  //     if (el.username === username || el.email === email) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });

  //   if (doesExist) {
  //     res
  //       .status(400)
  //       .send("Энэ хэрэглэгчийн нэр эсвэл и-мэйл аль хэдийн бүртгэгдсэн байна");
  //     return;
  //   }

  //   const hashedPassword = bcrypt.hashSync(password, Number(process.env.SALT));

  //   const newUser = {
  //     userId: uuid(),
  //     username,
  //     email,
  //     password: hashedPassword,
  //   };

  //   result.users.push(newUser);
  //   await writeFileSync(DbPath, JSON.stringify(result, null, 2), "utf-8");

  //   res.status(201).send("Хэрэглэгч амжилттай үүсгэгдлээ");
  // } catch (error) {
  //   console.error("Бүртгүүлэхэд алдаа гарлаа:", error);
  //   res.status(500).send("Дотоод серверийн алдаа");
  // }
};
