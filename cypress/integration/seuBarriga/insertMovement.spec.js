/*
Funcionalidade: Inserir uma cmovimentação
Tela: Movimentações
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

    it('Insert movement', () => {

        //inserindo saldo
        cy.get('[data-test=menu-movimentacao]').click()
        cy.get('[data-test=tipo-receita]').click()

        cy.get('[data-test=descricao]')
            .type('Pagamento mensal')
            .should('have.value', 'Pagamento mensal')
        
        cy.get('[data-test=valor]')
            .type('5000')
            .should('have.value', '5000')
        
        cy.get('[data-test=envolvido]')
            .type('Salario')
            .should('have.value', 'Salario')
        
        cy.get('[data-test=envolvido]')
            .click()
        
        cy.get('.btn-primary')
            .click()
    })
})