# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@lab_4_check"

@lab_4_check


Feature: Seleccionar checkbox
    Como usuario
    Quiero ingresar a la url de practica,seleccionar el checkbox 1


  # Scenario: caso de prueba concreto dentro de la Feature
  # Describe el flujo específico que se va a validar
 
  Scenario: Ingresar a la pantalla de registro de usuario

    # Given: establece el contexto inicial / estado previo del escenario
    Given Quiero ingresar a la pantalla de la url de practica de checkboxes
    
     #When: describe la acción que realiza el usuario
    When Seleccionar el checkbox 1

    # Then: describe el resultado esperado después de la acción
    Then Que el checkbox 1 este seleccionado