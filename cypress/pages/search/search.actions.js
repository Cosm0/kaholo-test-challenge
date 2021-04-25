import { searchPage } from "./seach.page";

export const searchActions = {
    search: (user) => cy.get(searchPage.searchBox).type(user),
    clearSearch: () => cy.get(searchPage.searchBox).clear()
}

