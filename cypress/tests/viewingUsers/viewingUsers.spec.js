import {homePageActions} from "../../pages/home/home.actons";
import {viewingUsersActions} from "./viewingUsers.testActions";
import {homePageChecks} from "../../pages/home/home.checks";

context('Home page', () => {
    it('Should display first 50 users on navigation', () => {
        // Given
        viewingUsersActions.mock100usersWithNoNationalitySpecified();

        // When
        homePageActions.visit();

        // Then
        homePageChecks.displayedUsersEquals(50);
    });
});
