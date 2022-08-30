import fixtures from '../fixtures/fixtures.json'

Cypress.Commands.add('candidate', (name, lastname, experience) => {
    cy.visit(fixtures.url);
    cy.get('input').eq(0).type(name);
    cy.get('input').eq(1).type(lastname);
    cy.get('input').eq(2).type(experience);
})