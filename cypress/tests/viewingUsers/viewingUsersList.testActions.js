import { generateUsers, returnKnownUsers } from "../../utils/mockedUsersCreator";
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
    serverReturnsUser: () => returnKnownUsers(['testUser']),
    selectsUser() {
        cy.get('@knownUsers').then(users => homePageActions.selectUser(users[0].login.username));
    },
    selectedUserDetailsPresented() {
        cy.get('@knownUsers')
            .then(users => {
                const user = users[0];
                userDetailsChecks.containsUserDetails([
                    user.email,
                    user.login.username,
                    user.location.city,
                    user.location.street.name,
                    user.location.street.number,
                    user.location.state,
                    user.location.postcode])
            });
    }
}

