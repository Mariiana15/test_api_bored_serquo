Feature: Retrieve and validate participants of an activity

  Scenario Outline: Check if there are activities for up to 10 participants
    Given The user requests activities by the number of participants
    When Information is required based on the number of participants "<param>"
    Then The service should always respond with a code <expectedStatusCode>
    And If there are activities for the number of participants, the response should contain the following structure

  Examples:
    | param     | expectedStatusCode |
    | 1| 200                |
    | 2| 200                |
    | 3| 200                |
    | 4| 200                |
    | 5| 200                |
    | 6| 200                |
    | 7| 200                |
    | 8| 200                |
    | 9| 200                |
   
