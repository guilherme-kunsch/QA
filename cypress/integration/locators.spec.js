/// <reference types="cypress" />

describe('Testando a página completa', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('...', () => {
        
    })
})