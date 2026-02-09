/*
Funcionalidade: Inserir uma conta
Tela: Login
URL: https://barrigareact.wcaquino.me/
*/

/// <reference types="cypress" />


import loc from '../../support/locators'

describe('Alter account', () => {

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

  it('Alterando conta', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS)
      .should('be.visible')
      .click()
    cy.get('tr > :nth-child(2) > :nth-child(1) > .far').click()
    cy.xpath(loc.CONTAS.XP_BTN_ALTERAR)
      .click()
    cy.get(loc.CONTAS.NOME)
      .clear()
      .type('Nova conta')
    cy.get(loc.CONTAS.BTN_SALVAR)
    cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
  })
})