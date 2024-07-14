import { left, right } from "../../../core/shared/logic/either";
import { IImportCsvService } from "../../../service/import-csv/interface";
import { MapperResult } from "../mapper/mapping-data";
import { RequestDTO } from "./dto";
import {
  IProcessImportCsvUseCase,
  ProcessImportCsvUseCaseReturn,
} from "./type";

export class ProcessImportCsvUseCase implements IProcessImportCsvUseCase {
  constructor(private readonly importCsvService: IImportCsvService) {}

  async handle(dto: RequestDTO): Promise<ProcessImportCsvUseCaseReturn> {
    if (!dto.fileName) {
      return left(new Error("Não foi informado o nome do arquivo CSV"));
    }
    const patch = "./src/file/";
    const result = await this.importCsvService.execute(
      `${patch}${dto.fileName}`
    );

    if (!result) {
      return left(new Error("Não foi possível processar o arquivo CSV"));
    }

    const returnList = result.dataValid?.map((item) => {
      return MapperResult.toDTO(item);
    });

    return right({
      countDataValid: result.countDataValid,
      countDataInvalid: result.countDataInvalid,
      dataValid: returnList,
    });
  }
}
