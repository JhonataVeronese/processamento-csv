import express from "express";
import { makeProcessImportCsvController } from "../use-case/factory";

const processImportCsvRouter = express.Router();

processImportCsvRouter.get("/process", async (req, res) => {
  const result = await makeProcessImportCsvController().handle(req.query);
  res.status(result.statusCode).json(result.body);
});

export default processImportCsvRouter;
