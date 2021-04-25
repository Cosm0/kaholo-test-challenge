import { userDetailsPage } from "./userDetails.page";

export const userDetailsChecks = {
    containsUserDetails(userDetails) {
        userDetails.forEach(detail => cy.get(userDetailsPage.userDetails).contains(detail).should('be.visible'));
    }
}
