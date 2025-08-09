// cypress/e2e/jsonPlaceholderCrud.cy.js

import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../config/.env") });
import { generateJsonPlaceholderTestData } from "../support/fakerUtils";

describe("JSONPlaceholder CRUD API Tests", () => {
  const baseUrl = process.env.BASE_URL;
  // const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  let createdId;
  const testData = generateJsonPlaceholderTestData();

  it("Create a new post (POST)", () => {
    cy.request("POST", baseUrl, testData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      createdId = response.body.id;
    });
  });

  it("Read a post by ID (GET)", () => {
    cy.request(`${baseUrl}/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 1);
    });
  });

  it("Update a post (PUT)", () => {
    cy.request("PUT", `${baseUrl}/1`, {
      id: 1,
      title: testData.title,
      body: testData.body,
      userId: testData.userId,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq(testData.title);
    });
  });

  it("Delete a post (DELETE)", () => {
    cy.request("DELETE", `${baseUrl}/1`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
