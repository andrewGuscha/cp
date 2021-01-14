/// <reference types="cypress" />

context('Home', () => {
  before(() => {
    cy.visit('https://www.hajper.com/sv')
  })

  it('First button should be visible', () => {
    cy.get('#regulations-header a[data-at="regulation-header-spel-paus"]')
      .should('be.visible')
  })

  it('Second button should be visible', () => {
    cy.get('#regulations-header a[data-at="regulation-header-responsible-gaming"]')
      .should('be.visible')
  })

  it('Third button should be visible', () => {
    cy.get('#regulations-header a[data-at="regulation-header-self-test"]')
      .should('be.visible')
  })

  it('Logo button should be available', () => {
    cy.get('footer span[data-at="spelinspektionen-logo"]')
      .should('have.length', 1)
  })
})
