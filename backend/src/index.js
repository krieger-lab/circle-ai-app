import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import circlesRouter from "./routes/circles.js";
import agentsRouter from "./routes/agents.js";
import chatRouter from "./routes/chat.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/circles", circlesRouter);
app.use("/api/agents", agentsRouter);
app.use("/api/chat", chatRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
