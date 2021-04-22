import {settingsChecks} from "./settings.checks";

export const settingsPageActions = {
    visit: () => {
        cy.visit('/settings');
        settingsChecks.formVisible();
    }
}
