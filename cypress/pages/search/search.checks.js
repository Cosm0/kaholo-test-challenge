import { searchPage } from "./seach.page";

export const searchChecks = {
    searchAvailable: () => cy.get(searchPage.searchBox).should('be.visible')
}
