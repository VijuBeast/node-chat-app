[{
    id: '/#adhjdhjkfhajsdhfjasdf',
    name: 'Viju',
    room: 'Talking Room'
}]
class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var user = this.getUser(id);
         if (user) {
             this.users = this.users.filter((user) => user.id !== id);
         }
         return user;
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0]
    }
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}
module.exports = {Users};


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// var me = new Person('Viju', 22);
// var description = me.description();
// console.log(description);