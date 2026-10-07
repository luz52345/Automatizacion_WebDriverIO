# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@lab_3_registro"

@lab_3_registro


Feature: Registro de usuario
  Como usuario
    Quiero ingresar a la url de automatizacion,seleccionar la opcion de inicio de sesion
    Para poder habilitar la opcion de ingreseo usuario y contaraseña
    La aplicación debe validar usuario y contraseña al seleccionar el botón enter


  # Scenario: caso de prueba concreto dentro de la Feature
  # Describe el flujo específico que se va a validar
 
  Scenario: Ingresar a la pantalla de registro de usuario

    # Given: establece el contexto inicial / estado previo del escenario
    Given Quiero ingresar a la url de automatizacion e iniciar sesion para registro

    #When: describe la acción que realiza el usuario
    When Ingresar email y password y hacer click en el boton enter

    # Then: describe el resultado esperado después de la acción
    Then El sistema debe mostrar un mensaje de resultado despues del envio