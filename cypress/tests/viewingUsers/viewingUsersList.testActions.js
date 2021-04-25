import { generateUsers, mockWithNoNationality } from "../../utils/usersMock";
import { homePageChecks } from "../../pages/home/home.checks";
import { homePageActions } from "../../pages/home/home.actions";
import { userDetailsChecks } from "../../pages/userDetails/userDetails.checks";

export const viewingUsersActions = {
    serverReturnsNumberOfUsers: (howMany = 50) => {
        const response = generateUsers(howMany);
        cy.intercept(
            'GET',
            'https\:\/\/randomuser\.me\/api\/\?page=1&results=50&nat=',
            response);

        cy.wrap(response.results).as('mock-users');
    },
    moreUsersLoaded: () => {
        const maxUsersOnLoad = 50; // max number of users on Home page load
        homePageChecks.displayedUsersGreaterThan(maxUsersOnLoad);
    },
    serverReturnsUsers: () => {
        mockWithNoNationality();
        homePageActions.visit();
    },
    selectsUser: () => {
        // cy.get('@mock-users').then(users => cy.log(JSON.stringify(users.response.body.results)));
        cy.get('@mock-users').then(users => {
            homePageActions.selectUser(users[0].login.username)
        });
    },
    selectedUserDetailsPresented: () => {
        cy.get('@mock-users')
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

