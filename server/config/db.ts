import pg = require('pg');

// import redis = require('redis');
// const client = redis;

// AQUI A GENT N VAI USAR REDIS E SIM POSTEGRES

class dataBase {
    protected conection = new pg.Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'teste',
        password: 'ifj8990iha',
        port: 5432
    });

    constructor() {
    }

    async criarConexao(){
        
        await this.conection.connect();

        await this.conection.query('SELECT NOW()');

        console.log("conexão ativa");

    }

    logger(){
        var conectionStatus = this.conection.ended.valueOf();
        return conectionStatus ? "Sistema Desligado" : "Sistema ativo";
        
    }

    async fecharConexao(){
        await this.conection.end();

    }
}

export default dataBase;