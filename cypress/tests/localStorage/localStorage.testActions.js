export const localStorageTestActions = {
    logLevelShouldBe: (expectedLogLevel) => cy.getLocalStorage('loglevel:webpack-dev-server').should('equal', expectedLogLevel)
}
