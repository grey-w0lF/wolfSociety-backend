const express = require("express");
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const connectDB = require("./db");
const app = express();
app.use(express.json());
connectDB();

app.use("/api/users", require("./routes/userRoutes"));
app.listen(port, () => {
  console.log(`Server Started on Port : ${port}`);
});
