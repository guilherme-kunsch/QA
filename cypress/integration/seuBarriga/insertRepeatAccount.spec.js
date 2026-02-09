/*
Funcionalidade: Inserir uma conta repetida
Tela: Login
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

    it('Insert repeat account', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        
        cy.get('[data-test=nome]')
            .type('Nova conta2')
            .should('have.value', 'Nova conta2')

        cy.get('.btn').click()
    })
})