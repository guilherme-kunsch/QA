/// <reference types="cypress" />

describe("Realizando testes na API", () => {
  let token;
  before(() => {
    cy.getToken("guilhermekunsch@ucl.br", "123456").then((tkn) => {
      token = tkn;
    });
  });

  beforeEach(() => {
    cy.resetRest();
  });

  it("Deve criar uma conta", () => {
    cy.request({
      url: "https://barrigarest.wcaquino.me/contas",
      method: "POST",
      headers: { Authorization: `JWT ${token}` },
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
