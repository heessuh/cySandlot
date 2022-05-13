context("Block Buster Film Reviews", () => {
  it("Has a correct title", () => {
    cy.visit("/")
    cy.title().should("equal", "Block Buster Film Reviews")
    cy.get("h1").should("have.text", "Block Buster Film Reviews")
  })
})
