# Tag que permite ejecutar únicamente los escenarios marcados con @MiPrimeraPrueba
# Se usa así desde la terminal:
# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@MiPrimeraPrueba"
@MiPrimeraPrueba

# Feature: describe la funcionalidad que se va a probar (a nivel de negocio)
# El bloque "Como / Quiero / Para" es la historia de usuario que justifica esta prueba
Feature: Verificar página principal de WebdriverIO
  Como usuario
  Quiero visitar la página principal de WebdriverIO
  Para verificar que carga correctamente

  # Scenario: caso de prueba concreto dentro de la Feature
  # Valida que el título de la página home sea el esperado
  Scenario: Validar el título de la página

    # Given: establece el contexto inicial / estado previo del escenario
    Given I open the WebdriverIO homepage

    # Then: describe el resultado esperado después de la acción
    Then the page title should contain "WebdriverIO"