import { homePageActions } from "../../pages/home/home.actions";
import { viewingUsersActions } from "./viewingUsersList.testActions";
import { homePageChecks } from "../../pages/home/home.checks";
import {navChecks} from "../../pages/nav/nav.checks";
import {searchChecks} from "../../pages/search/search.checks";

context('Home page', () => {
    [0, 1, 10, 49, 50].forEach(howManyUsers => {
        it(`Should list ${howManyUsers} users on page load`, () => {
            // Given
            viewingUsersActions.serverReturnsNumberOfUsers(howManyUsers);

            // When
            homePageActions.visit();

            // Then
            homePageChecks.displayedUsersEquals(howManyUsers);
        });
    });

    it('Should load more users on scroll', () => {
        // Given
        homePageActions.visit();

        // When
        homePageActions.scrollToBottom();

        // Then
        viewingUsersActions.moreUsersLoaded();
    });

    it('Should allow user details review', () => {
        // Given
        viewingUsersActions.serverReturnsUsers();

        // When
        viewingUsersActions.selectsUser();

        // Then
        viewingUsersActions.selectedUserDetailsPresented();
    });

    [500, 404, 401].forEach(errorCode => it(`Should not crash when server responds with error ${errorCode}`, () => {
        // When
        viewingUsersActions.serverReturnsError(errorCode);

        // Then
        homePageChecks.displayedUsersEquals(0);
        navChecks.navAvailable();
        searchChecks.searchAvailable();
    }))
});
