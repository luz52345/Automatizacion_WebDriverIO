/**
   * Abre la página principal 
   */
  
class lab_1_ingresoPage{
  async open() {
    await browser.url("/");
  }

  async logoVisible() {
    await $('#btn1').waitForDisplayed({ timeout: 10000 });
    
  }

}

export default new lab_1_ingresoPage();