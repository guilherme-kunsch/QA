/// <reference types="cypress" />

describe("Realizando testes na API", () => {
  before(() => {
    cy.getToken("guilhermekunsch@ucl.br", "123456");
  });

  beforeEach(() => {
    cy.resetRest();
  });

  it("Não deve criar uma conta repetida", () => {
    cy.request({
      url: "/contas",
      method: "POST",
      body: {
        nome: "Conta mesmo nome",
      },
      failOnStatusCode: false,
    }).as("response");

    cy.get("@response").then((res) => {
      console.log(res);
      expect(res.status).to.equal(400);
      expect(res.body.error).to.be.equal("Ja existe uma conta com esse nome!");
    });
  });
});
