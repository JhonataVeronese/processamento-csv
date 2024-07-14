import { IController } from "../../../core/protocols/controller.interface";
import { makeImportCsvService } from "../../../service/import-csv/factory";
import { ProcessImportCsvController } from "./controller";
import { ProcessImportCsvUseCase } from "./use-case";

export const makeProcessImportCsvController = (): IController<any> => {
  const importCsvService = makeImportCsvService();

  const useCase = new ProcessImportCsvUseCase(importCsvService);
  return new ProcessImportCsvController(useCase);
};
