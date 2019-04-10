Feature: API test

@Validate_GET
Scenario: validate status and userId of GET
Given I make get request "/posts/1"
Then I validate status code "200"
And I validate key "userId" has value "1" in body

@Validate_POST
Scenario: validate status and id of POST
Given I make post request "/posts"
Then I validate status code "201"
And I validate key "id" has value "101" in body