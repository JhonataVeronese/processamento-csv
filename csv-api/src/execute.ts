import fs from "fs";
import csv from "csv-parser";
import { DataModel } from "./models/models";
import { Mapper } from "./mapping/mapping-data";
import { ImportCSVRequestDTO } from "./dto/request/import-csv-request-dto";
import { ResponseCsvDTO } from "./dto/response/response-dto";

async function execute() {
  const listOriginal: any[] = [];
  const returnLIst: ResponseCsvDTO[] = [];
  const resultsValid: DataModel[] = [];
  const resultsInvalid: DataModel[] = [];

  fs.createReadStream("./src/file/data.csv")
    .pipe(csv())
    .on("data", (data: ImportCSVRequestDTO) => {
      listOriginal.push(data);
      const model = Mapper.toModel(data);

      if (model.isCpfCnpjValido) {
        resultsValid.push(model);
      } else {
        resultsInvalid.push(model);
      }
    })
    .on("end", () => {
      resultsValid.forEach((item) => {
        const dataDTO = Mapper.toDTO(item);
        console.log(dataDTO);
        returnLIst.push(dataDTO);
      });
    });
}

execute();
