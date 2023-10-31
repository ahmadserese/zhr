import { employeesDirectoryPage } from "../Pages/EmployeesDirectoryPage";
import { dashboardPage } from "../Pages/DashboardPage";

describe('Employees Directory', ()=>{
    before(() =>{
        cy.fixture('user.json').then(userData=>{
            cy.login(userData.username, userData.password)
        }); 
    });

    it('should be able to search via letter buttons', () => {
        //navigate to the page
        dashboardPage.navigateToEmployeesDirectoryPage();
        employeesDirectoryPage.clickBbutton();
        cy.get(employeesDirectoryPage.employeesVisibleCards)
            .should('have.length.greaterThan', 2);
    });
});