// components/ListPaymentTransfer.tsx
import { useState, useEffect } from "react";

import {
  createTheme,
  ThemeProvider,
  useTheme,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AxiosResponse } from "axios";
import api from "../../utils/api";
import { DataResponseCsvDTO, ReturnProcessDTO } from "./dto";

const ProcessCSVPage = () => {
  const { palette } = useTheme();

  const [items, setItems] = useState<ReturnType<any> | null>(null);

  const getMuiTheme = () => createTheme({ palette: { mode: "dark" } });

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await api.get<ReturnProcessDTO, AxiosResponse<any>>(
      `csv/process`,
      { params: { fileName: "data.csv" } }
    );
    console.log(response);
    if (response.status === 200 && response.data) {
      const { countDataInvalid, countDataValid, dataValid } = response.data;

      setItems(dataValid);
    }
  };

  return (
    <>
      <ThemeProvider theme={getMuiTheme()}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Nº Contrato</TableCell>
                <TableCell align="left">Nome Cliente</TableCell>
                <TableCell align="center">CPF/CNPJ</TableCell>
                <TableCell align="center">Data Contrato</TableCell>
                <TableCell align="center">Vencimento prestação</TableCell>
                <TableCell align="center">Descrição Produto</TableCell>
                <TableCell align="center">Prestação</TableCell>
                <TableCell align="center">Valor prestação</TableCell>
                <TableCell align="center">Valor Atual</TableCell>
                <TableCell align="center">Valor Total</TableCell>
                <TableCell align="center">Situação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items?.map((item: DataResponseCsvDTO, index: any) => (
                <TableRow key={index}>
                  <TableCell align="left"> {item.nrContrato} </TableCell>
                  <TableCell align="left">{item.nmClient}</TableCell>
                  <TableCell align="center">{item.nrCpfCnpj}</TableCell>
                  <TableCell align="center">{item.dtContrato}</TableCell>
                  <TableCell align="center">{item.dtVctPre}</TableCell>
                  <TableCell align="center">{item.dsProduto}</TableCell>
                  <TableCell align="center">
                    {item.nrPresta} / {item.qtPrestacoes}
                  </TableCell>
                  <TableCell align="center">{item.vlPresta}</TableCell>
                  <TableCell align="center">{item.vlAtual}</TableCell>
                  <TableCell align="center">{item.vlTotal}</TableCell>
                  <TableCell align="center">{item.situacaoParcela}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </>
  );
};

export default ProcessCSVPage;
