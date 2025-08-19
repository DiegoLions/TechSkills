import { isCPF, isCNPJ, isCNH } from 'validation-br';
import express, { Request, Response } from 'express';

const app = express();
const port: number = 3001;

//CPF
app.get('/valida-cpf/:cpf', (req: Request<{ cpf: string | number }>, res: Response) => {
  const { cpf } = req.params;

  if (isCPF(cpf)) {
    res.status(200).send({ mensagem: 'CPF válido.' });
  } else {
    res.status(400).send({ mensagem: 'CPF inválido.' });
  }
});

// CNPJ
app.get('/valida-cnpj/:cnpj', (req: Request<{ cnpj: string | number }>, res: Response) => {
  const { cnpj } = req.params;

  if (isCNPJ(cnpj)) {
    res.status(200).send({ mensagem: 'CNPJ válido.' });
  } else {
    res.status(400).send({ mensagem: 'CNPJ inválido.' });
  }
});

// CNH
app.get('/valida-cnh/:cnh', (req: Request<{ cnh: string | number }>, res: Response) => {
  const { cnh } = req.params;

  if (isCNH(cnh)) {
    res.status(200).send({ mensagem: 'CNH válida.' });
  } else {
    res.status(400).send({ mensagem: 'CNH inválida.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});