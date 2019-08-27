/// <reference types="cypress" />

// import code directly from the application
// to demonstrate code coverage for unit tests
import {add} from '../../src'

// full end-to-end test
it('loads', () => {
  cy.visit('/', {
    onBeforeLoad (win) {
      cy.spy(win.console, 'log').as('console.log')
    }
  })
  cy.contains('Hello world').should('be.visible')
  cy.get('@console.log').should('have.been.calledWith', 'index.js')
})

// example unit test
it('adds two numbers', () => {
  expect(add).to.be.a('function')
  expect(add(2, 3)).to.equal(5)
})
