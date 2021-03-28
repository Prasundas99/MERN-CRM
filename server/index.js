import express from "express";
import dotenv from "dotenv";
import Connect from "./config/db.js";

dotenv.config();
const app = express();

// Connect DB
Connect();

const PORT = 5000 || process.env.PORT;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});