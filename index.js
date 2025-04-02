import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";
import { socketMiddleware } from "./src/middlewares/socketMiddleware.js";
import likeRoutes from "./src/routes/like.js";
import initRoutes from "./src/routes/index.js";
import "./connection_database.js"; // Đảm bảo kết nối DB

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(socketMiddleware(io));

app.use("/api/likes", likeRoutes);
initRoutes(app);

io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 8888;
server.listen(PORT, () => {
  console.log(`🚀 SERVER IS RUNNING ON PORT ${PORT}`);
});
