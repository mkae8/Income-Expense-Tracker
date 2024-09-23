/** @format */

// /** @format */

// import { readFileSync, writeFileSync } from "fs";
// import { v4 as uuid } from "uuid";
// import bcrypt from "bcryptjs";
// import { DbPath } from "../../utils/constant.js";

// export const signUpController = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const resultJson = await readFileSync(DbPath, "utf-8");
//     const result = JSON.parse(resultJson);

//     const doesExist = result.users.some((el) => el.username === username);
//     if (doesExist) {
//       return res.status(400).send("Username already registered");
//     }

//     const hashedPassword = bcrypt.hashSync(password, Number(process.env.SALT));

//     const newUser = {
//       userId: uuid(),
//       username,
//       email,
//       password: hashedPassword,
//     };

//     result.users.push(newUser);
//     writeFileSync(DbPath, JSON.stringify(result, null, 2), "utf-8");

//     res.status(201).send("User successfully created");
//   } catch (error) {
//     console.error("Error during signup:", error);
//     res.status(500).send("Internal server error");
//   }
// };

/** @format */

import { readFileSync, writeFileSync } from "fs";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";
import { DbPath } from "../../utils/constant.js";

// export const signUpController = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const resultJson = await readFileSync(DbPath, "utf-8");
//     const result = JSON.parse(resultJson);

//     const doesExist = result.users.some((el) => el.username === username);
//     if (doesExist) {
//       return res
//         .status(400)
//         .send("Энэ хэрэглэгчийн нэр аль хэдийн бүртгэгдсэн байна");
//     }

//     const hashedPassword = bcrypt.hashSync(password, Number(process.env.SALT));

//     const newUser = {
//       userId: uuid(),
//       username,
//       email,
//       password: hashedPassword,
//     };

//     result.users.push(newUser);
//     writeFileSync(DbPath, JSON.stringify(result, null, 2), "utf-8");

//     res.status(201).send("Хэрэглэгч амжилттай үүсгэгдлээ");
//   } catch (error) {
//     console.error("Бүртгүүлэхэд алдаа гарлаа:", error);
//     res.status(500).send("Дотоод серверийн алдаа");
//   }
// };
export const signUpController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const resultJson = readFileSync(DbPath, "utf-8"); // await хэрэггүй
    const result = JSON.parse(resultJson);

    // Хэрэглэгчийн нэр, и-мэйл давхцал шалгах
    const doesExist = result.users.some(
      (el) => el.username === username || el.email === email
    );
    if (doesExist) {
      return res
        .status(400)
        .send("Энэ хэрэглэгчийн нэр эсвэл и-мэйл аль хэдийн бүртгэгдсэн байна");
    }

    const hashedPassword = bcrypt.hashSync(password, Number(process.env.SALT));

    const newUser = {
      userId: uuid(),
      username,
      email,
      password: hashedPassword,
    };

    result.users.push(newUser);
    writeFileSync(DbPath, JSON.stringify(result, null, 2), "utf-8");

    res.status(201).send("Хэрэглэгч амжилттай үүсгэгдлээ");
  } catch (error) {
    console.error("Бүртгүүлэхэд алдаа гарлаа:", error);
    res.status(500).send("Дотоод серверийн алдаа");
  }
};
