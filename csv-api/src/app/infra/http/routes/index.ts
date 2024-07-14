import { Router } from "express";
import processImportCsvRouter from "../../../modules/process-import-csv/routes/process-import.router";

const router = Router();

router.use("/csv", processImportCsvRouter);

export { router };
