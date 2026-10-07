exports.config = {
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [] // aquí podrías agregar '--headless' si no quieres ver el navegador
    }
    
  }]
}