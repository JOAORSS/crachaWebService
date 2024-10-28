import App from './app';  // Note a extensão .js aqui

const appInstance = new App();

appInstance.route();

appInstance.middleware();

appInstance.app.listen(3000, () => {

appInstance.dataBase.criarConexao();

console.log('Hello from type Script');

// appInstance.dataBase.DbInsertAluno('IFVA1111', 'ZEZE DO PARA', 'aqui_tom_um_token')
// .then((res) =>{
//     console.log(res.success);
//     console.log(res.message);
// })

appInstance.dataBase.DbDeleteAluno('IFVA1111')
.then((res) =>{
    console.log(res.success);
    console.log(res.message);
})



// setInterval(() =>{
//     appInstance.dataBase.DbInsertAuluno('IFCA9984', 'Jorge Armo', 'aqui_tom_um_token')
// },3000);

// setInterval(() => {
//     let res = appInstance.dataBase.logger();
//     console.log(res);
// },5000)

});
