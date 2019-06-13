/// <reference types="cypress" />
it('loads', () => {
  cy.visit('/', {
    onBeforeLoad (win) {
      cy.spy(win.console, 'log').as('console.log')
    }
  })
  cy.contains('Hello world').should('be.visible')
  cy.get('@console.log').should('have.been.calledWith', 'index.js')
})
