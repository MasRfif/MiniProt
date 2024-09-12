import express from "express";

import authRouter from "./routes/auth-route";
import userRouter from "./routes/user-route";
import eventRouter from "./routes/event-route";
import { verifyToken } from "./middlewares/auth-middleware";
import { error } from "./middlewares/error-middleware";
import { notFound } from "./middlewares/not-found-middleware";
import wallet from "./routes/wallet-route";
import cookies from "cookie-parser";

const PORT = process.env.PORT || 8069;
const app = express();

//Read req.body
app.use(express.json());

app.use(cookies());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/events", verifyToken, eventRouter);
app.use("/api/v1/wallet", wallet);

app.use(notFound);
app.use(error);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
