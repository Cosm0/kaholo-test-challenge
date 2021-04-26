import { homePageActions } from "../../pages/home/home.actions";
import { settingsPageActions } from "../../pages/settings/settings.actions";
import { localStorageTestActions } from "./localStorage.testActions";

// Below are not a legit tests hence I skip them. Just added them to show Cypress capabilities to operate on local storage.
context("Test challenge website local storage", () => {
    const expectedLogLevel = 'INFO';

    [
        { page: 'home', navigation: homePageActions.visit },
        { page: 'settings', navigation: settingsPageActions.visit }
    ].forEach((testCase) =>
        it.skip(`Should be set log level to ${expectedLogLevel} after navigation to ${testCase.page}`, () => {
            // When
            testCase.navigation();
            // Then
            localStorageTestActions.logLevelShouldBe(expectedLogLevel)
        }));

    beforeEach(() => {
        cy.clearLocalStorage();
    });
});
