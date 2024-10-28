/////////// CRUD /////////////////

import dataBase from '../../config/db';

class DBcrud extends dataBase{
    constructor(){
    super();
    }

    async DbInsertAuluno(matricula: string, nome: string, token: string){
        const query = {
            name: 'insert-aluno',
            text: "INSERT INTO Alunos (matricula, nome, validador, ultimo_acesso) VALUES ($1::text, $2::text, $3::text, $4)",
            values: [matricula, nome, token, new Date()],
            rowMode: 'array',
        }
        const result = await this.conection.query(query);
        return result;
    }
    
}

describe('DBcrud', () =>{
    test('Esperasse que o sut acesse o isserDB', () =>{
        const sut = new DBcrud;
        const res = sut.DbInsertAuluno('a','b','c');
        console.log('teste')
        expect(typeof res).toBe('array');
    })
})