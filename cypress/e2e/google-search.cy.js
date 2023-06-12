describe('Google search', () => {
  
const elements = {}
elements.logo = '.logo .jfN4p'
elements.search = '#APjFqb'

  it('Can locate elements and search query  ', () => {
    cy.visit('https://www.google.com/search?q=1');
    cy.checkElementVisible(elements.logo)
    cy.checkElementVisible(elements.search)    
    cy.get(elements.search).clear()
    cy.get(elements.search).type('pássaros{enter}');
    cy.contains('pássaros').should('not.have.attr', 'placeholder');
  })
})