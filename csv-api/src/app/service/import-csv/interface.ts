interface IImportCsvService {
  execute(patch: string): Promise<IImportCsvService.ResultProcessDTO>;
}

namespace IImportCsvService {
  export type ResultProcessDTO = {
    countDataValid: number;
    countDataInvalid: number;
    dataValid: ImportResultDTO[];
  };

  export type ImportCsvDTO = {
    nrInst: string;
    nrAgencia: string;
    cdClient: string;
    nmClient: string;
    nrCpfCnpj: string;
    nrContrato: string;
    dtContrato: string;
    qtPrestacoes: string;
    vlTotal: string;
    cdProduto: string;
    dsProduto: string;
    cdCarteira: string;
    dsCarteira: string;
    nrProposta: string;
    nrPresta: string;
    tpPresta: string;
    nrSeqPre: string;
    dtVctPre: string;
    vlPresta: string;
    vlMora: string;
    vlMulta: string;
    vlOutAcr: string;
    vlIof: string;
    vlDescon: string;
    vlAtual: string;
    idSituac: string;
    idSitVen: string;
  };

  export type ImportResultDTO = {
    nrInst: string;
    nrAgencia: string;
    cdClient: string;
    nmClient: string;
    nrCpfCnpj: string;
    nrContrato: string;
    dtContrato: Date;
    qtPrestacoes: number;
    vlTotal: number;
    cdProduto: string;
    dsProduto: string;
    cdCarteira: string;
    dsCarteira: string;
    nrProposta: number;
    nrPresta: number;
    tpPresta: string;
    nrSeqPre: string;
    dtVctPre: Date;
    vlPresta: number;
    vlMora: number;
    vlMulta: number;
    vlOutAcr: number;
    vlIof: number;
    vlDescon: number;
    vlAtual: number;
    idSituac: string;
    idSitVen: string;
    isCpfCnpjValido: boolean;
  };
}

export { IImportCsvService };
