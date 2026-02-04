/*
Funcionalidade: Inserir uma conta
Tela: Login
URL: https://barrigareact.wcaquino.me/
*/

/// <reference types="cypress" />

describe('Insert account', () => {

  before(() => {
    cy.visit('https://barrigareact.wcaquino.me/')
  })

  it('Deve acessar a página inicial', () => {
    cy.get('[data-test=email]')
        .click()
        .type('guilhermekunsch@ucl.br')
        .should('have.value', 'guilhermekunsch@ucl.br')

    cy.get('[data-test=passwd]')
        .click()    
        .type('123456')
        .should('have.value', '123456')
    
    cy.get('.btn').click()
  })

})