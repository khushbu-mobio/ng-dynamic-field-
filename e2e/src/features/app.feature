
Feature: Go to the Registration Page
  Display the Registraion form

  Scenario: Registration Page
    Given I am on registration page
    When  I Entering valid  Name, Email,Password, Gender, Country,Term & File  click on 'Save' button
    Then  Display Data in Table
    And   Click on 'delete' button for deleting record
    And   Click on 'edit' button for updating details
