describe("Example Test Open Website", () => {
  it("visit the homepage", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Get started by editing").should("exist");
  });
});
