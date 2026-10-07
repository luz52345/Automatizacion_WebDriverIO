import { Given, When, Then } from '@wdio/cucumber-framework';
import lab_7_sesion from './sesion.page';

Given('Quiero ingresar a la url de automatizacion e iniciar sesion de usuario', async () => {
  await lab_7_sesion.open(); 
  await browser.pause(5000); 
 
});

When('Ingresar username y password y hacer click en el boton login', async () => {
 await lab_7_sesion.ingresarUsernameYPassword();
 await lab_7_sesion.clickloginButton();
});

Then('El sistema llevar al usuario a la pantalla de area segura de pruebas de automatizacion', 
    async () => {
  await lab_7_sesion.securearea.waitForDisplayed({ timeout: 15000 });
});
