Cypress.Commands.add('login', (username, password) => {
      cy.visit('/en/users/sign_in');
      cy.get('#user_login').clear().type(username);
      cy.get('#user_password').type(password);
      cy.get('.login-submit button').click()
      cy.url().should('contain', '/en/dashboard');
});