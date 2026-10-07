# Tag que permite ejecutar únicamente los escenarios marcados con @NavegacionDocs
# Se usa así desde la terminal:
# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@NavegacionDocs"
@NavegacionDocs

# Feature: describe la funcionalidad que se va a probar (a nivel de negocio)
# El bloque "Como / Quiero / Para" es la historia de usuario que justifica esta prueba
Feature: Navegación a la documentación
  Como usuario
  Quiero hacer clic en el enlace de documentación
  Para llegar a la sección de Docs

  # Scenario: caso de prueba concreto dentro de la Feature
  # Describe el flujo específico que se va a validar
  Scenario: Ir a la página de Docs desde el home

    # Given: establece el contexto inicial / estado previo del escenario
    Given I'm in the WebdriverIO homepage

    # When: describe la acción que realiza el usuario
    When I click on the "Docs" navigation link

    # Then: describe el resultado esperado después de la acción
    Then I should see "Get Started" in the page