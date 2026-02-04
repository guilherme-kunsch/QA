/*
Funcionalidade: Remover uma movimentação
Tela: Movimentação
URL: https://barrigareact.wcaquino.me/
*/

/// <reference types="cypress" />

describe('Insert account', () => {

    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
    })

    it('Deve acessar a página inicial', () => {
        cy.get('[data-test=email]')
            .type('guilhermekunsch@ucl.br')
            .should('have.value', 'guilhermekunsch@ucl.br')

        cy.get('[data-test=passwd]')
            .type('123456')
            .should('have.value', '123456')

        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('Deve remover uma movimentação', () => {
        cy.get('[data-test=menu-extrato]').click()
        cy.get(':nth-child(1) > .row > .col > [href="#"] > .far').click()

        cy.get('.toast-message').should('contain', 'Movimentação removida')

    })
})