/* eslint-disable */
/// <reference types="cypress" />

describe("Todos page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("create a todo", () => {
    cy.get(".todo-input").type("New Todo");
    cy.get(".fas").click();

    cy.get(".todo-item").should("exist");
    cy.contains("New Todo");
  });

  it("delete a todo", () => {
    cy.get(".todo-input").type("New Todo");
    cy.get(".fas").click();
    cy.get(".todo-item").should("exist");

    cy.get(".trash-btn").click();
    cy.get(".todo-item").should("not.exist");
  });
});
