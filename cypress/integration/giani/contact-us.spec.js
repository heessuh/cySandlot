/// <reference types="Cypress" />

describe("Contact Us", () => {
  it("should display the contact us page", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.get('[name="first_name"]').type("Fred")
    cy.get('[name="last_name"]').type("Suh")
    cy.get('[name="email"]').type("fred@fred.com")
    cy.get("textarea.feedback-input").type("placeholder comment")
    cy.get('[type="submit"]').click({ force: true })
  })
})
