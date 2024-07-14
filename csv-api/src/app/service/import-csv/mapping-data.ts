import { parseISO } from "date-fns";
import { validationDocument } from "../../shared/validation/cpf-cnpj-validation";
import { converterInNumber } from "../../shared/validation/number-validation";
import { IImportCsvService } from "./interface";

export class ProcessMapperCSV {
  static toProcess(
    csvLine: IImportCsvService.ImportCsvDTO
  ): IImportCsvService.ImportResultDTO {
    return {
      ...csvLine,
      isCpfCnpjValido: validationDocument(csvLine.nrCpfCnpj),
      dtContrato: parseISO(csvLine.dtContrato),
      dtVctPre: parseISO(csvLine.dtVctPre),
      nrProposta: converterInNumber(csvLine.nrProposta),
      qtPrestacoes: converterInNumber(csvLine.qtPrestacoes),
      nrPresta: converterInNumber(csvLine.nrPresta),
      vlPresta: converterInNumber(csvLine.vlPresta),
      vlTotal: converterInNumber(csvLine.vlTotal),
      vlMora: converterInNumber(csvLine.vlMora),
      vlMulta: converterInNumber(csvLine.vlMulta),
      vlDescon: converterInNumber(csvLine.vlDescon),
      vlOutAcr: converterInNumber(csvLine.vlOutAcr),
      vlIof: converterInNumber(csvLine.vlIof),
      vlAtual: converterInNumber(csvLine.vlAtual),
    };
  }
}
