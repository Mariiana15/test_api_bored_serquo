Feature: Validate Bored API service, to test different types.

  Scenario Outline: Make a GET call to test that all types respond correctly
    Given The user validates if there are activities for the different types
    When The user requests the activity related to the following typology "<param>"
    Then The service must always respond correctly <expectedStatusCode>
    And The service must respond with the following details

  Examples:
    | param     | expectedStatusCode |
    | education| 200                |
    | recreational| 200                |
    | social| 200                |
    | diy| 200                |
    | charity| 200                |
    | cooking| 200                |
    | relaxation| 200                |
    | music| 200                |
    | busywork| 200                |
