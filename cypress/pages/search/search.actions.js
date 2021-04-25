import {searchPage} from "./seach.page";

export const searchActions = {
    searchUser: (user) => cy.get(searchPage.searchBox).type(user)
}
