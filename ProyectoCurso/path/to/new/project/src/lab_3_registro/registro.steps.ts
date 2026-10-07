import { Given, When, Then } from '@wdio/cucumber-framework';
import lab_3_registro from './registro.page';

Given('Quiero ingresar a la url de automatizacion e iniciar sesion para registro', async () => {
  await lab_3_registro.open(); 
  await browser.pause(5000); 
  await lab_3_registro.clickbtnInicio();  
  await browser.pause(5000);  
});

When('Ingresar email y password y hacer click en el boton enter', async () => {
 await lab_3_registro.ingresarEmailYPassword('martinluar@gmail.com', '12345678');
 await lab_3_registro.clickEnterButton();
});

Then('El sistema debe mostrar un mensaje de resultado despues del envio', async () => {
  await lab_3_registro.validarMensajeResultado();
});
