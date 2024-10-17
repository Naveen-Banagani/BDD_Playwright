Feature: Dynamics 365, Customer Selection Hub Account Validation
   @smoke
   @sanity
  Scenario: Validate Sales Account details with External File
    Given I login to Dynamics 365 application with the username and password
    Then the Dynamics 365 Home Page is displayed
    When I click on Sales Hub Power App
    When the Sales Hub Page is opened and I click on Accounts Button
    Then the Accounts page is displayed and I select active accounts
    When I search for the phone number from the file
    Then I verify that the account details from the file are displayed