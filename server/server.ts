import App from './app';  // Note a extensão .js aqui

const appInstance = new App();

appInstance.route();

appInstance.app.listen(3000, () => {
  
});
