import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.disable("x-powered-by");
app.use(cors());

app.use(router);

export { app };
