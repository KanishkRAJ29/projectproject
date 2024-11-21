import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {dbConnections} from "./database/dbConnections.js"
import messageRouter from "./router/messageRouter.js"
import checkoutRouter from "./router/donateR.js"
const app= express();
dotenv.config({path: "./config.env"})

app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["POST"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/message",messageRouter);
app.use("/api/v1",checkoutRouter);

dbConnections();
export default app;