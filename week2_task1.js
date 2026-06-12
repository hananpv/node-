const express = require("express")

const app = express();

app.use(express.json());

let users = [];

app.post("/users", (req, res) => {
  const { name, email, username } = req.body;

  if (!name || !email || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    username
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});


app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});


app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email, username } = req.body;

  user.name = name || user.name;
  user.email = email || user.email;
  user.username = username || user.username;

  res.json({
    message: "User updated",
    user
  });
});

app.delete("/users/:id", (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.json({
    message: "User deleted"
  });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});