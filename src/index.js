import dotenv from "dotenv"
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import options from "./swagger.js";
import router from "./router/task.js";


// DEBUG
console.log(process.env.MONGODB_URL)

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.isda9.mongodb.net/tasks?retryWrites=true&w=majority",
  () => console.log("Database connected!")
);

const specs = swaggerJsdoc(options);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/tasks", router);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(port, () => console.log(`App is up on port ${port}`));
