@Auth
Feature: Auth

Scenario: user register with correct data
Given I set endpoint register
When I input HTTP Body
And I send endpoint
Then I receive status code 200

Scenario: user register without fill password
Given I set endpoint register
When I input HTTP Body
And I send endpoint
Then I receive status code 400

Scenario: user login with correct data
Given I set endpoint login
When I send endpoint
Then I receive status code 200

Scenario: user login without fill password
Given I set endpoint login
When I send endpoint
Then I receive status code 400

Scenario: user want to get user information
Given I set endpoint get user information
When I send endpoint
Then I receive status code 200


Scenario: user want to get user information with method post
Given I set endpoint post user information
When I send endpoint
Then I receive status code 400