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

    it.skip('Should load up max 1000 users', () => {
        // TODO: implement
        // scroll 20 times to load 50 users
        // further scrolling does not load more users
    });

    it('Should allow user details review', () => {
        // Given
        viewingUsersActions.serverReturnsUsers();

        // When
        viewingUsersActions.selectsUser();

        // Then
        viewingUsersActions.selectedUserDetailsPresented();
    });

    it('Should allow going back to users list after closing user details', () => {
        // TODO: Implement
        // Open up some user details and then close
        // Should be possible to close and view entire list
    });

    [500, 404, 401].forEach(errorCode => it(`Should not crash when server responds with error ${errorCode}`, () => {
        // When
        viewingUsersActions.serverReturnsError(errorCode);

        // Then
        homePageChecks.displayedUsersEquals(0);
        navChecks.navAvailable();
        searchChecks.searchAvailable();
    }));
});
