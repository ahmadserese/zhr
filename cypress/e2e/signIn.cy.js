import { signInPage } from "../Pages/SignInPage";

describe('Sign In', ()=>{
    it('should be able to login with the correct password', ()=>{
       cy.fixture('user.json').then(userData=>{
        cy.login(userData.username,userData.password)
       });
        cy.get(signInPage.successLoginMessage)
            .should('be.visible')
            .and('have.text', 'Signed in successfully.');
    });
});
