@Products
Feature: Products

Scenario: Assign product rating
Given I set endpoint post assign product rating
When I input HTTP Body 
And I send endpoint
Then I receive status code 200
 
Scenario: Create comment product
Given I set endpoint post create comment product
When I input HTTP Body 
And I send endpoint
Then I receive status code 200

Scenario: Create new product
Given I set endpoint post create new product
When I input HTTP Body 
And I send endpoint
Then I receive status code 200

Scenario: Delete product
Given I set endpoint delete product
When I input HTTP Body 
And I send endpoint
Then I receive status code 200

Scenario: Get all product
Given I set endpoint get all product
When I send endpoint
Then I receive status code 200

Scenario: Get product by ID
Given I set endpoint get product by ID
When I send endpoint
Then I receive status code 200

Scenario: Get product comment
Given I set endpoint get product comment
When I send endpoint
Then I receive status code 200

Scenario: Get product ratings
Scenario: Get product comment
Given I set endpoint get product ratings
When I send endpoint
Then I receive status code 200