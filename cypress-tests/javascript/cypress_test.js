describe('Google Search', () => {
    it('should search for Playwright and verify results', () => {
      cy.visit('https://www.google.com');
      cy.get('input[name="q"]').type('Playwright automation{enter}');
      cy.get('h3').should('contain', 'Playwright');
    });
  });
  