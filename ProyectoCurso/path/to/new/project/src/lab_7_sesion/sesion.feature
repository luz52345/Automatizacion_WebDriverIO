# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@lab_7_sesion"

@lab_7_sesion


Feature: Inicio de sesión de usuario
  Como usuario
    Quiero ingresar a la url de automatizacion y loguearme con mi usuario y contraseña


  # Scenario: caso de prueba concreto dentro de la Feature
  # Describe el flujo específico que se va a validar
 
  Scenario: Ingresar a la pantalla ingreso de usuario y contraseña  

    # Given: establece el contexto inicial / estado previo del escenario
    Given Quiero ingresar a la url de automatizacion e iniciar sesion de usuario

    #When: describe la acción que realiza el usuario
    When Ingresar username y password y hacer click en el boton login

    # Then: describe el resultado esperado después de la acción
    Then El sistema llevar al usuario a la pantalla de area segura de pruebas de automatizacion 