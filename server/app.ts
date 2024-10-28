import express = require('express');
// import trouter = require('express-promise-router');
import bodyParser = require('body-parser');

import DBcrud from './modules/client/controler';
import schema from './modules/client/schema';
  

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
                const retorno = await this.dataBase.DbSelectAluno(matricula);
                res.status(200).json(retorno);
            } catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }
        });

        this.app.get("/get-alunos", async (req, res) => {
            try {
                const retorno = await this.dataBase.DbSelectTodosAlunos();
                res.status(200).json(retorno);
            } catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }
            });

            this.app.delete("/delete-aluno", async (req, res) => {
                const matricula = req.body.matricula
    
                try {
                    const retorno = await this.dataBase.DbDeleteAluno(matricula);
                    res.status(200).json(retorno);
                    console.log(retorno.success, " " + retorno.message);
                } catch (error) {
                    console.log('Erro ao buscar aluno:', error);
                    res.status(500).json({ message: 'Erro interno no servidor' });
                }
    
            });

            this.app.delete("/delete-alunos", async (req, res) => {
                const matriculas = req.body.matriculas

                if (Array.isArray(matriculas)){
                try {
                    const retorno = await this.dataBase.DbDeleteVariosAluno(matriculas);
                    res.status(200).json(retorno);
                    console.log(retorno.success, " " + retorno.message);

                } catch (error) {
                    console.log('Erro ao buscar aluno:', error);
                    res.status(500).json({ message: 'Erro interno no servidor' });
                }

                } else {
                    res.status(400).json({message: "formato invalido"})
                }
    
            });
            


        this.app.post("/insert-aluno", async (req, res) => {
            const ultimoAcesso = new Date().toLocaleString("pt-BR", {day: "numeric", month: "numeric",hour: "2-digit",minute: "2-digit",})

            try {
                const aluno = new schema(req.body.matricula, req.body.nome, req.body.token, ultimoAcesso);
                const retorno = await this.dataBase.DbInsertAluno(aluno);
                res.status(201).json(retorno);
                console.log(retorno.success, " " + retorno.message)
            } catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });   
            }

            

        })

        // POST PRECISA QUE O SEJA ENVIADO ALGO POR ELE PRA QUE SEJA ATIVADO



    }
}

// Exportando a classe App, não uma instância
export default App;
