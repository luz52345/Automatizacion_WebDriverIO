// ir a url de automatizacion

import { Given,When, Then} from "@wdio/cucumber-framework";

//import { lab_2_inicioPage } from "./primering.page";
import lab_2_inicioPage from "./inicio.page";

Given('Quiero ingresar a la url de automatizacion', async () => { 

    await lab_2_inicioPage.open(); 

    await browser.pause(5000); 

  });


  When('Hago click en la opcion de inicio de sesion', async () => { 

   await lab_2_inicioPage.clickbtnInicioSesion();  

   await browser.pause(5000);    

  });

Then('Permite visualizar la pantalla de inicio de sesion', 
    async () => {
    await lab_2_inicioPage.enterBtn.waitForDisplayed({ timeout: 10000 });
  })
