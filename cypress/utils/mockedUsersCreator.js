import {homePageActions} from "../pages/home/home.actions";

export const generateUsers = (howManyUsers, nationality = '') => {
    const mockedResponse = {
        results: []
    }

    for (let i = 0; i < howManyUsers; i++) {
        mockedResponse.results.push({
            "name": {
                "title": "Mr",
                "first": `user-${i}-first-name`,
                "last": `user-${i}-last-name`
            },
            "location": {
                "street": {
                    "number": i,
                    "name": `user-${i}-street`
                },
                "city": `user-${i}-city`,
                "state": `user-${i}-state`,
                "postcode": i
            },
            "email": `user${i}@email.com`,
            "login": {
                "username": `user-${i}-login`
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/34.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
            },
            "nat": nationality
        })
    }

    return mockedResponse;
};

export const returnKnownUsers = (logins) => {
    cy.fixture('usersNoNat.json').then(users => {
        const knownUsers = [];
        logins.forEach(login => {
            let counter = 0;
            const knownUser = users.results[counter];
            knownUser.login.username = login;
            knownUsers.push(knownUser)
            cy.intercept(
                'GET',
                'https\:\/\/randomuser\.me\/api\/\?page=1&results=50&nat=',
                users);
            counter++;
        })
        cy.wrap(knownUsers).as('knownUsers');
    });

    homePageActions.visit();
}

