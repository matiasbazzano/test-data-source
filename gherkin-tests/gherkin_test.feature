Feature: Example feature
    Scenario: Verify page title
        Given I open the browser
        When I navigate to "https://example.com"
        Then the page title should be "Example Domain"