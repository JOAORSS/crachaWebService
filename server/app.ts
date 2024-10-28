import express = require('express');
// import trouter = require('express-promise-router');
import bodyParser = require('body-parser');

import DBcrud from './modules/client/controler';
import { stringify } from 'querystring';
  

class App {
    public app: express.Application;
    public dataBase: DBcrud;
    // public aluno;

    constructor() {
        this.app = express();
        this.middleware();
        this.route();
        this.dataBase = new DBcrud;
    }
    
    middleware(){
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.Router());
    }

    abrirConexaoDB(){
        this.dataBase.criarConexao();
    }

    fecharConexaoDB(){
        this.dataBase.fecharConexao();
    }

    route() {

        this.app.get('/get-aluno/:matricula', async (req, res) => {
            const matricula = req.params.matricula

            try {
                console.log(matricula);
                const retorno = await this.dataBase.DbSelectAluno(matricula);
                res.json(retorno);
            } catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }
        });

        this.app.get("/get-aluno-all", async (req, res) => {
            try {
                const retorno = await this.dataBase.DbSelectTodosAlunos();
                res.json(retorno);
            } catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }
            });

        this.app.delete("/delete-aluno/:matricula", async (req, res) => {
            const matricula = req.params.matricula

            try {
                const retorno = await this.dataBase.DbDeleteAluno(matricula);
                res.json(retorno);
                console.log(retorno.message);
                console.log(retorno.success);
            } catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }

            this.dataBase.fecharConexao();

        });

        // POST PRECISA QUE O SEJA ENVIADO ALGO POR ELE PRA QUE SEJA ATIVADO



    }
}

// Exportando a classe App, não uma instância
export default App;
