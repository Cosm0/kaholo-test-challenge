import { Navigator } from '../utils/navigator';

context("Test challenge website local storage", () => {
    [
        { page: 'home', navigation: Navigator.navigateToHome },
        { page: 'settings', navigation: Navigator.navigateToSettings }
    ].forEach((testCase: TestCase) =>
        it(`Should be set log level to INFO after navigation to ${testCase.page}`, () => {
            // When
            testCase.navigation();

            // Then
            cy.getLocalStorage('loglevel:webpack-dev-server').then(logLevel => {
                cy.log(logLevel);
            });
        }));

    beforeEach(() => {
        cy.clearLocalStorage();
    });
});

interface TestCase {
    page: string;
    navigation: () => any
}
