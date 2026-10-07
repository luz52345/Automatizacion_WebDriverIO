# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@lab_2_inicio"

@lab_2_inicio


Feature: Inicio sesion
  Como usuario
  Quiero ingresar a la url de automatizacion y seleccionar la opcion de inicio de sesion
  Para acceder a la página de inicio de sesión

  # Scenario: caso de prueba concreto dentro de la Feature
  # Describe el flujo específico que se va a validar
  Scenario: Ir a la pantalla de inicio de sesion

    # Given: establece el contexto inicial / estado previo del escenario
    Given Quiero ingresar a la url de automatizacion 

    #When: describe la acción que realiza el usuario
    When Hago click en la opcion de inicio de sesion 

    # Then: describe el resultado esperado después de la acción
    Then Permite visualizar la pantalla de inicio de sesion