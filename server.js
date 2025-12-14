import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";

const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.json());

const users = [];

server.get("/users", (req, res) => {
  res.json(users);
});

server.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const name = req.body.name;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = { name: name, password: hashedPassword };
    users.push(user);
    res.status(201).send("Succesfully created");
  } catch {
    res.status(500).send("Failed from server");
  }
});

server.listen(PORT, () => {
  console.log(`The server is running on PORT: ${PORT}`);
});
