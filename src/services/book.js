import { query } from "express";
import db from "../models";
import { Op } from "sequelize";
import { defaults } from "joi";

//READ
export const getBooks = ({ page, limit, order, name, ...query }) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, nest: true };
      const offset = !page || page <= 1 ? 0 : +page - 1;
      const fLimit = +limit || +process.env.LIMIT_BOOK;
      queries.offset = offset * fLimit;
      queries.limit = fLimit;
      if (order) queries.order = [order];
      if (name) query.title = { [Op.substring]: name };
      const response = await db.Book.findAndCountAll({
        where: query,
        ...queries,
        attributes: {
          exclude: ["category_code"],
        },
        include: [
          {
            model: db.Category,
            attributes: { exclude: ["createdAt", "updateAt"] },
            as: "categoryData",
          },
        ],
      });

      resolve({
        err: response ? 0 : 1,
        mes: response ? "Got" : "Cannot found books",
        bookData: response,
      });
    } catch (error) {
      reject(error);
    }
  });

//CREATE
export const createNewBook = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Book.findOrCreate({
        where: { title: body?.title },
        defaults: body,
      });

      resolve({
        err: response[1] ? 0 : 1,
        mes: response[1] ? "Created" : "Cannot create new book",
      });
    } catch (error) {
      reject(error);
    }
  });
