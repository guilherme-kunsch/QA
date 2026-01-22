/// <reference types="cypress" />

describe('Esperas....', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it.only('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')
    })

    it.only('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout: 1000}).should('exist')

        cy.get('#buttonListDOM').click()
        // cy.wait(5000)
        cy.get('#lista li')
            .should('contain', 'Item 2')
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
        }).and('have.id', 'buttonListDOM')
    })
})
