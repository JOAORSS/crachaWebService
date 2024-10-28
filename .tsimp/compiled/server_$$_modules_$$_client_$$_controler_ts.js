/////////// CRUD /////////////////
import dataBase from '../../config/db';
import schema from './schema';
class DBcrud extends dataBase {
    constructor() {
        super();
    }
    async DbInsertAluno(matricula, nome, token) {
        const response = { success: false, message: "Falha ao inserir aluno" };
        try {
            await this.conection.query('INSERT INTO Alunos (matricula, nome, validador, ultimo_acesso) VALUES ($1::text, $2::text, $3::text, $4)', [matricula, nome, token,
                new Date().toLocaleString("pt-BR", { day: "numeric", month: "numeric", hour: "2-digit", minute: "2-digit", })
            ]);
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
            const result = await this.conection.query(`DELETE FROM alunos WHERE matricula = (${matriculasPlaceholder})`, [matriculas]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tpbmd0L09uZURyaXZlL0RvY3VtZW50b3MvSUYvY3JhY2hhV2ViU2VydmljZS9zZXJ2ZXIvIiwic291cmNlcyI6WyJtb2R1bGVzL2NsaWVudC9jb250cm9sZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDLE9BQU8sUUFBUSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUU5QixNQUFNLE1BQU8sU0FBUSxRQUFRO0lBQ3pCO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFpQixFQUFFLElBQVksRUFBRSxLQUFhO1FBQzlELE1BQU0sUUFBUSxHQUFHLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUM7WUFDRCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLDBHQUEwRyxFQUNqSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSztnQkFDdEIsSUFBSSxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFFLFNBQVMsR0FBRSxDQUFDO2FBQ3pHLENBQUMsQ0FBQztZQUNQLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7UUFFNUMsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELEtB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