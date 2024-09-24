import { readFileSync, writeFileSync } from "fs";
import { DbPath } from "../../utils/constant.js";

export const balanceController = async (req, res, next) => {
  const { balance } = req.body;
  console.log(balance);

  const { userId } = res.locals;

  try {
    // Файлыг уншина
    const resultJson = await readFileSync(DbPath, "utf-8");
    const data = JSON.parse(resultJson);

    // Хэрэглэгчийн баланс шинэчилнэ
    const updatedData = data.users.map((el) => {
      if (el.userId === userId) {
        return { ...el, balance: Number(balance) };
      }
      return el; // Бусад хэрэглэгчийн мэдээллийг үлдээх
    });

    data.users = updatedData;
    await writeFileSync(DbPath, JSON.stringify(data, null, 2), "utf-8");

    res
      .status(200)
      .send({ msg: "Төсөв амжилттай хадгалагдлаа", data: updatedData });
  } catch (error) {
    console.error("Алдаа:", error);
    res.status(500).send({ msg: "Мэдээлэл уншихад алдаа гарлаа" });
  }
};
