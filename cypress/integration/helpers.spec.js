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

    it.only('Its', () => {
        const obj = {
            nome: 'User',
            idade: '23'
        }

        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = {
            nome: 'User',
            idade: '23',
            endereco: {
                rua: 'dos bobos'
            }
        }
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

    })

    it.only('Invoke', () => {
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)

    })
})