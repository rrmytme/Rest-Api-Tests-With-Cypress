// cypress/e2e/schemaValidation.cy.js

describe("Schema Validation with Cypress", () => {
  it("Validates response against post schema", () => {
    cy.fixture("postSchema.json").then((schema) => {
      cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
        .its("body")
        .should("jsonSchema", schema);
    });
  });
});
