import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const pg = __require("pg");
// import redis = require('redis');
// const client = redis;
// AQUI A GENT N VAI USAR REDIS E SIM POSTEGRES
class dataBase {
    constructor() {
        Object.defineProperty(this, "conection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new pg.Pool({
                user: 'postgres',
                host: 'localhost',
                database: 'teste',
                password: 'ifj8990iha',
                port: 5432
            })
        });
    }
    async criarConexao() {
        await this.conection.connect();
        await this.conection.query('SELECT NOW()');
        console.log("conexão ativa");
    }
    logger() {
        var conectionStatus = this.conection.ended.valueOf();
        return conectionStatus ? "Sistema Desligado" : "Sistema ativo";
    }
    async fecharConexao() {
        await this.conection.end();
    }
}
export default dataBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva2luZ3QvT25lRHJpdmUvRG9jdW1lbnRvcy9JRi9jcmFjaGFXZWJTZXJ2aWNlL3NlcnZlci8iLCJzb3VyY2VzIjpbImNvbmZpZy9kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUEwQjtBQUUxQixtQ0FBbUM7QUFDbkMsd0JBQXdCO0FBRXhCLCtDQUErQztBQUUvQyxNQUFNLFFBQVE7SUFTVjtRQVJVOzs7O21CQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDOUIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQztXQUFDO0lBR0gsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZO1FBRWQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRS9CLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JELE9BQU8sZUFBZSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO0lBRW5FLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYTtRQUNmLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUUvQixDQUFDO0NBQ0o7QUFFRCxlQUFlLFFBQVEsQ0FBQyJ9