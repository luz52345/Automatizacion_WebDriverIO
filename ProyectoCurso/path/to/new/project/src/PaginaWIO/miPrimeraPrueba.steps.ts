// Importa las funciones de Cucumber para definir los pasos (steps) Given/Then
import { Given, Then } from '@wdio/cucumber-framework';
// Importa `expect` de WebdriverIO para hacer las aserciones (assertions)
import { expect } from '@wdio/globals';
// Importa el Page Object que contiene los selectores y acciones de la página de bienvenida (home)
import WelcomePage from './welcome.page';

/**
 * Given: define el estado inicial del escenario
 * Abre la página principal (home) de WebdriverIO
 */
Given(/^I open the WebdriverIO homepage$/, async () => {
    await WelcomePage.open();
});

/**
 * Then: define el resultado esperado
 * Obtiene el título actual de la página y verifica que contenga el texto esperado
 * (ej: "WebdriverIO"), capturado desde el feature
 */
Then(/^the page title should contain "([^"]*)"$/, async (expectedText: string) => {
    const title = await WelcomePage.getTitle();
    expect(title).toContain(expectedText);
});