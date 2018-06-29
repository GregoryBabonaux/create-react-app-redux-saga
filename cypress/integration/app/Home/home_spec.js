context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });


  it('should display a Home title', () => {
    cy.get('h1').should('contain', 'Home')
  });

  it('should display 5 buttons', () => {
    cy.get('button').should('have.length', 5)
  });

  it('should update count when increment and decrement', () => {
    cy.get('[data-cy="button-increment"]').click().click()
    cy.get('[data-cy="counter"]').should('contain', 2);

    cy.get('[data-cy="button-decrement"]').click()
    cy.get('[data-cy="counter"]').should('contain', 1);
    
    cy.get('[data-cy="button-async-increment"]').click();
    cy.get('[data-cy="counter"]').should('contain', 2);
  });

  it('should change page to /about-us when click on go-to-about', () => {
    cy.get('[data-cy="go-to-about"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/about-us');
    })
  });
})