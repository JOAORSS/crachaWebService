/////////// CRUD /////////////////

import dataBase from '../../config/db';
import schema from './schema';

class DBcrud extends dataBase {
    constructor() {
        super();
    }

    async DbInsertAluno(aluno: schema): Promise < {success: boolean, message: string} > {
        const response = {success: false, message: "Falha ao inserir aluno", item: ""};

        try {
            await this.conection.query('INSERT INTO Alunos (matricula, nome, validador, ultimo_acesso) VALUES ($1::text, $2::text, $3::text, $4)',
                [aluno.matricula, aluno.nome, aluno.token, aluno.ultimoAcesso]);
            console.table({Matricula: aluno.matricula,Nome: aluno.nome,Token: aluno.token,UltimoAcesso: aluno.ultimoAcesso})
            response.success = true;
            response.message = "incercao deu certo";

        } catch (error) {
            console.log('erro: ', error);
        }

        return response;
    }

    async DbSelectAluno(matricula: string): Promise <schema | {aluno: string}> {

        try {
            const result = await this.conection.query('SELECT * FROM alunos WHERE matricula = $1', [matricula]);

            if (result.rows.length) {
                const aluno = result.rows.map(row => {
                    return new schema(row.matricula, row.nome, row.validador, row.ultimo_acesso);
                });
                return aluno[0];
            }
        } catch (error) {
            console.log('erro: ', error);
        }
        const aluno = {
            aluno: "nao encontrado"
        };
        return aluno;
    }

    async DbSelectTodosAlunos(): Promise <schema[] | null> {

        try {
            const result = await this.conection.query('SELECT * FROM alunos');

            if (result.rows.length) {
                const alunos = result.rows.map(row => {
                  return new schema(row.matricula, row.nome, row.validador, row.ultimo_acesso);
                });
                return alunos;
                } else {
                    return null;
                }
        } catch (error) {
            console.log('erro: ', error);
            return null
        }
    }

    async DbDeleteAluno(matricula: string): Promise< {success: boolean, message: string} > {
        const response = {success: false, message: "Erro: Erro ao executar este delete"}
        
        try {
            const result = await this.conection.query('DELETE FROM alunos WHERE matricula = $1', [matricula]);

            if ((result.rowCount ?? 0) > 0){
                response.success = true
                response.message = "Matricula Removida com sucesso"
            }
            return response;
        } catch (error) {
            console.log("Erro:", error)
            return response;
        }

    }

    async DbDeleteVariosAluno(matriculas: string[]): Promise< {success: boolean, message: string} > {
        const response = {success: false, message: "Erro: Erro ao executar delete"}

        try {
            const matriculasPlaceholder = matriculas.map((_, index) => `$${index + 1}`).join(', ');
            const result = await this.conection.query(`DELETE FROM alunos WHERE matricula IN (${matriculasPlaceholder})`, matriculas);

            if ((result.rowCount ?? 0) > 0){
                response.success = true
                response.message = "Matriculas Removidas com sucesso"
            }
            return response;
        } catch (error) {
            console.log("Erro:", error)
            return response;
        }

    }

}


export default DBcrud;