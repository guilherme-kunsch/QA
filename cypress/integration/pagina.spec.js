/// <reference types="cypress" />

describe('Testando a página completa', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Prenchendo nome e sobrenome', () => {
        cy.get('#formNome')
            .type('Guilherme')
            .should('have.value', 'Guilherme')

        cy.get('[data-cy=dataSobrenome]')
            .type('Kunsch')
            .should('have.value', 'Kunsch')
    })

    it('Selecionando o sexo', () => {
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
    })

    it('Comida favorita', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
    })

    it('Escolaridade', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')
    })

    it('Esportes', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida'])
    })

    it('Sugestoes', () => {
        cy.get('#elementosForm\\:sugestoes')
            .type('Testando o cypress')
            .should('have.value', 'Testando o cypress')
    })

    it('Informações gerais', () => {
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input')
            .click()
        
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6)')
            .type('Salário 20.000')
            .should('have.value', '')
    })

})