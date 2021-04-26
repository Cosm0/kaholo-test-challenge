import { navPage} from "./nav.page";

export const navActions = {
    goToHome: () => {
        // cy.intercept('GET', 'https\:\/\/randomuser\.me\/api\/\?page=\d+&results=50&nat=\w*').as('wait-users');
        cy.intercept('GET', 'https\:\/\/randomuser\.me\/api\/?page=[0123456789]&results=50&nat=*').as('wait-users');
        cy.xpath(navPage.home).click();
        cy.wait('@wait-users');
    },
    goToSettings: () => cy.xpath(navPage.settings)
}
