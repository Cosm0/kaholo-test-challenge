import { navPage } from "./nav.page";

export const navChecks = {
    navAvailable: () => cy.xpath(navPage.home).should('be.visible') && cy.xpath(navPage.settings).should('be.visible')
}
