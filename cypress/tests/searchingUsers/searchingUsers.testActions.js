import { mockWithNoNationality } from '../../utils/usersMock';
import { homePageActions } from "../../pages/home/home.actions";
import { searchActions } from "../../pages/search/search.actions";
import { homePageChecks } from "../../pages/home/home.checks";
import { searchChecks } from "../../pages/search/search.checks";
import { navChecks } from "../../pages/nav/nav.checks";

export const searchingUsersTestActions = {
    someUsersListed: () => {
        mockWithNoNationality();
        homePageActions.visit();
    },
    usersMeetingSearchPatternFound: (expectedUsers) => expectedUsers.forEach(usr => homePageChecks.userListed(usr)),
    shouldNotCrash: () => searchChecks.searchAvailable() && navChecks.navAvailable(),
    searchForPatternThatDoesNotMatchAnyUser: () => searchActions.search('for-sure-this-does-not-meet-any-user')
}


