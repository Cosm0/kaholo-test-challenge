import {homePage} from "./home.page";

export const homePageActions = {
    visit: () => {
        cy.intercept('GET', 'https\:\/\/randomuser\.me\/api\/\?page=1&results=50&nat=').as('users');
        cy.visit('/');
        cy.wait('@users');
    },
    scrollToBottom: () => {
        cy.intercept('GET', 'https\:\/\/randomuser\.me\/api\/\?page=[123456789]&results=50&nat=', { fixture: 'usersNoNat.json' }).as('moreUsers');
        cy.scrollTo('bottom', { duration: 1500 });
    },
    selectUser: (login) => {
        cy.get(homePage.userCard(login)).click();
    }
}

