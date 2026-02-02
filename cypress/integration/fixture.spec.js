/// <reference types="cypress" />

describe('Fixture tests', () => {

    it('Get data form fixture file', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.fixture('userData').then((usuario => {
            cy.get('#formNome').type(usuario.nome)
            cy.get('[data-cy=dataSobrenome]').type(usuario.sobrenome)
            cy.get(`[name=formSexo][value=${usuario.sexo}]`).click()
            cy.get(`[name=formComidaFavorita][value=${usuario.comida}]`).click()
            cy.get('#formEscolaridade').select(usuario.escolaridade)
            cy.get('#formEsportes').select(usuario.esportes)
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :ntd-child(1)').should('contain', 'Cadastrado!')

        }))
    })

})