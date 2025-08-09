// cypress/e2e/jsonPlaceholderCrud.cy.js
import data from "../fixtures/post.json";

describe("JSONPlaceholder CRUD API Tests", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  let createdId;

  it("Create a new post (POST)", () => {
    cy.request("POST", baseUrl, data).then((response) => {
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
      title: data.title,
      body: data.body,
      userId: data.userId,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq(data.title);
    });
  });

  it("Delete a post (DELETE)", () => {
    cy.request("DELETE", `${baseUrl}/1`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
