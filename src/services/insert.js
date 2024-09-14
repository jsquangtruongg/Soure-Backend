import db from "../models";
import data from "../../data/data.json";
import { generateCode } from "../helpers/fn";

export const insertData = async () => {
  try {
    const Categories = Object.keys(data);

    // Chèn dữ liệu vào bảng Category
    await Promise.all(
      Categories.map(async (item) => {
        await db.Category.create({
          code: generateCode(item),
          value: item,
        });
      })
    );

    // Chèn dữ liệu vào bảng Book
    const dataArr = Object.entries(data);
    await Promise.all(
      dataArr.flatMap(([category, books]) =>
        books.map(async (book) => {
          try {
            await db.Book.create({
              title: book.bookTitle,
              price: +book.bookPrice,
              image: book.imageUrl,
              category_code: generateCode(category),
            });
          } catch (err) {
            console.error(`Error inserting book ${book.bookTitle}:`, err);
          }
        })
      )
    );

    return "OK";
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};
