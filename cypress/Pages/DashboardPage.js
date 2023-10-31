export class DashboardPage {

    dropdownButton = '.grid-container__arrow';
    employeesButton = '.side-nav__elements div:nth-child(3)';
    employeesDirectory = '.visible li:nth-child(2)';
    sideMenuLinksk= '.side-nav__elements div li a';
    logoutButton = '.user-dropdown-menu-component .user-menu__item:last-child';

    clickDropdownMenuButton = () => {
        cy.get(this.dropdownButton).click();
    }

    clickLogoutButton = () => {
        cy.get(this.logoutButton).click();
    }

    navigateToEmployeesDirectoryPage = () => {
        cy.get(this.employeesButton).click();
        cy.get(this.employeesDirectory).click();
    }
}
export const dashboardPage = new DashboardPage();