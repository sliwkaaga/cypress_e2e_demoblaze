describe('DemoBlaze e2e Testing', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com');
    });
  
    it('Registers a new user', () => {
      cy.get('#signin2').click();
      cy.get('#sign-username').type('agal');
      cy.get('#sign-password').type('Qwerty123');
      cy.get('button[onclick="register()"]').click();
    });
  
    it('Logs in an existing user', () => {
      cy.get('#login2').click();
      cy.get('#loginusername').type('agal');
      cy.get('#loginpassword').type('Qwerty123');
      cy.get('button[onclick="logIn()"]').click();
    });
  
    it('Adds a Samsung Galaxy S6 to the cart', () => {
      cy.get('a[href="prod.html?idp_=1"]').first().click();
      cy.get('.btn-success').click();
    });
  });
  
