import express from "express";

import authRouter from "./routes/auth-route";
import userRouter from "./routes/user-route";
import { error } from "./middlewares/error-middleware";
import { notFound } from "./middlewares/not-found-middleware";
import wallet from "./routes/wallet-route";
import cors from "cors";
import cookieParser from "cookie-parser";

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
app.use("/api/v1/users", userRouter);
app.use("/api/v1/wallet", wallet);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
