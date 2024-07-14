export const formatNumberMonetary = (number: number): string => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

export const converterInNumber = (numberString: string): number => {
  if (!numberString || isNaN(Number(numberString))) {
    return 0;
  }

  return Number(numberString);
};

export const validationConsistencyValue = (
  vlTotal: number,
  qtPrestacoes: number,
  vlPresta: number
): boolean => {
  const totalValue = normalizeNumber(vlTotal);
  const amountValue = normalizeNumber(vlPresta);
  const amountInstallments = normalizeNumber(qtPrestacoes);

  const parcelValue = totalValue / amountInstallments;
  return parcelValue !== amountValue;
};

const normalizeNumber = (value: number): number => {
  let valueString = value.toString();
  valueString = valueString.replace(/[.,]/g, "");

  return parseFloat(valueString);
};
