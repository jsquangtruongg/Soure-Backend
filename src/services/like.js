import db from "../models";

export const toggleLikeJob = (jobId, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        return reject({ err: 1, mess: "Unauthorized" });
      }

      const existingLike = await db.Like.findOne({
        where: { job_id: jobId, user_id: userId },
      });

      let liked;
      if (existingLike) {
        await existingLike.destroy();
        liked = false;
      } else {
        await db.Like.create({ job_id: jobId, user_id: userId });
        liked = true;
      }

      const likeCount = await db.Like.count({ where: { job_id: jobId } });
      await db.Job.update({ like_count: likeCount }, { where: { id: jobId } });

      resolve({
        err: 0,
        mess: "Cập nhật like thành công",
        jobId,
        liked,
        likeCount,
      });
    } catch (error) {
      reject({ err: 2, mess: "Lỗi server", error });
    }
  });
