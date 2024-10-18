describe('Home Page', () => {
  it('should have title on page', () => {
    cy.visit('/');

    cy.get('h1').contains('Next Boilerplate');
  });
});
