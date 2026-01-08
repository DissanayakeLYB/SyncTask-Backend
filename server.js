import express from "express";
import cors from "cors";
// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost/tasks");

const server = express();
const PORT = 3000;

server.use(cors()); // Enable CORS for all routes and origins. This is important for allowing requests from different domains.

server.use(express.json()); // Middleware to parse JSON bodies in requests. This is essential for handling POST requests with JSON payloads.
// Middleware means functions that have access to the request and response objects. They can modify these objects, end the request-response cycle, or call the next middleware in the stack.

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
    res.status(201).send("Successfully added the task");
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
