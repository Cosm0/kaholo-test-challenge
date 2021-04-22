import { homePage } from "./home.page";

export const homePageChecks = {
    displayedUsersEquals: (expectedCount) => cy.get(homePage.userCard).should('have.length', expectedCount),
    displayedUsersGreaterThan: (count) => cy.get(homePage.userCard).should('have.length.greaterThan', count)
}
