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
      qs: { descricao: "Movimentacao para exclusao" },
    }).then((res) => {
      cy.request({
        url: `/transacoes/${res.body[0].id}`,
        method: "DELETE",
      })
        .its("status")
        .should("be.equal", 204);
    });
  });
});
