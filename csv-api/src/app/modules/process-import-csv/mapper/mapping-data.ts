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
      // Aqui entraria a logica para tratativa do ponto do desafio a baixo, porém fiquei em duvida sobre alguns dados e
      // informações faltantes, para ser mais preciso na solução e fiz o questionamento para o Alexandre Pegoro

      // Ponto que gerou a duvida: -----------------
      /* Para chegar a um valor aproximado, devera converter o valor total para um numero inteiro, ,
      ignorando as dezenas quebradas, e calculando a data de pagamento para verificar se existe juros 
      acumulado, e o valor de mora, caso o valor do movimento(vlMovimento) seja maior que o valor  do pagamento (vlPag), 
      devera construir uma trataviva adequada dizendo que o pagamento está inconsistente. */

      /************
       ****** Duvida enviada para o Alexandre
       * O ultimo ponto do desafio fala sobre chegar no valor aproximado ( acredito que seria o valor da parcela corrigido) porém após ler
       * os dados alguns campos que são informados no desafio não existem no arquivo (vlMovimento e vlPag ) além de não conter a informação de data de pagamento>
       * Outro ponto são as informações de datas ( dtContrato e dtVctPre ) Eu até consigo calcular a diferença em dias entre essas datas pra tentar chegar a um valor de
       * uros diarios descontando dai o valor de multa e mora pra saber o valor de juros no periodo, porém analisando as datas, não fica claro se a data de contrato seria
       *  o prazo final considerando todas as parcelas ou se precioso considerar a parcela atual ( essa informação existe no arquivo ) Porque existe uma diferença nas datas em si que gerou essa duvida.
       * Eu cheguei até esse ponto, todo o restantes já está implementado estou apenas organizando a rota para que seja possivel realizar testes e ter os resultados apresentados.
       * Mas acredito ser melhor tirar essas duvidas enquanto o requisito está em desenolvimento do que implementar algo com duvida e precisar de um refactor posteriormente.
       *************
       */
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
