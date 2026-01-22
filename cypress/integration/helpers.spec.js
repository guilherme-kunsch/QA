/// <reference types="cypress" />

describe('Helpers', () => {
    it('Wrap', () => {
        const obj = {
            nome: 'User',
            idade: '23'
        }
        expect(obj).to.be.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // cy.get('#forNome').then($el => {
        //     cy.wrap($el).type('funciona via cypress')
        // })

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => {
            console.log('Encontrei o primeiro botão!')
        })

        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => {
            console.log('Encontrei o segundo botão!')
        })
    })
})