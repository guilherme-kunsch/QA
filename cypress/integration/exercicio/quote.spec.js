/// <reference types="cypress" />

describe("Testando a API", () => {
  it("Deve realizar uma cotação", () => {
    cy.request({
      url: "https://sp.freterapido.com/api/v3/quote/simulate",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        shipper: {
          registered_number: "50746116000142",
          token: "b5e2943c4baee58449c35c3b4456ff3f",
          platform_code: "7d5a35171",
        },
        recipient: {
          type: 1,
          registered_number: "04854422001157",
          state_inscription: "",
          country: "BRA",
          zipcode: 29170028,
        },
        dispatchers: [
          {
            registered_number: "50746116000142",
            zipcode: 29170028,
            volumes: [
              {
                amount: 1,
                amount_volumes: 0,
                category: "999",
                sku: "235482_5603_0_U",
                tag: "",
                description: "CILINDRO 4 GASES MSA (H2S/CO/02/CH4) 34L",
                height: 0.12,
                width: 0.34,
                length: 0.41,
                unitary_price: 100.0,
                unitary_weight: 1.5,
                consolidate: false,
                overlaid: false,
                rotate: false,
              },
            ],
          },
        ],
        channel: "T",
        filter: 0,
        limit: 0,
        identification: "",
        reverse: false,
        simulation_type: [0],
        returns: {
          composition: false,
          volumes: true,
          applied_rules: false,
        },
      },
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.dispatchers).not.empty;
    });
  });
});
