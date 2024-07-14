import { IUseCase } from "../../../core/protocols/use-case.interface";
import { Either } from "../../../core/shared/logic/either";
import { DataResponseCsvDTO, RequestDTO } from "./dto";

type IProcessImportCsvUseCase = IUseCase<
  RequestDTO,
  ProcessImportCsvUseCaseReturn
>;

type ReturnProcessDTO = {
  countDataValid: number;
  countDataInvalid: number;
  dataValid: DataResponseCsvDTO[];
};

type ProcessImportCsvUseCaseReturn = Either<Error, ReturnProcessDTO>;

export { IProcessImportCsvUseCase, ProcessImportCsvUseCaseReturn };
