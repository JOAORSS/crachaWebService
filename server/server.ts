import App from './app';  // Note a extensão .js aqui

const appInstance = new App();

appInstance.route();

appInstance.middleware();

appInstance.app.listen(3000, () => {

appInstance.dataBase.criarConexao();

console.log('Server iniciado');


});
