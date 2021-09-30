// Lodash
const _ = require('lodash');

// Only change code below this line
// Users nested array with four objects starts here
var users = [{
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        id: 3,
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        id: 4,
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
]
// Users nested array with four objects ends here
//  getUsers function - list of users starts here
function getUsers() {
    var output = "";
    for (const user of users) {
        console.log(`${user.id} - ${user.firstName} ${user.lastName} is ${user.age},${user.gender}\n`);
    }
    return output;
}
//  getUsers function - list of users ends here
// findUser(lastName, gender) functions starts here
function findUserById(id) {

    try {
        var user = _.find(users, {
            id
        });

        var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
        return iFindUser;
    } catch(error) {
        console.log("Cannot read property 'id'");
        return "Cannot read property 'id'";
    }
}
// findUser(lastName, gender) functions ends here
// Only change code above this line

getUsers();
console.log(findUserById(1));

// var a = _.find(users,{'lastName': "Doe"});
// console.log(a)

module.exports = findUserById;

