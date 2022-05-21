describe("Link", () => {
  it("should be able to click on a link", () => {
    cy.visit("https://github.com/wlsf82/hacker-stories/blob/master/README.md")
    cy.get("blockquote > p > a").click()
  })
})
