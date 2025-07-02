This repository contains an automated test on the Blankfactor website (https://blankfactor.com/) was deloped using Cypress

Gherkin Scenario

Feature: Navigate from homepage to Contact through Retirement and Wealth section
  Scenario: Extract content from Retirement and Wealth and verify Contact page
    Given I visit the Blankfactor homepage
    And accept the cookies policy
    When open the "Industries" menu
    And click on "Retirement and wealth"
    Then scroll to the "Powering innovation in retirement services" section
    And put the mouse over the third tile labeled "AI & Machine learning"
    And extract the tile's text
    When scroll to the bottom of the page
    And click on the "Let’s get started" button
    Then should be redirected to the Contact page
    And the page title should include "Contact"
