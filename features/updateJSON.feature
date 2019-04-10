Feature: update JSON file

@Update_JSON
Scenario: update JSON file
Given I read file "demoJSON.json"
When I update "firstName" as "Malpaaa" in JSON file
Then I save the file string "demoJSONNew.json" in JSON file
