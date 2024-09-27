/** @format */

import { DbPath } from "../../utils/constant.js";
import { readFileSync, writeFileSync } from "fs"; // writeFileSync импортлох

export const curencyController = async (req, res, next) => {
  const { currency } = req.body; // Хэрэглэгчээс валютын мэдээллийг авах
  const { userId } = res.locals;

  console.log("User ID:", userId);

  try {
    // Бүх хэрэглэгчийн мэдээллийг унших
    const resultJson = readFileSync(DbPath, "utf-8");
    const data = JSON.parse(resultJson);

    // Валютын мэдээллийг хадгалах
    const userIndex = data.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      data[userIndex].currency = currency; // Хэрэглэгчийн валютыг шинэчлэх
      writeFileSync(DbPath, JSON.stringify(data, null, 2)); // Өгөгдлийг дахин хадгалах
      res
        .status(200)
        .send({ msg: "Currency saved successfully", data: data[userIndex] });
    } else {
      res.status(404).send({ msg: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Error reading data" });
  }
};
