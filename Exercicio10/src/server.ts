import express from 'express'
import { loggerMiddleware } from './middlewares/logger'
import cors from "cors"

const app = express();
const port: number = 3001;

app.use(express.json());

app.use(cors());
app.use(express.json());


app.use(loggerMiddleware);

// interface Users {
//     nome: string
// }

// let usuarios: Users []=[
//     {nome:"Diego"}
// ]
// app.get("/users",(req,res)=> {
// res.json(usuarios)
// })
	
// app.listen(port, () => {
//     console.log("Api iniciada na porta: " + port);
// });



interface Users1 {
    nome: string
    id: number
}

let usuarios1: Users1 []=[
    {nome:"Diego",
    id: 5
    },
    {nome:"Ana",
    id: 2
    }
]
app.get("/users1/:id",(req,res)=> {
    res.json(usuarios1.find(usuario=>{ return usuario.id==parseInt(req.params.id) }))
})

app.post("/users1",(req,res)=>{
    usuarios1.push(req.body);
    res.send("Usuário cadastrado!")
})
	
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});


// IUser: (Fulano, Beltrano e Ciclano)