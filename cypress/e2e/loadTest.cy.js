// cypress/e2e/jsonPlaceholderCrud.cy.js

import { generateJsonPlaceholderTestData } from "../support/fakerUtils";

describe("JSONPlaceholder load Tests", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  let createdId;
  const userCount = 10;

  for (let i = 1; i <= userCount; i++) {
    it(`Create a new post#${i}`, () => {
      const testData = generateJsonPlaceholderTestData();
      cy.request("POST", baseUrl, testData).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        createdId = response.body.id;
        cy.log(`Created post ID: ${createdId}`);
      });
    });
  }
});
