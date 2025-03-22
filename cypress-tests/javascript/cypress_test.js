describe('Google Search', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com');
  });

  it('should search for Playwright and verify results', () => {
    cy.get('input[name="q"]').type('Playwright automation{enter}');
    cy.get('h3').should('contain', 'Playwright');
  });

  it('should search for Cypress and check if results contain Cypress', () => {
    cy.get('input[name="q"]').type('Cypress testing framework{enter}');
    cy.get('h3').should('contain', 'Cypress');
  });

  it('should search for Selenium and ensure the first result is relevant', () => {
    cy.get('input[name="q"]').type('Selenium WebDriver{enter}');
    cy.get('h3').first().should('contain', 'Selenium');
  });

  it('should verify the "Google Search" button is visible and enabled', () => {
    cy.get('input[name="q"]').type('Automation testing');
    cy.contains('Google Search').should('be.visible').and('be.enabled');
  });

  it('should perform an empty search and check for suggestions', () => {
    cy.get('input[name="q"]').click();
    cy.get('.erkvQe').should('be.visible');
  });

  it('should validate that the Google logo is displayed', () => {
    cy.get('img[alt="Google"]').should('be.visible');
  });

  it('should check the footer links are present', () => {
    cy.scrollTo('bottom');
    cy.get('footer').should('be.visible');
    cy.contains('Advertising').should('exist');
    cy.contains('Privacy').should('exist');
    cy.contains('Terms').should('exist');
  });

  it('should search for a random query and validate at least 5 results are displayed', () => {
    cy.get('input[name="q"]').type('Best programming languages 2025{enter}');
    cy.get('h3').should('have.length.at.least', 5);
  });

  it('should navigate to the second page of search results', () => {
    cy.get('input[name="q"]').type('JavaScript frameworks{enter}');
    cy.get('a[aria-label="Page 2"]').click();
    cy.url().should('include', 'start=10');
  });

  it('should not allow script injection in search', () => {
    cy.get('input[name="q"]').type('<script>alert("hacked")</script>{enter}');
    cy.get('body').should('not.contain', 'alert("hacked")');
  });
});
