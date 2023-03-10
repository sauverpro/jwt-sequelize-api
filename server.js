const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/user.route.js");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 8081;

const app = express();
var corsOption = {
  origin: `https://localhost:${PORT}`,
};

// middleware
app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

const router = require("./routes/productRouter.js");
app.use("/api/products", router);
app.use("/api/users", userRoutes);
// TESTING API

app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

// PORT

// SERVER

app.listen(PORT, () =>
  console.log(`server is running on port http://localhost:${PORT}`)
);
