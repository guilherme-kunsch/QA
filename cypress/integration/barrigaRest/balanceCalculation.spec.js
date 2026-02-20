/// <reference types="cypress" />

describe("Realizando testes na API", () => {
  before(() => {
    cy.getToken("guilhermekunsch@ucl.br", "123456");
  });

  beforeEach(() => {
    cy.resetRest();
  });

  it("Should get balance", () => {
    cy.request({
      url: "/saldo",
      method: "GET",
    }).then((res) => {
      let saldoConta = null;
      res.body.forEach((c) => {
        if (c.conta === "Conta para saldo") saldoConta = c.saldo;
      });
      expect(saldoConta).to.be.equal("534.00");
    });

    cy.request({
      url: "/transacoes",
      method: "GET",
      qs: {
        descricao: "Movimentacao 1, calculo saldo",
      },
    }).then((res) => {
      cy.request({
        url: `/transacoes/${res.body[0].id}`,
        method: "PUT",
        body: {
          status: true,
          data_transacao: Cypress.moment(res.body[0].data_transacao).format(
            "DD/MM/YYYY",
          ),
          data_pagamento: Cypress.moment(res.body[0].data_pagamento).format(
            "DD/MM/YYYY",
          ),
          descricao: res.body[0].descricao,
          envolvido: res.body[0].envolvido,
          valor: res.body[0].valor,
          conta_id: res.body[0].conta_id,
        },
      })
        .its("status")
        .should("be.equal", 200);
    });
    cy.request({
      url: "/saldo",
      method: "GET",
    }).then((res) => {
      let saldoConta = null;
      res.body.forEach((c) => {
        if (c.conta === "Conta para saldo") saldoConta = c.saldo;
      });
      expect(saldoConta).to.be.equal("534.00");
    });
  });
});
