import { homePage } from "./home.page";

export const homePageChecks = {
    displayedUsersEquals: (expectedCount) => cy.get(homePage.userCard('')) // empty string as parameter allows locating all users' cards
        .should('have.length', expectedCount),
    displayedUsersGreaterThan: (count) => cy.get(homePage.userCard('')) // empty string as parameter allows locating all users' cards
        .should('have.length.greaterThan', count),
    userListed: (expectedLogin) => cy.get(homePage.userCard(expectedLogin)) // non-empty string as parameter specifies user login to search
        .should('be.visible')
}
