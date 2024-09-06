import express from "express";

// import authRouter from "./routes/auth-route";
import userRouter from "./routes/user-route";
import eventRouter from "./routes/event-route";

const PORT = process.env.PORT || 8069;
const app = express();

//Read req.body
app.use(express.json());

// app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/events", eventRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
