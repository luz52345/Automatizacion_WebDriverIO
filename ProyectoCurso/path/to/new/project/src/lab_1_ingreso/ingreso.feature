# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@lab_1_ingreso"

@lab_1_ingreso


Feature: Ingresar a la Url
  Como usuario
  Quiero ingresar a la url de automatizacion
  Para validar que la pagina existe

  # Scenario: caso de prueba concreto dentro de la Feature
  # Describe el flujo específico que se va a validar
  
  Scenario: Ir a la página de automatizacion

    # Given: establece el contexto inicial / estado previo del escenario
    Given Quiero ingresar a la pantalla de inicio de automatizacion

    #When: describe la acción que realiza el usuario
    When Ingreso a la url de automatizacion 

    # Then: describe el resultado esperado después de la acción
    Then Permite la visualizacion de la pagina de automatizacion correcta