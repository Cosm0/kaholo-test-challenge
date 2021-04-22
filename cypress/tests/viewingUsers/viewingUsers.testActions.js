export const viewingUsersActions = {
    mock100usersWithNoNationalitySpecified: () => cy
        .intercept(
            'GET',
            'https\:\/\/randomuser\.me\/api\/\?page=[12]&results=50&nat=',
            { fixture: 'usersNoNat.json' })
}
