export const homePageActions = {
    visit: () => {
        cy.intercept('GET', 'https\:\/\/randomuser\.me\/api\/\?page=1&results=50&nat=').as('users');
        cy.visit('/');
        cy.wait('@users');
    },
    viewUserDetails: () => {
        cy.get();
    }
}

