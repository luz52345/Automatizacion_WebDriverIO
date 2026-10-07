// ir a url de practica 

import { Given,When, Then} from "@wdio/cucumber-framework";

//import { lab_6_Page } from "./primering.page";

import lab_6_impPage from "./imp.page";

Given('Quiero ingresar a la pantalla de la url de practica de elementos dinamicos', async () => { 
  console.log("abriendo open");  
  await lab_6_impPage.open(); 
  await browser.pause(5000); 
  await lab_6_impPage.scroll1100px();
  //await browser.pause(5000); 
});


  When('Elegir contenido de la pagina', async () => { 
   await lab_6_impPage.elemento.click();  
   await browser.pause(5000);
   await lab_6_impPage.button.click();
   await browser.pause(5000);   

  });

Then('Visualizar el contenido de la pagina', 
    async () => {
    await lab_6_impPage.validatetxt.waitForDisplayed({ timeout: 10000 });
    
   
  })
