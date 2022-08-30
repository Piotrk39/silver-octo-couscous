/// <reference types='cypress'/>
import fixtures from "../fixtures/fixtures.json";

describe("Form is Posted with all mandatory Fields", () => {
  const name = fixtures.name;
  const lastname = fixtures.lastname;
  const experience = fixtures.experience;

  it("Checks if the form was posted succesfully", () => {
    cy.candidate(name, lastname, experience);

    cy.url().should("include", fixtures.url);

    cy.get("input").eq(3).click();

    cy.get("button")
      .eq(0)
      .click()
      .request("/")
      .should((response) => {
        expect(response.status).to.eq(200);
      });

    cy.get(".confirmation-message #confirmMessageName")
      .should("contain", name)
      .screenshot();
  });
});
