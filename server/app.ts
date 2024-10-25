import express = require('express');
import bodyParser = require('body-parser');
import dataBase from './config/db';

interface Aluno {
    matricula: string;
    nome: string;
    validador: boolean;
  }
  

class App {
    public app: express.Application;
    private dataBase: dataBase;
    private alunos: Aluno[];

    constructor() {
        this.app = express();
        this.alunos = [];
        this.middleware();
        this.route();
        this.dataBase = new dataBase();
        
    }
    
    middleware(){
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    conexaoDB(){
        this.dataBase.criarConexao();
    }

    fecharConexaoDB(){
        this.dataBase.fecharConexao();
    }

    route() {
        this.app.get("/aluno", (req, res) => {
            res.json(this.alunos);
        });
        this.app.post("/post", (req, res) => {
            res.json({ matricula: "valdo", nome: "valod", validador: "true" });
            this.alunos.push(req.body);
            console.log(req.body);
            res.send('deu certo');
        })
        this.app.post("/add", (req, res) =>{
            fetch('http://localhost:3000/post', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    matricula: "valdo",
                    nome: "abluble",
                    validador: true,
                }),
            })
            res.send('foi');
        })
    }
}

// Exportando a classe App, não uma instância
export default App;
