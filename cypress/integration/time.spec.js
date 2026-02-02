/// <reference types="cypress" />

describe('Dinamic tests', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Going back to the past', () => {
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '02/02/2026')

       

        const dt = new Date(2012, 2, 10, 15, 23, 50)

        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '31/12/1969')
    })
})