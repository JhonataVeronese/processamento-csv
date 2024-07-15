import { format } from "date-fns";
import { DataModel } from "../../../../models/models";
import { DataResponseCsvDTO } from "../use-case/dto";
import {
  formatNumberMonetary,
  validationConsistencyValue,
} from "../../../shared/validation/number-validation";

export class MapperResult {
  static toDTO(dataModel: DataModel): DataResponseCsvDTO {
    const formatDate = "dd/MM/yyyy";

    const parcelValueInvalid = validationConsistencyValue(
      dataModel.vlTotal,
      dataModel.qtPrestacoes,
      dataModel.vlPresta
    );

    let situacaoParcela = "Pendente";
    if (parcelValueInvalid) {
      situacaoParcela = "Parcela com inconsistência";
    }

    return {
      ...dataModel,
      situacaoParcela,
      dtContrato: format(dataModel.dtContrato, formatDate),
      dtVctPre: format(dataModel.dtVctPre, formatDate),
      nrProposta: dataModel.nrProposta?.toString(),
      qtPrestacoes: dataModel.qtPrestacoes?.toString(),
      nrPresta: dataModel.nrPresta?.toString(),
      vlPresta: formatNumberMonetary(dataModel.vlPresta),
      vlTotal: formatNumberMonetary(dataModel.vlTotal),
      vlMora: formatNumberMonetary(dataModel.vlMora),
      vlMulta: formatNumberMonetary(dataModel.vlMulta),
      vlDescon: formatNumberMonetary(dataModel.vlDescon),
      vlOutAcr: formatNumberMonetary(dataModel.vlOutAcr),
      vlIof: formatNumberMonetary(dataModel.vlIof),
      vlAtual: formatNumberMonetary(dataModel.vlAtual),
    };
  }
}
