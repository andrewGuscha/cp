/// <reference types="cypress" />

context('Home', () => {
  before(() => {
    cy.visit('https://www.hajper.com/sv/casino/explore')
  })

  it('First button should be visible', () => {
    cy.get('button[data-at="love-icon"]')
      .first()
      .click()

      cy.get('div[data-at="notification-bar-header"]')
        .should('have.length', 1)

  })
})
