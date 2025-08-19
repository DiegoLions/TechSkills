import express, { Request, Response } from 'express';
import cep from 'cep-promise';

const app = express();
const port = 3000;


app.get('/valida-cep/:cep', async (req: Request<{ cep: string }>, res: Response) => {
  const { cep: cepParam } = req.params;

  try {
    const dados = await cep(cepParam);
    return res.status(200).json({ mensagem: 'CEP válido.', dados });
  } catch (error) {
    return res.status(400).json({ mensagem: 'CEP inválido ou não encontrado.', error });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});