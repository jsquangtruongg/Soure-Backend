import { toggleLikeJob } from "../services/like";
import io from "../../index";

export const likeJob = (req, res) => {
  const { jobId } = req.params;
  const { id: userId } = req.user;

  toggleLikeJob(jobId, userId)
    .then(({ err, mess, liked, likeCount }) => {
      const updatedJob = { jobId, likeCount };

      console.log("🔄 Gửi sự kiện updateLike:", updatedJob);
      if (req.io) {
        req.io.emit("updateLike", updatedJob);
      } else {
        console.error("❌ WebSocket io không tồn tại!");
      }

      res.json({ err, mess, liked, likeCount });
    })
    .catch(({ err, mess, error }) => {
      console.error("❌ Lỗi khi like bài viết:", error);
      res.status(500).json({ err, mess });
    });
};
