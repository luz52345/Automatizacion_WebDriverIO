# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@lab_5_opc"

@lab_5_opc


Feature: Lista de opciones      
  Como usuario
    Quiero ingresar a la url de practica,seleccionar una opcion de la lista desplegable y validar que la opcion seleccionada sea la correcta


  # Scenario: caso de prueba concreto dentro de la Feature
  # Describe el flujo específico que se va a validar
 
  Scenario: Ingresar a la pantalla para seleccionar una opcion de la lista desplegable y validar que la opcion seleccionada sea la correcta

    # Given: establece el contexto inicial / estado previo del escenario
    Given Quiero ingresar a la pantalla de la url de practica de dropdown
    
     #When: describe la acción que realiza el usuario
    When Seleccionar una opcion de la lista desplegable  


    # Then: describe el resultado esperado después de la acción
    Then Validar que la opcion seleccionada sea la correcta