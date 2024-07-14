import fs from "fs";
import csv from "csv-parser";
import { IImportCsvService } from "./interface";
import { ProcessMapperCSV } from "./mapping-data";

class ImportCsvService implements IImportCsvService {
  async execute(patch: string): Promise<IImportCsvService.ResultProcessDTO> {
    return new Promise((resolve, reject) => {
      const resultsValid: IImportCsvService.ImportResultDTO[] = [];
      const resultsInvalid: IImportCsvService.ImportResultDTO[] = [];

      fs.createReadStream(patch)
        .pipe(csv())
        .on("data", (data: IImportCsvService.ImportCsvDTO) => {
          const model = ProcessMapperCSV.toProcess(data);

          if (model.isCpfCnpjValido) {
            resultsValid.push(model);
          } else {
            resultsInvalid.push(model);
          }
        })
        .on("end", () => {
          resolve({
            countDataValid: resultsValid.length,
            countDataInvalid: resultsInvalid.length,
            dataValid: resultsValid,
          });
        });
    });
  }
}

export { ImportCsvService };
