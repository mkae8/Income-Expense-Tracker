import { DbPath } from "../../utils/constant.js";
import { readFileSync, writeFileSync } from "fs"; // writeFileSync импортлох

export const curencyController = async (req, res, next) => {
  const { currency } = req.body; // Хэрэглэгчээс валютын мэдээллийг авах

  const { userId } = res.locals;

  try {
    // Бүх хэрэглэгчийн мэдээллийг унших
    const resultJson = await readFileSync(DbPath, "utf-8");
    const data = JSON.parse(resultJson);

    // Валютын мэдээллийг хадгалах

    const updatedData = data.users.map((el) => {
      if (el.userId === userId) {
        return { ...el, currency: currency };
      } else {
        return el;
      }
    });
    data.users = updatedData;
    await writeFileSync(DbPath, JSON.stringify(data, null, 2), "utf-8"); // Өгөгдлийг дахин хадгалах

    res
      .status(200)
      .send({ msg: "Валют амжилттай хадгалагдлаа", data: updatedData });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Мэдээлэл уншихад алдаа гарлаа" });
  }
};
