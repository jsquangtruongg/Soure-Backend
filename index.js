import express from "express";
import cors from "cors";
require("dotenv").config();
import initRoutes from "./src/routes";
require("./connection_database");
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

initRoutes(app);

const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON THE PORT" + listener.address().port);
});
