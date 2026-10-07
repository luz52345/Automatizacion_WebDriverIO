import { browser } from '@wdio/globals'

/**
   * Abre la página principal 
   */

class lab_2_inicioPage {
  async open() {
    await browser.url("/");
  }



  /**
   * se obtiene el elemento boton de inicio de sesion
   */
  get btnInicioSesion() {
    return $('#btn1');
  }

  get enterBtn() {
    return $('#enterbtn');
  }


  /**
   * click en el boton de inicio de sesion
   */
  async clickbtnInicioSesion() {
    await this.btnInicioSesion.click();
  }
}




export default new lab_2_inicioPage();