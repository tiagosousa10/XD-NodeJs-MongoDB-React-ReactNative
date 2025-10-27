import express from "express";
import cors from "cors";
import TaskRoutes from "./routes/TaskRoutes.js";
import connectDB from "./config/database.js";

const server = express();
server.use(
  cors({
    origin: "http://localhost:3000",
  })
);

await connectDB();

server.use(express.json());

server.use("/task", TaskRoutes);

server.listen(3002, () => {
  console.log("Api Online");
});
