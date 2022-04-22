// Cypress - Test to Fail 
describe('Watched Movies Manager Testing - ***Test To Fail***', function () {
  // Page Load
  it("should load the page", () => {
    cy.visit('/index.html')
  })
  // Start of "Submitting An Empty String"
  describe("Submitting an empty string", () => {
    it('should leave the "Enter a Title" fied empty, click the "Add" button and output a failure message on the top of the application', () => {
      cy.get('#addTitle').click();
    })
  })
  // End of "Submitting An Empty String"
});

