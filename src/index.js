// import express from "express";
// import http from "http";
// import { Server } from "socket.io";
// import { socketMiddleware } from "./middlewares/socketMiddleware.js";
// import likeRoutes from "./routes/like.js"; // Import router Like

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: { origin: "*" }, // Cấu hình CORS
// });

// // Dùng middleware WebSocket
// app.use(socketMiddleware(io));

// // Sử dụng router Like
// app.use("/api/likes", likeRoutes);

// // Lắng nghe sự kiện kết nối WebSocket
// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`);
// });
