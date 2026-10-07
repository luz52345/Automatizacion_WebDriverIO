// ir a url de practica 

import { Given,When, Then} from "@wdio/cucumber-framework";

//import { lab_4_checkPage } from "./primering.page";
import lab_4_checkPage from "./check.page";

Given('Quiero ingresar a la pantalla de la url de practica de checkboxes', async () => { 
  console.log("abriendo open");  
    await lab_4_checkPage.open(); 
    await browser.pause(5000); 
    //await lab_4_checkPage.scrollToBottom();
    await lab_4_checkPage.scroll500px();
    await browser.pause(5000); 
  });


  When('Seleccionar el checkbox 1', async () => { 
   await lab_4_checkPage.clickCheckbox1();  
   await browser.pause(5000);    

  });

Then('Que el checkbox 1 este seleccionado', 
    async () => {
    await lab_4_checkPage.checkbox1.waitForDisplayed({ timeout: 10000 });
    
   
  })
