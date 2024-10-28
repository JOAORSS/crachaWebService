import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const express = __require("express");
// import trouter = require('express-promise-router');
const bodyParser = __require("body-parser");
import DBcrud from './modules/client/controler';
class App {
    // public aluno;
    constructor() {
        Object.defineProperty(this, "app", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataBase", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.app = express();
        this.middleware();
        this.route();
        this.dataBase = new DBcrud;
    }
    middleware() {
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.Router());
    }
    abrirConexaoDB() {
        this.dataBase.criarConexao();
    }
    fecharConexaoDB() {
        this.dataBase.fecharConexao();
    }
    route() {
        this.app.get('/get-aluno/:matricula', async (req, res) => {
            const matricula = req.params.matricula;
            try {
                const retorno = await this.dataBase.DbSelectAluno(matricula);
                res.status(200).json(retorno);
            }
            catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }
        });
        this.app.get("/get-alunos", async (req, res) => {
            try {
                const retorno = await this.dataBase.DbSelectTodosAlunos();
                res.status(200).json(retorno);
            }
            catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }
        });
        this.app.delete("/delete-aluno", async (req, res) => {
            const matricula = req.body.matricula;
            try {
                const retorno = await this.dataBase.DbDeleteAluno(matricula);
                res.status(200).json(retorno);
                console.log("Success: " + retorno.message, " " + retorno.success);
            }
            catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }
        });
        this.app.delete("/delete-alunos", async (req, res) => {
            const matriculas = req.body.matriculas;
            if (Array.isArray(matriculas)) {
                try {
                    const retorno = await this.dataBase.DbDeleteVariosAluno(matriculas);
                    res.status(200).json(retorno);
                    console.log("Success: " + retorno.message, " " + retorno.success);
                }
                catch (error) {
                    console.log('Erro ao buscar aluno:', error);
                    res.status(500).json({ message: 'Erro interno no servidor' });
                }
            }
            else {
                res.status(400).json({ message: "formato invalido" });
            }
        });
        this.app.post("/inset-aluno", async (req, res) => {
        });
        // POST PRECISA QUE O SEJA ENVIADO ALGO POR ELE PRA QUE SEJA ATIVADO
    }
}
// Exportando a classe App, não uma instância
export default App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tpbmd0L09uZURyaXZlL0RvY3VtZW50b3MvSUYvY3JhY2hhV2ViU2VydmljZS9zZXJ2ZXIvIiwic291cmNlcyI6WyJhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBb0M7QUFDcEMsc0RBQXNEO0FBQ3RELDRDQUEyQztBQUUzQyxPQUFPLE1BQU0sTUFBTSw0QkFBNEIsQ0FBQztBQUloRCxNQUFNLEdBQUc7SUFHTCxnQkFBZ0I7SUFFaEI7UUFKTzs7Ozs7V0FBeUI7UUFDekI7Ozs7O1dBQWlCO1FBSXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxLQUFLO1FBRUQsSUFBSSxD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