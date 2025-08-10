describe("Mock CRUD tests", () => {
  it.only("GET - should display mocked posts", () => {
    cy.intercept("GET", "/posts", {
      statusCode: 200,
      body: [
        { id: 1, title: "Mocked Post 1" },
        { id: 2, title: "Mocked Post 2" },
      ],
    }).as("getPosts");

    cy.visit("/posts");
    cy.wait("@getPosts");
    cy.contains("Mocked Post 1").should("be.visible");
  });

  it("POST - should simulate post creation", () => {
    cy.intercept("POST", "/posts", {
      statusCode: 201,
      body: { id: 101, title: "Created via Stub" },
    }).as("createPost");

    cy.visit("/create-post");
    cy.get("#title").type("Created via Stub");
    cy.get("#submit").click();
    cy.wait("@createPost");
    cy.contains("Post created!").should("be.visible");
  });

  it("PUT - should simulate post update", () => {
    cy.intercept("PUT", "/posts/1", {
      statusCode: 200,
      body: { id: 1, title: "Updated Title" },
    }).as("updatePost");

    cy.visit("/edit-post/1");
    cy.get("#title").clear().type("Updated Title");
    cy.get("#submit").click();
    cy.wait("@updatePost");
    cy.contains("Updated Title").should("be.visible");
  });

  it("DELETE - should simulate post deletion", () => {
    cy.intercept("DELETE", "/posts/1", {
      statusCode: 200,
      body: {},
    }).as("deletePost");

    cy.visit("/posts");
    cy.get(`#delete-post-1`).click();
    cy.wait("@deletePost");
    cy.contains("Post deleted").should("be.visible");
  });
});
