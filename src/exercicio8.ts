import express,{Request,Response} from 'express'

const app = express();
const port: number = 3000;

app.use(express.json());

interface IPessoa {
    CPF: string;
    Nome: string;
    RG: string;
  }

  interface IEndereco {
    CEP: string;
    Rua: string;
    Bairro: string;
    Cidade: string;
    Estado: string;
  }
  
  interface ICliente extends IPessoa, IEndereco {
    Email: string;
  }
  

let clientes: ICliente []=[
    { CPF:"07848819957", Nome:"Diego", RG:"123408950", Bairro: "Cara-Cara", CEP:"84033072", Cidade: "Ponta Grossa", Email: "teste@gmail.com", Estado: "Paraná", Rua:"1"},
    { CPF:"07848819952", Nome:"Tester", RG:"123456789", Bairro: "Cara-Cara", CEP:"84033072", Cidade: "Ponta Grossa", Email: "teste@gmail.com", Estado: "Paraná", Rua:"1"}
]

   app.get("/clientes",(req,res)=> {
        res.json(clientes)
    })

    app.get("/clientes/", (req: Request<{id:string}>, res: Response) => {
        console.log(req.params.id)
        return res.json(usuarios.find(usuario=>{return usuario.id===parseInt(req.params.id)}));
    });



  app.listen(port, () => {
    console.log("API iniciada na porta: " + port);
});