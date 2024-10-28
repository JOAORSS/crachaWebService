/////////// CRUD /////////////////

import dataBase from '../../config/db';
import schema from './schema';

class DBcrud extends dataBase {
    constructor() {
        super();
    }

    async DbInsertAluno(matricula: string, nome: string, token: string): Promise < {success: boolean, message: string} > {
        const response = {success: false, message: "Falha ao inserir aluno"};

        try {
            await this.conection.query('INSERT INTO Alunos (matricula, nome, validador, ultimo_acesso) VALUES ($1::text, $2::text, $3::text, $4)',
                [matricula, nome, token, 
                 new Date().toLocaleString("pt-BR", {day: "numeric", month: "numeric",hour: "2-digit",minute: "2-digit",})
                ]);
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

            if (result.rows.length > 0){
                response.success = true
                response.message = "Matricula Removida com sucesso"
            }

            return response;
        } catch (error) {
            console.log("Erro:", error)
            return response;
        }

    }

}


export default DBcrud;