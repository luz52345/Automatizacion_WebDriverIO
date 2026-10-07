# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@lab_6_imp"

@lab_6_imp


Feature: Validar ingreso a pagina y visualizacion de informacion
  Como usuario
    Quiero ingresar a la url de practica seleccionar lemento y que se viisualice la informacion
    
  # Scenario: caso de prueba concreto dentro de la Feature
  # Describe el flujo específico que se va a validar
 
  Scenario: Visualizar Elmento seleccionado


    # Given: establece el contexto inicial / estado previo del escenario
    Given Quiero ingresar a la pantalla de la url de practica de elementos dinamicos
    
     #When: describe la acción que realiza el usuario
    When Elegir contenido de la pagina
    

    # Then: describe el resultado esperado después de la acción
    Then Visualizar el contenido de la pagina