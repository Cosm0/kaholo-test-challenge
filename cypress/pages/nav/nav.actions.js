import { navPage} from "./nav.page";

export const navActions = {
    goToHome: () => cy.xpath(navPage.home),
    goToSettings: () => cy.xpath(navPage.settings)
}
