// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import loc from './locators'

require('cypress-xpath')

Cypress.Commands.add('login', (user, passwd) => {
    cy.get(loc.LOGIN.USER)
        .type('guilhermekunsch@ucl.br')
        .should('have.value', 'guilhermekunsch@ucl.br')

    cy.get(loc.LOGIN.PASSWORD)
        .type('123456')
        .should('have.value', '123456')

    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
