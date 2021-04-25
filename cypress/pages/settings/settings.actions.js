import { settingsChecks } from "./settings.checks";

export const settingsPageActions = {
    visit: () => {
        cy.intercept('**/info**').as('info');
        cy.visit('settings');
        cy.wait('@info');
        settingsChecks.formVisible();
    }
}
