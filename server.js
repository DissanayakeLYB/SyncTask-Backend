import express from "express";
import cors from "cors";
// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost/tasks");

const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.json());

// { taskDescription: "Random Task to complete", status: "todo" responsible: ["lasith", "ashen"]}
const tasks = [];

// { name: "lasith", leave_dates: [{ year: 2025, month: 12, day: 23}]}
const leaves = [];

server.get("/tasks", (req, res) => {
  return res.json(tasks);
});

server.post("/tasks", (req, res) => {
  try {
    const task = req.body;
    tasks.push(task);
    res.status(201).send("successfully added the task");
  } catch {
    res.status(500).send("Failed to add the task");
  }
});

server.get("/leaves", (req, res) => {
  res.json(leaves);
});

server.post("/leaves", (req, res) => {
  try {
    const leave = req.body;

    leaves.push(leave);
    res.status(201).send("Successfully added the leave");
  } catch {
    res.status(500).send("Failed to add the leave.");
  }
});

server.listen(PORT, () => {
  console.log(`The server is running on PORT: ${PORT}`);
});
