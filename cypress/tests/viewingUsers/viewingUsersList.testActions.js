import { generateUsers } from "../../utils/mockedUsersCreator";
import { homePageChecks } from "../../pages/home/home.checks";
import {homePageActions} from "../../pages/home/home.actions";
import {userDetailsPage} from "../../pages/userDetails/userDetails.page";
import {userDetailsChecks} from "../../pages/userDetails/userDetails.checks";

export const viewingUsersActions = {
    serverReturnsNumberOfUsers: (howMany = 50) => {
        const response = generateUsers(howMany);
        cy.intercept(
            'GET',
            'https\:\/\/randomuser\.me\/api\/\?page=1&results=50&nat=',
            response);

        cy.wrap(response.results).as('mockedUsers');
    },
    moreUsersLoaded: () => {
        const maxUsersOnLoad = 50; // max number of users on Home page load
        homePageChecks.displayedUsersGreaterThan(maxUsersOnLoad);
    },
    serverReturnsUser: (login) => {
        cy.fixture('usersNoNat.json').then(users => {
            const knownUser = users.results[0];
            knownUser.login.username = login;
            cy.wrap(knownUser).as('knownUser');

            cy.intercept(
                'GET',
                'https\:\/\/randomuser\.me\/api\/\?page=1&results=50&nat=',
                users);

            cy.log(knownUser);
        });

        homePageActions.visit();
    },
    selectsUser() {
        cy.get('@knownUser').then(user => homePageActions.selectUser(user.login.username));
    },
    selectedUserDetailsPresented() {
        cy.get('@knownUser')
            .then(user => userDetailsChecks.containsUserDetails([
                user.email,
                user.login.username,
                user.location.city,
                user.location.street.name,
                user.location.street.number,
                user.location.state,
                user.location.postcode]));
    }
}

