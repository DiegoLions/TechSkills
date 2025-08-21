import express from 'express';
import cors from 'cors';
import countryRoutes from './routes/countryRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', countryRoutes);

app.get('/', (req, res) => {
  res.send('API de Países está funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});