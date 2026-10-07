// ir a url de practica 

import { Given,When, Then} from "@wdio/cucumber-framework";

//import { lab_4_checkPage } from "./primering.page";
import lab_5_opcPage from "./opc.page";

Given('Quiero ingresar a la pantalla de la url de practica de dropdown', async () => { 
        await lab_5_opcPage.open(); 
        await browser.pause(5000); 
        //await lab_5_opcPage.scrollToBottom();
        await lab_5_opcPage.scroll500px();
        await browser.pause(5000); 
      });


  When('Seleccionar una opcion de la lista desplegable', async () => { 
   await lab_5_opcPage.selectOption();  
   await browser.pause(5000);    

  });

Then('Validar que la opcion seleccionada sea la correcta', 
    async () => {
    await lab_5_opcPage.dropdown.waitForDisplayed({ timeout: 10000 });
    
   
  })