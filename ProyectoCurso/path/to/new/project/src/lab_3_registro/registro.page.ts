import { browser, expect } from '@wdio/globals';

class lab_3_registro {
  async open() {
    await browser.url('/');
  }

  /**
   * Se obtiene el botón de inicio de sesión
   */
  get btnInicioSesion() {
    return $('#btn1');
  }

    async clickbtnInicio() {
    await this.btnInicioSesion.click();
    }

  /**
   * Se obtienen los campos del formulario
   */
  get emailInput() {
    return $('input[ng-model="Email"]');

  }
 
  get passwordInput() {
    return $('input[ng-model="Password"]');
  }
/**
   * Ingresar email y password
   */
  async ingresarEmailYPassword(email: string, password: string) {
    await this.emailInput.waitForDisplayed({ timeout: 10000 });
    await this.emailInput.setValue(email);
    await this.passwordInput.waitForDisplayed({ timeout: 10000 });
    await this.passwordInput.setValue(password);
  }

    async clickEnterButton() {
    await $('#enterbtn').click();
  
  }
  get resultMessage() {
    return $('//label[@id="errormsg"]');
  }
   
  /**
   * Validar que el sistema muestre un mensaje de resultado después del envío
   */
  async validarMensajeResultado() {
    await this.resultMessage.waitForDisplayed({ timeout: 15000 });
    await expect(this.resultMessage).toBeDisplayed();
  }
}

export default new lab_3_registro();