export class SignInPage {

    loginField = '#user_login';
    passwordField = '#user_password';
    submitButton = '.login-submit button';
    successLoginMessage = '#flash_notice';

    visitSignInPage = () =>{
        cy.visit('/en/users/sign_in');
    }

    setUserName = (userName) => {
        cy.get(this.loginField).clear().type(userName);
    };

    setPassword = (password) => {
        cy.get(this.passwordField).clear().type(password);
    };

    clickSubmit = () => {
        cy.get(this.submitButton).click();
    };
}
export const signInPage = new SignInPage();