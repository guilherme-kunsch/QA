/// <reference types="cypress" />

describe("Realizando testes na API", () => {
  before(() => {
    cy.getToken("guilhermekunsch@ucl.br", "123456");
  });

  beforeEach(() => {
    cy.resetRest();
  });
  it("Deve alterar uma conta", () => {
    cy.request({
      method: "GET",
      url: "/contas",
      qs: {
        nome: "Conta para alterar",
      },
    })
      .then((res) => {
        return cy.request({
          method: "PUT",
          url: `/contas/${res.body[0].id}`,
          body: {
            nome: "alterando via api",
          },
        });
      })
      .then((res) => {
        expect(res.status).to.equal(200);
      });
  });
});
