import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";


//config env
dotenv.config();

//databse  configuration
connectDB();
const app = express();

//middleware
app.use(express.json());


//routes
app.use("/api/v1/auth", authRoute);


app.get("/", (req, res) => {
  res.send("<h2>Welcome to Websites </h2>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode and on port ${PORT}`
  );
});
