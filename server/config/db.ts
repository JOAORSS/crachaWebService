import pg = require('pg');
import client = require('pg');
// import redis = require('redis');


// const client = redis;

// AQUI A GENT N VAI USAR REDIS E SIM POSTEGRES

class dataBase {
    private dbConection = new pg.Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'teste',
        password: 'ifj8990iha',
        port: 5432
    });

    constructor() {}

    async criarConexao(){
        
        await this.dbConection.connect();

        await this.dbConection.query('SELECT NOW()');

        console.log()

    }

    logger(){
        // this.dbConection = "conexão aqui";
        // this.dbConection = "conexao sucesso";
        // this.dbConection = "conexão erro";
        // this.dbConection = "conexão desconectado";

    }

    async fecharConexao(){
        await this.dbConection.end();
        console.log("conexão desconectar");

    }
}

export default dataBase;