import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth-route";
import userRouter from "./routes/user-route";
import eventRouter from "./routes/event-route";
import refcodeRouter from "./routes/refcode-route";
import voucherRouter from "./routes/voucher-route";
import walletRouter from "./routes/wallet-route";
import transactionRouter from "./routes/transaction-route";
import rateRouter from "./routes/rating-route";
import feedbackRouter from "./routes/feedback-routes";

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

app.use("/api/v1/events", eventRouter);
app.use(verifyToken);

app.get("/api/v1/check", (req, res) => {
  return res.status(200).json({ message: "You are logged in" });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/refcode", refcodeRouter);
app.use("/api/v1/transaction", transactionRouter);
app.use("/api/v1/voucher", voucherRouter);
app.use("/api/v1/wallet", walletRouter);
app.use("/api/v1/rate", rateRouter);
app.use("/api/v1/feedback", feedbackRouter);

app.use(notFound);
app.use(error);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
