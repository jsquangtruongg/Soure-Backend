import db from "../models";

export const getAllBrowseApplyManager = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.BrowseApply.findAll({
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "firstName", "lastName", "email", "avatar"],
          },
          {
            model: db.Job,
            as: "jobs",
            attributes: ["id", "img", "content"],
          },
          {
            model: db.User,
            as: "userApply",
            attributes: ["id", "firstName", "lastName", "email", "avatar"],
          },
          {
            model: db.Apply,
            as: "Applies",
            attributes: ["id", "fullName", "email", "phone"],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        mess: response ? "Lấy danh sách thành công" : "Không có dữ liệu",
        data: response,
      });
    } catch (error) {
      reject({
        err: 1,
        mess: "Lỗi khi lấy dữ liệu",
        error: error.message,
      });
    }
  });

export const createBrowseApplyManager = ({
  user_id,
  job_id,
  apply_id,
  userApply_id,
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.BrowseApply.create({
        user_id,
        job_id,
        apply_id,
        userApply_id,
      });
      resolve({
        err: response ? 0 : 1,
        mess: response ? "Tạo thành công" : "Tạo thất bại",
      });
    } catch (error) {
      console.log("Error in createBrowseApplyManager:", error);
      reject({
        err: 1,
        mess: "Lỗi khi tạo dữ liệu",
        error: error.message,
      });
    }
  });
