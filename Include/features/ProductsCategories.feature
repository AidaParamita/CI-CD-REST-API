@ProductCategories
Feature: Product Categories

Scenario: Get all categories
Given I set endpoint get all categories
When I send endpoint
Then I receive status code 200

Scenario: Get categories by id
Given I set endpoint get all categories by id
When I send endpoint
Then I receive status code 200

Scenario: Create a category
Given I set endpoint post create a category
When I input HTTP Body 
And I send endpoint
Then I receive status code 200 