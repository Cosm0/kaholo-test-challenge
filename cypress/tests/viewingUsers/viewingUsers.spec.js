import {homePageActions} from "../../pages/home/home.actions";
import {viewingUsersActions} from "./viewingUsers.testActions";
import {homePageChecks} from "../../pages/home/home.checks";

context('Home page', () => {
    [0, 1, 10, 49, 50].forEach(howManyUsers => {
        it(`Should list ${howManyUsers} users`, () => {
            // Given
            viewingUsersActions.mockUsersLoadOnPageVisit(howManyUsers);

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
        viewingUsersActions.scrollToBottom();

        // Then
        viewingUsersActions.moreUsersLoaded();
    });

    it.skip('Should allow user details review', () => {
        // TODO: finish draft
        // Given
        // cy.get('@knownUser').then(usr => cy.log(JSON.stringify(usr)));
        viewingUsersActions.knownUserLoaded();

    });
});
