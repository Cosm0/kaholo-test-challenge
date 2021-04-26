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

export const mockWithNoNationality = () => {
    cy.fixture('users.json').then(users => {
        cy.intercept(
            'GET',
            'https\:\/\/randomuser\.me\/api\/\?page=1&results=50&nat=',
            users);
        cy.wrap(users.results).as('mock-users');
    });
};
