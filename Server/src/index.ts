import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth-route";
import userRouter from "./routes/user-route";
import eventRouter from "./routes/event-route";
import refcodeRouter from "./routes/refcode-route";
import transactionRouter from "./routes/transaction-route";

import { error } from "./middlewares/error-middleware";
import { notFound } from "./middlewares/not-found-middleware";
import { verifyToken } from "./middlewares/auth-middleware";

const PORT = process.env.PORT || 8069;
const app = express();

//Read req.body
app.use(express.json());
//Read req.cookies
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/auth", authRouter);

app.use(verifyToken);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/refcode", refcodeRouter);
app.use("/api/v1/transaction", transactionRouter);

app.use(notFound);
app.use(error);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
