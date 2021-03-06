//by using session in beforeEach, one does not have to log in everytime
//by using origin, one can log into multiple sites using 3rd party auth provider, a new feature of v9.6.0 of Cypress

beforeEach(function () {
  cy.session('login', function () {
    // start the login

    cy.origin('2nd domain', function () {
      // log in via UI
    })

    // back to the local courses page
    cy.location('pathname').should('equal', '/courses')
  })
})

it('logs in', function () {
  cy.visit('/courses')
  // we are logged in!
})
