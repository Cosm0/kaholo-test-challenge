import { homePage } from "./home.page";

export const homePageChecks = {
    displayedUsersEquals: (expectedCount) => cy.get(homePage.userCard('')) // empty 'login' allows locating all users' cards
        .should('have.length', expectedCount),
    displayedUsersGreaterThan: (count) => cy.get(homePage.userCard('')) // empty 'login' allows locating all users' cards
        .should('have.length.greaterThan', count)
}
