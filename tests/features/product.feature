Feature: Online shopping via mobile app
  As a persona
  I'd like to access the SwagLabs app
  To buy items

  Background: I'd like to logged into Swag Labs
    Given that I am logged into the SwagLabs app

  Scenario: I'd like to add the Backpack to the cart
    When I add the Backpack to the cart
    And fill in all payment details
    Then the payment is completed successfully.

  Scenario: I'd like to add the Bike Light to the cart
    When I add the Bike Light to the cart
    And fill in all payment details
    Then the payment is completed successfully.

  Scenario: I'd like to add the Bolt T-Shirt to the cart
    When I add the Bolt T-Shirt to the cart
    And fill in all payment details
    Then the payment is completed successfully.

  Scenario: I'd like to add the Fleece Jacket to the cart
    When I add the Fleece Jacket to the cart
    And fill in all payment details
    Then the payment is completed successfully.

  Scenario: I'd like to add the Onesie to the cart
    When I add the Onesie to the cart
    And fill in all payment details
    Then the payment is completed successfully.

  Scenario: I'd like to add the T-Shirt RED to the cart
    When I add the T-Shirt RED to the cart
    And fill in all payment details
    Then the payment is completed successfully.        