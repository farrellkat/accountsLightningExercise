/*
    Define a function that returns an array containing
    all of the ip4 addresses. The function should accept
    the accounts array as input.
*/

// Good Way
function getIPAddresses(accountArray) {
    const ipAddresses = []
    for (let i = 0; i < accountArray.length; i++) {
        const currentAccount = accountArray[i]
        const ValueToAddToArray = currentAccount.last_login.ip4
        ipAddresses.push(ValueToAddToArray)
    }
    return ipAddresses
}

// Better Way
const onlyAddresses = accounts.map(
    function (account) {
       return account.last_login.ip4
    }
)

// Best Way
const onlyAddresses = accounts.map(account => account.last_login.ip4)

console.log(onlyAddresses)

/*
    Define a function that will return an array that contains
    all of the values of a particular key on each object in
    an array. The function should accept the accounts array
    as input.

    If you pass the string of "email" to this function as an
    argument value, you should get back an array containing
    all of the emails.
*/

keyValues = (accountArray, keyToAccess) => {
    const keyArray = []
    for (let i = 0; i < accountArray.length; i++) {
        const item = accountArray[i]
        const ValueToAddToArray = item[keyToAccess]
        keyArray.push(ValueToAddToArray)
    }
    return keyArray
}

/*
    Define a function that counts how many email addresses
    exist at yahoo, outlook, hotmail, and gmail. Return an
    object that has a key for each type, and the number of
    each. The function should accept the accounts array as
    input.
    {
        "yahoo": 3,
        etc...
    }
*/

function emailAddresses() {
    const emailDomains = {}

    for (let i = 0; i < accountsArray.length; i++) {
        const account = accountsArray[i]
        const domain = account.email.split("@")[1].split(".")[0]
       if (emailDomains.hasOwnProperty(domain)) {
           emailDomains[domain]++
       } else {
           emailDomains[domain] = 1
       }
    }
    return emailDomains
}


/*
    Define a function that returns an array containing
    only female account holders. The function should
    accept the accounts array as input.
*/

function femaleAccounts(accountsArray) {
    const femaleArray = []
    for (let i = 0; i < accountsArray.length; i++) {
        const account = accountsArray[i]
        if (account.gender === "female") {
            femaleArray.push(account)
        }
    }
    return femaleArray
}

const females = accounts.filter(account => account.gender === "female")

console.log(femaleAccounts(accounts))