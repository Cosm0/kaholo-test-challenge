import { settingsPage } from "./settings.page";

export const settingsChecks = {
    formVisible: () => cy.get(settingsPage.form).should('be.visible')
}
