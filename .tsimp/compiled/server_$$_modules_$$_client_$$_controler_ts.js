/////////// CRUD /////////////////
import dataBase from '../../config/db';
import schema from './schema';
class DBcrud extends dataBase {
    constructor() {
        super();
    }
    async DbInsertAluno(aluno) {
        const response = { success: false, message: "Falha ao inserir aluno", item: "" };
        try {
            await this.conection.query('INSERT INTO Alunos (matricula, nome, validador, ultimo_acesso) VALUES ($1::text, $2::text, $3::text, $4)', [aluno.matricula, aluno.nome, aluno.token, aluno.ultimoAcesso]);
            console.table({ Matricula: aluno.matricula, Nome: aluno.nome, Token: aluno.token, UltimoAcesso: aluno.ultimoAcesso });
            response.success = true;
            response.message = "incercao deu certo";
        }
        catch (error) {
            console.log('erro: ', error);
        }
        return response;
    }
    async DbSelectAluno(matricula) {
        try {
            const result = await this.conection.query('SELECT * FROM alunos WHERE matricula = $1', [matricula]);
            if (result.rows.length) {
                const aluno = result.rows.map(row => {
                    return new schema(row.matricula, row.nome, row.validador, row.ultimo_acesso);
                });
                return aluno[0];
            }
        }
        catch (error) {
            console.log('erro: ', error);
        }
        const aluno = {
            aluno: "nao encontrado"
        };
        return aluno;
    }
    async DbSelectTodosAlunos() {
        try {
            const result = await this.conection.query('SELECT * FROM alunos');
            if (result.rows.length) {
                const alunos = result.rows.map(row => {
                    return new schema(row.matricula, row.nome, row.validador, row.ultimo_acesso);
                });
                return alunos;
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.log('erro: ', error);
            return null;
        }
    }
    async DbDeleteAluno(matricula) {
        const response = { success: false, message: "Erro: Erro ao executar este delete" };
        try {
            const result = await this.conection.query('DELETE FROM alunos WHERE matricula = $1', [matricula]);
            if ((result.rowCount ?? 0) > 0) {
                response.success = true;
                response.message = "Matricula Removida com sucesso";
            }
            return response;
        }
        catch (error) {
            console.log("Erro:", error);
            return response;
        }
    }
    async DbDeleteVariosAluno(matriculas) {
        const response = { success: false, message: "Erro: Erro ao executar delete" };
        try {
            const matriculasPlaceholder = matriculas.map((_, index) => `$${index + 1}`).join(', ');
            const result = await this.conection.query(`DELETE FROM alunos WHERE matricula IN (${matriculasPlaceholder})`, matriculas);
            if ((result.rowCount ?? 0) > 0) {
                response.success = true;
                response.message = "Matriculas Removidas com sucesso";
            }
            return response;
        }
        catch (error) {
            console.log("Erro:", error);
            return response;
        }
    }
}
export default DBcrud;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tpbmd0L09uZURyaXZlL0RvY3VtZW50b3MvSUYvY3JhY2hhV2ViU2VydmljZS9zZXJ2ZXIvIiwic291cmNlcyI6WyJtb2R1bGVzL2NsaWVudC9jb250cm9sZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDLE9BQU8sUUFBUSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUU5QixNQUFNLE1BQU8sU0FBUSxRQUFRO0lBQ3pCO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLE1BQU0sUUFBUSxHQUFHLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBRS9FLElBQUksQ0FBQztZQUNELE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsMEdBQTBHLEVBQ2pJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQTtZQUNoSCxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixRQUFRLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO1FBRTVDLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxR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