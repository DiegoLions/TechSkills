import express,{Request,Response} from 'express'
import { isCPF} from 'validation-br';
import * as z from "zod"; 

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
        return res.json(clientes.find(ICliente=>{return ICliente.id===parseInt(req.params.id)}));
    });

    app.get("/clientes/:cpf", (req: Request<{cpf:string} >, res: Response) => {
      console.log(req.params.cpf)
      return res.json(clientes.find(cliente=>{return cliente.CPF===(req.params.cpf)}));
  });


  app.post("/clientes", (req: Request, res: Response) => {
    const cliente=z.object({
      Nome: z.string(),
      Rua: z.string()
    })

    const result = cliente.safeParse(req.body);
    if (!result.success) {
      return res.json(result.error);   
    } else {
      return res.json(result.data);    
    }
  const dados = req.body
    if (isCPF(dados.CPF)) {
      clientes.push(req.body);
      return res.send("Usuário cadastrado!") 
    } else {
    return res.status(400).send({ mensagem: 'CPF inválido.Não será possível cadastrar esse cliente.' });
    }})
  
  app.post("/clientes",(req,res)=>{
    clientes.push(req.body);
    return res.send("Usuário cadastrado!")
})
    

app.delete("/clientes/:cpf", (req,res)=> {
  const user = clientes.findIndex(clientes=>{return clientes.CPF===(req.params.cpf)})
  if (user !== -1){
      clientes.splice(user, 1)
      return res.send("Usuário excluído!")
  }else{
      return res.send("Usuário não encontrado!")
  }
} )

app.put("/clientes/:cpf", (req,res)=> {
  const user = clientes.findIndex(cliente=>{return cliente.CPF===(req.params.cpf)})
  if (user !== -1){
      clientes[user]=req.body;
      return res.send("Usuário atualizado!")
  }else{
      return res.send("Usuário não encontrado!")
  }
})

  app.listen(port, () => {
    console.log("API iniciada na porta: " + port);
});