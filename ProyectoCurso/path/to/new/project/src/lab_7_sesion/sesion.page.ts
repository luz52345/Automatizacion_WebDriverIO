import { browser, expect } from '@wdio/globals';

class lab_7_sesion {
    async open() {
        await browser.url('https://practice.expandtesting.com/login');
    }


    /**
     * Se obtienen los campos del formulario
     */

    get usernameInput() {
        return $('//*[@id="username"]');

    }
    get username() {
        return $('//li[contains(text(), "Username")]/b');
    }

    get passwordInput() {
        return $('//*[@id="password"]');
    }
    get password() {
        return $('//li[contains(text(), "Password")]/b');
    }

    /**
       * Ingresar username y password
       */
    async ingresarUsernameYPassword() {
        await this.usernameInput.waitForDisplayed({ timeout: 10000 });
        const usernameText = await this.username.getText();
        await this.usernameInput.setValue(usernameText);
        await this.passwordInput.waitForDisplayed({ timeout: 10000 });
        const passwordText = await this.password.getText();
        await this.passwordInput.setValue(passwordText);
    }
    async clickloginButton() {
        await $('#submit-login').click();

    }
    get securearea() {
        return $('//li[contains(text(), "Secure Area")]');
    }

    /**
     * Validar que el sistema lleve al usuario a la pantalla de area segura de pruebas de automatizacion
     */
    async validarMensajeResultado() {
        await this.securearea.waitForDisplayed({ timeout: 15000 });
        await expect(this.securearea).toBeDisplayed();
    }
}

export default new lab_7_sesion();