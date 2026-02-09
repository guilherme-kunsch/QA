/*
Funcionalidade: Remover uma movimentação
Tela: Movimentação
URL: https://barrigareact.wcaquino.me/
*/

/// <reference types="cypress" />

import loc from '../../support/locators'

describe('Insert account', () => {

    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
    })

    it('Deve acessar a página inicial', () => {
        cy.login('guilherme.kunsch@outlook.com', '123456')
    })

    it('Deve remover uma movimentação', () => {
        cy.get('[data-test=menu-extrato]').click()
        cy.get(':nth-child(1) > .row > .col > [href="#"] > .far').click()

        cy.get('.toast-message').should('contain', 'Movimentação removida')

    })
})