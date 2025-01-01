import express from "express"; //import express
import dotenv from "dotenv"; //import dotenv
import { connectDB } from "./lib/db.js"; //import connectDB function from db.js
import cookieParser from "cookie-parser"; //import cookieParser

import authRoutes from "./routes/authRoute.js"; //import authRoute
import taskRoutes from "./routes/taskRoute.js"; //import taskRoute

dotenv.config(); //initialize dotenv
const server = express(); //initialize express

const PORT = process.env.PORT || 5000; //initialize PORT

server.use(express.json()); //parse json data
server.use(cookieParser()); //parse cookies

server.use("/api/auth", authRoutes); //authentication routes
server.use("/api", taskRoutes); //task routes

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);//listen to PORT
  connectDB(); //connect to database
});
