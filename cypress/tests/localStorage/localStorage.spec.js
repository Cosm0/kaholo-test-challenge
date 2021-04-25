import { homePageActions } from "../../pages/home/home.actions";
import { settingsPageActions } from "../../pages/settings/settings.actions";
import {localStorageTestActions} from "./localStorage.testActions";


context("Test challenge website local storage", () => {
    const expectedLogLevel = 'INFO';

    [
        { page: 'home', navigation: homePageActions.visit },
        { page: 'settings', navigation: settingsPageActions.visit }
    ].forEach((testCase) =>
        it(`Should be set log level to ${expectedLogLevel} after navigation to ${testCase.page}`, () => {
            // When
            testCase.navigation();
            // Then
            localStorageTestActions.logLevelShouldBe(expectedLogLevel)
        }));

    beforeEach(() => {
        cy.clearLocalStorage();
    });
});
