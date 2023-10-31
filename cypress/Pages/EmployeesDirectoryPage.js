export class EmployeesDirectoryPage {

    bButton = '[data-e2e="tab_B"]';
    employeesVisibleCards = '.employee-box:not(.hidden)';

    clickBbutton = () => {
        cy.get(this.bButton).click();
    }
}
export const employeesDirectoryPage = new EmployeesDirectoryPage();