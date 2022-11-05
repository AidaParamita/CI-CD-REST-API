@Order
Feature: Orders

Scenario: Get all order 
Given I set endpoint get all order
When I send endpoint
Then I receive status code 200

Scenario: Get all order By ID
Given I set endpoint get all order by id
When I send endpoint
Then I receive status code 200

Scenario: Create new order 
Given I set endpoint post create a new order
When I input HTTP Body 
And I send endpoint
Then I receive status code 200