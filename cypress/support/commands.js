Cypress.Commands.add('checkElementVisible', (element) => {
    cy.get(element).should('be.visible');
  })

