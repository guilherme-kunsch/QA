/*
Funcionalidade: Inserir uma conta
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

    it('Change account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS)
            .should('be.visible')
            .click()
        cy.get('tr > :nth-child(2) > :nth-child(1) > .far').click()


        cy.get('[data-test=nome]').clear()
        cy.get('[data-test=nome]')
            .type('Nova conta2')
            .should('have.value', 'Nova conta2')


        cy.get(loc.LOGIN.BTN_LOGIN).click()

    })
})