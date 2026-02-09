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
        cy.get(loc.LOGIN.USER)
            .type('guilhermekunsch@ucl.br')
            .should('have.value', 'guilhermekunsch@ucl.br')

        cy.get(loc.LOGIN.PASSWORD)
            .type('123456')
            .should('have.value', '123456')

        cy.get(loc.LOGIN.BTN_LOGIN).click()
        cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
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