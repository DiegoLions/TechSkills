import express,{Request,Response} from 'express'

const app = express();
const port: number = 3001;

app.use(express.json());

interface Users {
    nome:string
    id: number
}

let usuarios: Users []=[
    { nome:"Diego", id: 5},
    { nome:"Ana", id: 3}
]

    app.get("/users",(req,res)=> {
        res.json(usuarios)
    })

    app.get("/users/:id", (req: Request<{id:string}>, res: Response) => {
        console.log(req.params.id)
        return res.json(usuarios.find(usuario=>{return usuario.id===parseInt(req.params.id)}));
    });

    app.post("/users",(req,res)=>{
        usuarios.push(req.body);
        return res.send("Usuário cadastrado!")
    })

    app.put("/users/:id", (req,res)=> {
        const user = usuarios.findIndex(usuario=>{return usuario.id===parseInt(req.params.id)})
        if (user !== -1){
            usuarios[user]=req.body;
            return res.send("Usuário atualizado!")
        }else{
            return res.send("Usuário não encontrado!")
        }
    })

    app.delete("/users/:id", (req,res)=> {
        const user = usuarios.findIndex(usuario=>{return usuario.id===parseInt(req.params.id)})
        if (user !== -1){
            usuarios.splice(user, 1)
            return res.send("Usuário excluído!")
        }else{
            return res.send("Usuário não encontrado!")
        }
    } )

app.listen(port, () => {
    console.log("API iniciada na porta: " + port);
});