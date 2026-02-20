/// <reference types="cypress" />

describe("Testando a API", () => {
  let token;
  before(() => {
    cy.getToken("guilhermekunsch@ucl.br", "123456").then((tkn) => {
      token = tkn;
    });
  });

  beforeEach(() => {
    cy.resetRest();
  });

  it("Should create a transaction", () => {
    cy.getAccountByName("Conta para movimentacoes").then((contaId) => {
      cy.request({
        url: "/transacoes",
        method: "POST",
        headers: { Authorization: `JWT ${token}` },
        body: {
          conta_id: contaId,
          data_pagamento: Cypress.moment()
            .add({ days: 1 })
            .format("DD/MM/YYYY"),
          data_transacao: Cypress.moment().format("DD/MM/YYYY"),
          descricao: "desc",
          envolvido: "inter",
          status: true,
          tipo: "REC",
          valor: "123",
        },
      }).as("response");
    });

    cy.get("@response").its("status").should("be.equal", 201);
    cy.get("@response").its("body.id").should("exist");
  });
});
