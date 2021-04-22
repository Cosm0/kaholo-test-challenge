export class Navigator {
    static navigateToHome() {
        cy.visit('/');
    }

    static navigateToSettings() {
        cy.visit('/settings');
    }
}
