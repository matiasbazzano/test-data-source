describe('Login Test', () => {
     it('should log in with valid credentials', () => {
       cy.visit('https://example.com/login');
       cy.get('#username').type('testuser');
       cy.get('#password').type('securepassword');
       cy.get('button[type="submit"]').click();
       cy.get('.welcome-message').should('contain', 'Welcome testuser');
     });
   });
