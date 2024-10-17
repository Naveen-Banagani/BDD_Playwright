Feature: Dynamics 365, Customer Selection Hub Account Validation
  @Positive-Validation
  @sanity
  Scenario: Validate Sales Account details
    Given I login to Dynamics 365 application with "admin@CRM119503.onmicrosoft.com" and "vxl&36R!"
    Then the Dynamics 365 Home Page is displayed
    When I click on Sales Hub Power App
    When the Sales Hub Page is opened and I click on Accounts Button
    Then the Accounts page is displayed and I select active accounts
    When I search for the phone number "555-0153"
    Then I verify that the data displayed is "Fabrikam, Inc. (sample)", "someone_d@example.com", "Maria Campbell (sample)", "555-0153", "Lynnwood"    

  @Negative-Validation
  @sanity
  Scenario Outline: Validate Sales Account details
    Given I login to Dynamics 365 application with "<username>" and "<password>"
    Then the Dynamics 365 Home Page is displayed
    When I click on Sales Hub Power App
    When the Sales Hub Page is opened and I click on Accounts Button
    Then the Accounts page is displayed and I select active accounts
    When I search for the phone number "555-0153"
    Then I verify that the data displayed is "Fabrikam, Inc. (sample)", "someone_d@example.com", "Maria Campbell (sample)", "555-0155", "Lynnwood"

    Examples:
    | username                              | password   |
    | admin@CRM119503.onmicrosoft.com       | vxl&36R! |

 



