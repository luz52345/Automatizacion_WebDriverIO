// Importa el objeto global `browser` de WebdriverIO, que permite controlar el navegador (abrir URLs, obtener info de la página, etc.)
import { browser } from '@wdio/globals';

// Clase que representa el Page Object de la página de bienvenida (Welcome Page)
// Encapsula las acciones y datos que se pueden obtener/realizar sobre esta página
class WelcomePage {
    /**
     * Abre la página principal de WebdriverIO
     * Navega a la URL base configurada en wdio.conf.ts (baseUrl + '/')
     */
    async open() {
        await browser.url('/');
    }

    /**
     * Obtiene el título actual de la página
     * Útil para validar en los tests que se cargó la página correcta
     */
    async getTitle() {
        return await browser.getTitle();
    }
}

// Exporta una única instancia (singleton) de la clase WelcomePage,
// para que todos los archivos que la importen usen el mismo objeto
export default new WelcomePage();