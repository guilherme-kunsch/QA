/// <reference types="cypress" />

describe('Work with basic elements', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.contains('a', 'Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress text')
        cy.get('#formNome').should('have.value', 'Cypress text')

        cy.get('#elementosForm\\:sugestoes').type('textarea')
        cy.get('#elementosForm\\:sugestoes').should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Gosto de você')
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .should('have.value', 'Gosto de você')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay: 100 })
            .should('have.value', 'acerto')
    })

    it('Radio', () => {
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')

        cy.get('#formSexoFem').should('not.be.checked')
    })

    it('CheckButton', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
    })

    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')
    })

    it.only('Combo multliplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida'])
    })

})