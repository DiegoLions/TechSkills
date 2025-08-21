"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
let usuarios1 = [
    { nome: "Diego",
        id: 5
    },
    { nome: "Ana",
        id: 2
    }
];
app.get("/users1/:id", (req, res) => {
    res.json(usuarios1.find(usuario => { return usuario.id == parseInt(req.params.id); }));
});
app.post("/users1", (req, res) => {
    usuarios1.push(req.body);
    res.send("Usuário cadastrado!");
});
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});
// IUser: (Fulano, Beltrano e Ciclano)
//# sourceMappingURL=server.js.map