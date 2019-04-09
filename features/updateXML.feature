Feature: update XML file

@Update_XML
Scenario: update XML file
Given I read file "demoXML.xml"
When I update name "Malpa" to "Malpaaa"
Then I save the file "demoXMLNew.xml"
