import { cpf, cnpj } from "cpf-cnpj-validator";

export const validationDocument = (nrCpfCnpj: string): boolean => {
  if (!nrCpfCnpj) {
    return false;
  }
  if (nrCpfCnpj.length === 11) {
    return cpf.isValid(nrCpfCnpj);
  } else if (nrCpfCnpj.length === 14) {
    return cnpj.isValid(nrCpfCnpj);
  } else {
    return false;
  }
};
