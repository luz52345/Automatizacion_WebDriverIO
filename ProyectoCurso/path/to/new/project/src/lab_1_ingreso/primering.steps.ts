// ir a url de automatizacion

import { Given,When, Then} from "@wdio/cucumber-framework";
//import { lab_1_ingresoPage } from "./primering.page";

import lab_1_ingresoPage from "./primering.page";

Given('Quiero ingresar a la pantalla de inicio de automatizacion', async () => { 

    await lab_1_ingresoPage.open(); 

    await browser.pause(5000); 

  });


  When('Ingreso a la url de automatizacion', async () => { 

 //await lab_1_ingresoPage.Open();  

   //SS   await browser.pause(5000);    

  });

Then('Permite la visualizacion de la pagina de automatizacion correcta', async () => { 
  await lab_1_ingresoPage.logoVisible();

})



 
















  
  
