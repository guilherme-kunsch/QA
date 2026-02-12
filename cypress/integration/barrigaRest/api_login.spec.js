/// <reference types="cypress" />

describe('Realizando testes na API', () => {
    it('Deve realizar o login', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: 'guilhermekunsch@ucl.br',
                senha: '123456'
            },
        }).its('body.token').should('not.be.empty')
    })
})