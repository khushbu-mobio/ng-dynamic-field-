
Feature: Go to the Registration Page
  Display the Registraion form

  Scenario: Registration Page
    Given I am on registration page
    When  I Entering valid  Name, Email,Password, Gender, Country,Term & File  click on 'Save' button
    Then  Registraion Completed Successfully
    Then  Back on Registraion

  Scenario: Delete Record from table
    Given Go to Registration page and Display Data in Table
    When  Click on 'delete' button for deleting record
    Then  Deleted Record Successfully
    Then Redirect to Registraion

  Scenario: Update Record from table
    Given Go to Registration page and display registration list
    When  Click on 'edit' button for updating details
    Then  Update Record Successfully
    And  Redirect to registration page