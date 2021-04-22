import { generateUsers } from "../../utils/mockedUsersCreator";
import {homePageChecks} from "../../pages/home/home.checks";

export const viewingUsersActions = {
    mockUsersLoadOnPageVisit: (howMany) => {
        const response = generateUsers(howMany);
        cy.intercept(
            'GET',
            'https\:\/\/randomuser\.me\/api\/\?page=1&results=50&nat=',
            response);

        return response.results;
    },
    scrollToBottom: () => {
        cy.intercept('GET', 'https\:\/\/randomuser\.me\/api\/\?page=[123456789]&results=50&nat=', { fixture: 'usersNoNat.json' }).as('moreUsers');
        cy.scrollTo('bottom', { duration: 500 });
        cy.wait('@moreUsers');
    },
    moreUsersLoaded: () => {
        const maxUsersOnLoad = 50; // max number of users on Home page load
        homePageChecks.displayedUsersGreaterThan(maxUsersOnLoad);
    },
    knownUserLoaded: () => {
        const fixtureFile = 'usersNoNat.json';
        cy.fixture(fixtureFile).then(fixture => {
            cy.wrap(fixture.results[0]).as('knownUser');
        });
        cy.intercept('GET', 'https\:\/\/randomuser\.me\/api\/\?page=1&results=50&nat=', { fixture: fixtureFile }).as('users');
        cy.wait('@users');
    }
}

