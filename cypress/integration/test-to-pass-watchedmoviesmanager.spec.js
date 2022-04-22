// Cypress - Test to Pass 
describe('Watched Movies Manager Testing ***Test to Pass*** ', function () {
  // Page Load
  it("should load the page", () => {
    cy.visit('/index.html')
  })
  // Start of "Adding a Movie Title"
  describe("Adding a movie title, outputting it to the movie list, and displaying a success mesage", () => {
    it("should accept a movie title", () => {
      cy.get('input[name ="videoInput"]')
        .type("The man in the high castle")
        .should('have.value', "The man in the high castle");
    })
    it('should add the movie title to the movie list, and output a success message on the top of the application', () => {
      cy.get('#addTitle').click();
    })
  })
  // End of "Adding a Movie Title"
});

