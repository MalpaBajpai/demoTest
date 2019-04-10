Feature: update XML file

@Update_XML
Scenario: update XML file
Given I read file "demoXML.xml"
When I update key "name" to "Malpaaa" in XML file
Then I save the file "demoXMLNew.xml" in XML file
