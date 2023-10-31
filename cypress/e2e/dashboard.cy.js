import { dashboardPage } from "../Pages/DashboardPage";

describe('Dashboard', () => {
    beforeEach(()=>{
        cy.fixture('user.json').then(userData=>{
            cy.login(userData.username, userData.password);
        });
    });

    afterEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });

    describe('Side menu', ()=>{
        it('should have valid links', ()=>{
            Cypress.config('responseTimeout', 60000);
            cy.get(dashboardPage.sideMenuLinksk).each(link=>{
                cy.wrap(link).should('have.attr', 'href').then(href => {
                    cy.request(href).should(response =>{
                        expect(response.status).not.eq( 404);
                    });
                });
            });
        });
    });
    
    describe('Logout', ()=>{
        it('should be able to logout successfully', ()=>{
            dashboardPage.clickDropdownMenuButton();
            dashboardPage.clickLogoutButton();
            cy.url().should('include', '/logout');
        });
    });
});
