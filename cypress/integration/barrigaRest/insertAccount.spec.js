/// <reference types="cypress" />

describe("Realizando testes na API", () => {
  before(() => {
    cy.getToken("guilhermekunsch@ucl.br", "123456");
  });

  beforeEach(() => {
    cy.resetRest();
  });

  it("Deve criar uma conta", () => {
    cy.request({
      url: "/contas",
      method: "POST",
      body: {
        nome: "Cteste2",
      },
    }).as("response");

    cy.get("@response").then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("nome", "Cteste2");
    });
  });
});
