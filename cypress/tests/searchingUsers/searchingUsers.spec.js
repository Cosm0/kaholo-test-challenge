import { searchingUsersTestActions } from "./searchingUsers.testActions";
import { searchActions } from "../../pages/search/search.actions";
import { homePageChecks } from "../../pages/home/home.checks";

context('Some users match search pattern', () => {
    // Given
    beforeEach(() => searchingUsersTestActions.someUsersListed());

    [
        { property: 'first name', searchPattern: 'Ca', expectedUsers: ['goldenrabbit792', 'goldenlion816', 'sadbutterfly791'] },
        { property: 'last name', searchPattern: 'Ma', expectedUsers: ['organicfrog603', 'bluelion612', 'happypeacock743'] },
        { property: 'email', searchPattern: 'car', expectedUsers: ['goldenrabbit792', 'goldenlion816'] },
        { property: 'login', searchPattern: 'golden', expectedUsers: ['goldenrabbit792', 'goldenlion816', 'goldensnake915', 'goldendog704'] }
        // More test cases can be added depending on a requirements
        // Above test cases requires redefinition when search engine works properly
    ].forEach(testCase => it(`Should find user by ${testCase.property}`, () => {
        // When
        searchActions.search(testCase.searchPattern);

        // Then
        searchingUsersTestActions.usersMeetingSearchPatternFound(testCase.expectedUsers);
    }));
});

context('No user matches search pattern', () => {
    // Given
    before(() => searchingUsersTestActions.someUsersListed());
    beforeEach(() => searchActions.clearSearch());

    it('Should list no users', () => {
        // When
        searchingUsersTestActions.searchForPatternThatDoesNotMatchAnyUser();

        // Then
        homePageChecks.displayedUsersEquals(0);
    });

    it('Should list all users on search box clear', () => {
        // TODO: Implement
        // Should search for user
        // Clear search
        // Assert that all users are listed again
    });

    it('Should not request for more users on search clear', () => {
        // TODO: Implement
        // Should search for user
        // Clear search
        // Assert that backend is not requested for another page
    });
});

context('Search', () => {
    // Given
    beforeEach(() => searchingUsersTestActions.someUsersListed());

    [
        { searchPattern: 'Carlo', expectedResultsFound: 1 },
        { searchPattern: 'CARLO', expectedResultsFound: 1 },
        { searchPattern: 'caRlo', expectedResultsFound: 1 },
        { searchPattern: 'carlo', expectedResultsFound: 1 }
        // More test cases can be designed - similar as per 'Should find user by'
    ].forEach(testCase => it('Search should be case insensitive', () => {
        // When
        searchActions.search(testCase.searchPattern);

        // Then
        homePageChecks.displayedUsersEquals(testCase.expectedResultsFound);
    }));

    ['~','!','@','#','$','%','^','&','*','(',')','_','+','=','-','`','[',']','{','}','|',';','\'',':','\"',',','.','/','<','>','?', '\\'].forEach(char =>
    it(`Should not crash page on ${char} enter`, () => {
        // When
        searchActions.search(char);

        // Then
        searchingUsersTestActions.shouldNotCrash();
    }));
})
