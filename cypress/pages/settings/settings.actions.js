import { settingsPage } from "./settings.page";

export const settingsPageActions = {
    visit: () => {
        cy.intercept('**/info**').as('info');
        cy.visit('settings');
        cy.wait('@info');
    },
    selectNationality: (nationality) => {
        cy.get(settingsPage.input(nationality)).click()
    }
}

