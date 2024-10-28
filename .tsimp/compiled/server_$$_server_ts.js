import App from './app'; // Note a extensão .js aqui
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
    // appInstance.dataBase.DbDeleteAluno('IFVA1111')
    // .then((res) =>{
    //     console.log(res.success);
    //     console.log(res.message);
    // })
    // setInterval(() =>{
    //     appInstance.dataBase.DbInsertAuluno('IFCA9984', 'Jorge Armo', 'aqui_tom_um_token')
    // },3000);
    // setInterval(() => {
    //     let res = appInstance.dataBase.logger();
    //     console.log(res);
    // },5000)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tpbmd0L09uZURyaXZlL0RvY3VtZW50b3MvSUYvY3JhY2hhV2ViU2VydmljZS9zZXJ2ZXIvIiwic291cmNlcyI6WyJzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLENBQUUsMkJBQTJCO0FBRXJELE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFFOUIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXBCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUV6QixXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBRWxDLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRXRDLHNGQUFzRjtJQUN0RixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxLQUFLO0lBRUwsaURBQWlEO0lBQ2pELGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLEtBQUs7SUFJTCxxQkFBcUI7SUFDckIseUZBQXlGO0lBQ3pGLFdBQVc7SUFFWCxzQkFBc0I7SUFDdEIsK0NBQStDO0lBQy9DLHdCQUF3QjtJQUN4QixVQUFVO0FBRVYsQ0FBQyxDQUFDLENBQUMifQ==