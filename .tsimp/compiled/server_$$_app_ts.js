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
                console.log(matricula);
                const retorno = await this.dataBase.DbSelectAluno(matricula);
                res.json(retorno);
            }
            catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }
        });
        this.app.get("/get-aluno-all", async (req, res) => {
            try {
                const retorno = await this.dataBase.DbSelectTodosAlunos();
                res.json(retorno);
            }
            catch (error) {
                console.log('Erro ao buscar aluno:', error);
                res.status(500).json({ message: 'Erro interno no servidor' });
            }
        });
        this.app.delete("/delete-aluno/:matricula", async (req, res) => {
            const matricula = req.params.matricula;
            try {
                const retorno = await this.dataBase.DbDeleteAluno(matricula);
                res.json(retorno);
                console.log(retorno.message);
                console.log(retorno.success);
            }
            catch (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tpbmd0L09uZURyaXZlL0RvY3VtZW50b3MvSUYvY3JhY2hhV2ViU2VydmljZS9zZXJ2ZXIvIiwic291cmNlcyI6WyJhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBb0M7QUFDcEMsc0RBQXNEO0FBQ3RELDRDQUEyQztBQUUzQyxPQUFPLE1BQU0sTUFBTSw0QkFBNEIsQ0FBQztBQUloRCxNQUFNLEdBQUc7SUFHTCxnQkFBZ0I7SUFFaEI7UUFKTzs7Ozs7V0FBeUI7UUFDekI7Ozs7O1dBQWlCO1FBSXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxLQUFLO1FBRUQsSUFBSSxD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