import { homePageActions } from "../../pages/home/home.actons";
import { settingsPageActions } from "../../pages/settings/settings.actions";


context("Test challenge website local storage", () => {
    const expected = 'INFO';

    [
        { page: 'home', navigation: homePageActions.visit },
        { page: 'settings', navigation: settingsPageActions.visit }
    ].forEach((testCase) =>
        it(`Should be set log level to ${expected} after navigation to ${testCase.page}`, () => {
            // When
            testCase.navigation();

            // Then
            cy.getLocalStorage('loglevel:webpack-dev-server').should('equal', expected)
        }));

    beforeEach(() => {
        cy.clearLocalStorage();
    });
});
